import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { resolveClub } from '@/lib/utils/tenant'

const schema = z.object({
  email: z.string().email(),
  firstName: z.string().optional(),
  locale: z.enum(['fr', 'en', 'es']).default('fr'),
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid data' }, { status: 400 })

  const clubId = await resolveClub()
  if (!clubId) return NextResponse.json({ error: 'Club not found' }, { status: 404 })

  const { email, firstName, locale } = parsed.data

  // Récupérer config newsletter du club
  const { getPayload } = await import('payload')
  const payload = await getPayload({ config: (await import('@/payload.config')).default })
  const club = await payload.findByID({ collection: 'clubs', id: clubId })

  const apiKey = club?.integrations?.newsletterApiKey
  const listId = club?.integrations?.newsletterListId

  if (!apiKey || !listId) {
    return NextResponse.json({ message: 'Newsletter not configured for this club' })
  }

  // Intégration Brevo (ex-Sendinblue)
  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: firstName ?? '' },
        listIds: [parseInt(listId)],
        updateEnabled: true,
      }),
    })

    if (!res.ok && res.status !== 204) {
      const err = await res.json()
      throw new Error(err.message ?? 'Brevo error')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Newsletter]', err)
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
  }
}
