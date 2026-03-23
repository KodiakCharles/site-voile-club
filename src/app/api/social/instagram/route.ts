import { NextRequest, NextResponse } from 'next/server'
import { resolveClub } from '@/lib/utils/tenant'
import type { InstagramPost } from '@/types'

/**
 * GET /api/social/instagram
 * Récupère les derniers posts Instagram du club via l'API Instagram Graph
 * Nécessite : instagramToken configuré dans le back-office du club
 */
export async function GET(req: NextRequest) {
  const clubId = await resolveClub()
  if (!clubId) return NextResponse.json({ error: 'Club not found' }, { status: 404 })

  // Récupérer le token Instagram depuis le CMS (stocké en base)
  const { getPayload } = await import('payload')
  const payload = await getPayload({ config: (await import('@/payload.config')).default })
  const club = await payload.findByID({ collection: 'clubs', id: clubId })
  const token = club?.social?.instagramToken

  if (!token) {
    return NextResponse.json({ posts: [], message: 'Instagram not configured' })
  }

  try {
    const fields = 'id,media_url,thumbnail_url,media_type,caption,timestamp,permalink'
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&limit=12&access_token=${token}`,
      { next: { revalidate: 900 } } // cache 15 min
    )
    if (!res.ok) throw new Error(`Instagram API: ${res.status}`)
    const data = await res.json()
    const posts: InstagramPost[] = data.data ?? []
    return NextResponse.json({ posts })
  } catch (err) {
    console.error('[Instagram API]', err)
    return NextResponse.json({ posts: [], error: 'Instagram fetch failed' }, { status: 200 })
  }
}
