import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const locales = ['fr', 'en', 'es'] as const
const defaultLocale = 'fr'

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // /fr est omis (défaut), /en et /es sont préfixés
})

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Exclure les routes Payload admin et API
  if (pathname.startsWith('/admin') || pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  // Vérifier que le site est actif pour ce domaine (simple check header)
  // La vérification complète se fait dans les layouts Server Components

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
}
