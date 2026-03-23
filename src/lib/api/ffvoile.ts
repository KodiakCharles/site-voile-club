/**
 * Client API FFVoile
 * Accès : requiert un accord Bureau Exécutif FFVoile + token
 * Doc : https://api.ffvoile.fr/Help
 */

import { FFVoileRace, FFVoileResult } from '@/types'
import { redis } from '@/lib/utils/redis'

const BASE_URL = process.env.FFVOILE_API_BASE_URL ?? 'https://api.ffvoile.fr'
const TOKEN = process.env.FFVOILE_API_TOKEN ?? ''
const CACHE_TTL = 3600 // 1 heure

async function ffvoileFetch<T>(path: string): Promise<T> {
  const cacheKey = `ffvoile:${path}`

  // Vérifier le cache Redis
  const cached = await redis.get(cacheKey)
  if (cached) return JSON.parse(cached) as T

  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/json',
    },
    next: { revalidate: CACHE_TTL },
  })

  if (!res.ok) {
    throw new Error(`FFVoile API error: ${res.status} ${res.statusText}`)
  }

  const data = (await res.json()) as T
  await redis.setex(cacheKey, CACHE_TTL, JSON.stringify(data))
  return data
}

/** Récupère le calendrier des régates (national + ligue) */
export async function getRaces(params?: {
  ligue?: string
  from?: string
  to?: string
}): Promise<FFVoileRace[]> {
  const query = new URLSearchParams(params as Record<string, string>).toString()
  return ffvoileFetch<FFVoileRace[]>(`/races?${query}`)
}

/** Récupère les résultats d'une régate par son ID */
export async function getRaceResults(raceId: string): Promise<FFVoileResult> {
  return ffvoileFetch<FFVoileResult>(`/races/${raceId}/results`)
}

/** Fallback : lien direct vers le calendrier FFVoile public */
export const FFVOILE_CALENDAR_URL = 'https://regates.ffvoile.fr'
