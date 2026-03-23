import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { resolveClub } from '@/lib/utils/tenant'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(2000),
  // Honeypot anti-spam (doit rester vide)
  website: z.string().max(0).optional(),
})

export async function POST(req: NextRequest) {
  const body = await req.json()

  // Anti-spam honeypot
  if (body.website) return NextResponse.json({ success: true }) // silently ignore

  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid data' }, { status: 400 })

  const clubId = await resolveClub()
  if (!clubId) return NextResponse.json({ error: 'Club not found' }, { status: 404 })

  const { getPayload } = await import('payload')
  const payload = await getPayload({ config: (await import('@/payload.config')).default })
  const club = await payload.findByID({ collection: 'clubs', id: clubId })
  const clubEmail = club?.contact?.email

  if (!clubEmail) return NextResponse.json({ error: 'Club email not configured' }, { status: 500 })

  const { name, email, phone, subject, message } = parsed.data

  await resend.emails.send({
    from: process.env.EMAIL_FROM ?? 'noreply@voileweb.fr',
    to: clubEmail,
    replyTo: email,
    subject: `[Contact] ${subject}`,
    html: `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ''}
      <p><strong>Objet :</strong> ${subject}</p>
      <hr/>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  })

  // Confirmation à l'expéditeur
  await resend.emails.send({
    from: process.env.EMAIL_FROM ?? 'noreply@voileweb.fr',
    to: email,
    subject: `Votre message a bien été reçu — ${club.name}`,
    html: `<p>Bonjour ${name},</p><p>Nous avons bien reçu votre message et vous répondrons dans les meilleurs délais.</p><p>L'équipe ${club.name}</p>`,
  })

  return NextResponse.json({ success: true })
}
