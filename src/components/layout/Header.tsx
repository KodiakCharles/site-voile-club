'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const locales = ['fr', 'en', 'es']

export default function Header({ locale }: { locale: string }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const t: Record<string, Record<string, string>> = {
    fr: { home: 'Accueil', club: 'Le Club', activities: 'Activités', stages: 'Stages', competition: 'Compétition', prices: 'Tarifs', news: 'Actualités', contact: 'Contact', register: "S'inscrire", members: 'Espace adhérent' },
    en: { home: 'Home', club: 'The Club', activities: 'Activities', stages: 'Courses', competition: 'Racing', prices: 'Prices', news: 'News', contact: 'Contact', register: 'Register', members: 'Members' },
    es: { home: 'Inicio', club: 'El Club', activities: 'Actividades', stages: 'Cursos', competition: 'Competición', prices: 'Precios', news: 'Noticias', contact: 'Contacto', register: 'Inscribirse', members: 'Socios' },
  }
  const nav = t[locale] ?? t.fr
  const base = locale === 'fr' ? '' : `/${locale}`

  const links = [
    { href: `${base}/le-club`, label: nav.club },
    { href: `${base}/activites`, label: nav.activities },
    { href: `${base}/stages`, label: nav.stages },
    { href: `${base}/competition`, label: nav.competition },
    { href: `${base}/tarifs`, label: nav.prices },
    { href: `${base}/actualites`, label: nav.news },
    { href: `${base}/contact`, label: nav.contact },
  ]

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={base || '/'} className="header-logo">
          <span className="logo-anchor">⚓</span>
          <span className="logo-text">Club de Voile</span>
        </Link>

        <nav className={`header-nav${menuOpen ? ' open' : ''}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link${pathname === l.href ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switcher">
            {locales.map((l) => (
              <Link key={l} href={l === 'fr' ? (pathname.replace(/^\/(en|es)/, '') || '/') : pathname.replace(/^\/(fr|en|es)?/, `/${l}`)} className={`lang-btn${locale === l ? ' active' : ''}`}>
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <Link href={`${base}/stages`} className="btn btn-primary btn-sm">{nav.register}</Link>
          <Link href={`${base}/espace-adherent`} className="btn btn-outline btn-sm">{nav.members}</Link>
        </div>

        <button className="menu-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ))}
          <Link href={`${base}/stages`} className="btn btn-primary" style={{ margin: '8px 16px' }} onClick={() => setMenuOpen(false)}>{nav.register}</Link>
          <Link href={`${base}/espace-adherent`} className="btn btn-outline" style={{ margin: '0 16px 16px' }} onClick={() => setMenuOpen(false)}>{nav.members}</Link>
        </nav>
      )}
    </header>
  )
}
