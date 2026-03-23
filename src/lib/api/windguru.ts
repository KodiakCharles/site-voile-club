/**
 * Client Windguru
 * Intégration via widget iframe ou API non-officielle
 * Chaque club configure son ID de station dans le back-office
 */

import { WindguruData } from '@/types'

/** Génère l'URL d'embed du widget Windguru pour une station */
export function getWindguruEmbedUrl(stationId: string): string {
  return `https://www.windguru.cz/widget/v1/?s=${stationId}&m=m&wind=1&waves=1&temperature=1`
}

/** Génère le HTML iframe pour intégration directe */
export function getWindguruIframe(stationId: string, height = 420): string {
  const url = getWindguruEmbedUrl(stationId)
  return `<iframe src="${url}" width="100%" height="${height}" frameborder="0" scrolling="no" title="Météo marine Windguru"></iframe>`
}

/**
 * Récupère les données météo via l'API Windguru (requiert inscription)
 * Alternative : utiliser l'iframe embed si pas d'accès API
 */
export async function getWindguruForecast(stationId: string): Promise<WindguruData | null> {
  try {
    // Windguru propose une API payante pour les données structurées
    // Endpoint non-officiel utilisé par certains clubs (peut changer)
    const res = await fetch(
      `https://www.windguru.cz/int/iapi.php?q=forecast&id_spot=${stationId}&lang=fr`,
      { next: { revalidate: 1800 } } // cache 30 min
    )
    if (!res.ok) return null
    const raw = await res.json()

    return {
      windSpeed: raw.fcst?.WINDSPD ?? [],
      windDirection: raw.fcst?.WINDDIR ?? [],
      windGust: raw.fcst?.GUST ?? [],
      wavHeight: raw.fcst?.HTSGW ?? [],
      wavPeriod: raw.fcst?.PERPW ?? [],
      temperature: raw.fcst?.TMP ?? [],
      hours: raw.fcst?.hours ?? [],
    }
  } catch {
    return null
  }
}
