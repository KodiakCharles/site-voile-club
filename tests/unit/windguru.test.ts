import { describe, it, expect } from 'vitest'
import { getWindguruEmbedUrl, getWindguruIframe } from '@/lib/api/windguru'

describe('getWindguruEmbedUrl', () => {
  it('génère une URL valide pour une station donnée', () => {
    const url = getWindguruEmbedUrl('174')
    expect(url).toContain('windguru.cz')
    expect(url).toContain('s=174')
  })
})

describe('getWindguruIframe', () => {
  it('génère un iframe avec l\'ID de station', () => {
    const html = getWindguruIframe('48595')
    expect(html).toContain('<iframe')
    expect(html).toContain('48595')
    expect(html).toContain('title="Météo marine Windguru"')
  })

  it('respecte la hauteur par défaut', () => {
    const html = getWindguruIframe('174')
    expect(html).toContain('height="420"')
  })

  it('accepte une hauteur personnalisée', () => {
    const html = getWindguruIframe('174', 300)
    expect(html).toContain('height="300"')
  })
})
