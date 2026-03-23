import { describe, it, expect, vi, beforeEach } from 'vitest'
import { normalizeHostname } from '@/lib/utils/tenant'

// Mock Redis et Payload pour les tests unitaires
vi.mock('@/lib/utils/redis', () => ({
  redis: {
    get: vi.fn().mockResolvedValue(null),
    setex: vi.fn().mockResolvedValue('OK'),
  },
}))

describe('normalizeHostname', () => {
  it('supprime le port en développement', () => {
    expect(normalizeHostname('localhost:3000')).toBe('localhost')
    expect(normalizeHostname('monclub.fr:8080')).toBe('monclub.fr')
  })

  it('conserve le domaine sans port', () => {
    expect(normalizeHostname('yacht-club-carnac.fr')).toBe('yacht-club-carnac.fr')
    expect(normalizeHostname('www.voile-marseille.fr')).toBe('www.voile-marseille.fr')
  })
})
