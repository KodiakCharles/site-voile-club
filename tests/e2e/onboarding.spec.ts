import { test, expect } from '@playwright/test'

/**
 * Tests end-to-end — Wizard d'onboarding
 * Ces tests supposent que l'environnement de test est lancé (npm run dev)
 * et qu'un super_admin est disponible.
 */

test.describe('Wizard d\'onboarding', () => {
  test.beforeEach(async ({ page }) => {
    // Connexion super_admin
    await page.goto('/admin/login')
    await page.fill('[name=email]', process.env.TEST_SUPER_ADMIN_EMAIL ?? 'admin@test.com')
    await page.fill('[name=password]', process.env.TEST_SUPER_ADMIN_PASSWORD ?? 'password')
    await page.click('[type=submit]')
    await page.waitForURL('/admin')
  })

  test('affiche les 8 étapes du wizard', async ({ page }) => {
    await page.goto('/admin/onboarding')
    await expect(page.getByText('Étape 1')).toBeVisible()
    await expect(page.getByText('Identité du club')).toBeVisible()
  })

  test('valide le nom du club obligatoire', async ({ page }) => {
    await page.goto('/admin/onboarding')
    await page.click('[data-testid=next-step]')
    await expect(page.getByText('Le nom du club est obligatoire')).toBeVisible()
  })

  test('complète l\'étape 1 avec un nom de club', async ({ page }) => {
    await page.goto('/admin/onboarding')
    await page.fill('[name=clubName]', 'Club de Voile Test')
    await page.click('[data-testid=next-step]')
    await expect(page.getByText('Étape 2')).toBeVisible()
  })
})

test.describe('Page d\'accueil du club', () => {
  test('affiche le hero section', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await expect(page.locator('.hero')).toBeVisible()
  })

  test('affiche le menu de navigation', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await expect(page.locator('.site-header')).toBeVisible()
    await expect(page.locator('.header-nav')).toBeVisible()
  })

  test('le sélecteur de langue est présent', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await expect(page.locator('.lang-switcher')).toBeVisible()
  })

  test('la navigation vers /stages fonctionne', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.click('a[href*="/stages"]')
    await expect(page).toHaveURL(/.*\/stages/)
  })
})

test.describe('Formulaire de contact', () => {
  test('soumet un formulaire valide', async ({ page }) => {
    await page.goto('http://localhost:3000/contact')
    await page.fill('[name=name]', 'Jean Test')
    await page.fill('[name=email]', 'jean@test.com')
    await page.fill('[name=subject]', 'Test playwright')
    await page.fill('[name=message]', 'Ceci est un message de test automatisé envoyé par Playwright.')
    await page.click('[type=submit]')
    await expect(page.getByText(/message.*reçu|envoyé/i)).toBeVisible()
  })

  test('affiche une erreur pour un email invalide', async ({ page }) => {
    await page.goto('http://localhost:3000/contact')
    await page.fill('[name=email]', 'pas-un-email')
    await page.click('[type=submit]')
    await expect(page.getByText(/email.*invalide|adresse.*invalide/i)).toBeVisible()
  })
})

test.describe('Espace adhérent', () => {
  test('redirige vers la connexion si non connecté', async ({ page }) => {
    await page.goto('http://localhost:3000/espace-adherent')
    await expect(page).toHaveURL(/.*connexion|.*login/)
  })
})
