import { describe, it, expect } from 'vitest'
import { z } from 'zod'

// Schéma extrait du route handler contact pour test isolé
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(2000),
  website: z.string().max(0).optional(), // honeypot
})

describe('Validation formulaire de contact', () => {
  it('accepte un payload valide', () => {
    const result = contactSchema.safeParse({
      name: 'Jean Dupont',
      email: 'jean@example.com',
      subject: 'Renseignement stage',
      message: 'Bonjour, je souhaite des informations sur vos stages de voile pour cet été.',
    })
    expect(result.success).toBe(true)
  })

  it('rejette un email invalide', () => {
    const result = contactSchema.safeParse({
      name: 'Jean',
      email: 'pas-un-email',
      subject: 'Test',
      message: 'Message de test suffisamment long.',
    })
    expect(result.success).toBe(false)
  })

  it('rejette un message trop court', () => {
    const result = contactSchema.safeParse({
      name: 'Jean',
      email: 'jean@example.com',
      subject: 'Test',
      message: 'Court',
    })
    expect(result.success).toBe(false)
  })

  it('détecte le honeypot rempli', () => {
    const payload = {
      name: 'Bot',
      email: 'bot@spam.com',
      subject: 'Spam',
      message: 'Message automatique de spam.',
      website: 'http://spam.com', // honeypot rempli
    }
    const result = contactSchema.safeParse(payload)
    expect(result.success).toBe(false) // website doit rester vide (max 0)
  })

  it('rejette un nom trop long (XSS potentiel)', () => {
    const result = contactSchema.safeParse({
      name: 'A'.repeat(101),
      email: 'test@example.com',
      subject: 'Test',
      message: 'Message suffisamment long pour passer la validation.',
    })
    expect(result.success).toBe(false)
  })
})
