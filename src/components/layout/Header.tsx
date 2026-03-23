import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

type Props = {
  clubId: string
  locale: string
}

export default function Header({ clubId, locale }: Props) {
  const t = useTranslations('nav')

  return (
    <header className="site-header">
      <div className="container">
        <Link href={`/${locale}`} className="header-logo">
          {/* Logo dynamique chargé depuis le CMS */}
          <span className="club-name">Club de Voile</span>
        </Link>

        <nav className="header-nav" aria-label="Navigation principale">
          <Link href={`/${locale}`}>{t('home')}</Link>
          <Link href={`/${locale}/le-club`}>{t('club')}</Link>
          <Link href={`/${locale}/activites`}>{t('activities')}</Link>
          <Link href={`/${locale}/stages`}>{t('stages')}</Link>
          <Link href={`/${locale}/competition`}>{t('competition')}</Link>
          <Link href={`/${locale}/tarifs`}>{t('prices')}</Link>
          <Link href={`/${locale}/actualites`}>{t('news')}</Link>
          <Link href={`/${locale}/contact`}>{t('contact')}</Link>
        </nav>

        <div className="header-actions">
          {/* Sélecteur de langue */}
          <div className="lang-switcher">
            {['fr', 'en', 'es'].map((l) => (
              <Link key={l} href={`/${l}`} className={locale === l ? 'active' : ''}>
                {l.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* CTA principal */}
          <Link href={`/${locale}/stages`} className="btn btn-primary">
            {t('register')}
          </Link>

          {/* Espace adhérent */}
          <Link href={`/${locale}/espace-adherent`} className="btn btn-outline">
            {t('member_space')}
          </Link>
        </div>

        {/* Menu burger mobile */}
        <button className="menu-burger" aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
