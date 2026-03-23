import Link from 'next/link'
import { useTranslations } from 'next-intl'

type Props = { clubId: string; locale: string }

export default function Footer({ clubId, locale }: Props) {
  const t = useTranslations('footer')

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="club-name">Club de Voile</span>
            <p className="footer-desc">Membre de la Fédération Française de Voile</p>
            <div className="footer-social">
              {/* Liens réseaux sociaux dynamiques depuis le CMS */}
            </div>
          </div>

          <div className="footer-links">
            <h3>{t('navigation')}</h3>
            <ul>
              <li><Link href={`/${locale}/le-club`}>{t('club')}</Link></li>
              <li><Link href={`/${locale}/stages`}>{t('stages')}</Link></li>
              <li><Link href={`/${locale}/competition`}>{t('competition')}</Link></li>
              <li><Link href={`/${locale}/tarifs`}>{t('prices')}</Link></li>
              <li><Link href={`/${locale}/actualites`}>{t('news')}</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>{t('legal')}</h3>
            <ul>
              <li><Link href={`/${locale}/mentions-legales`}>{t('legal_notice')}</Link></li>
              <li><Link href={`/${locale}/confidentialite`}>{t('privacy')}</Link></li>
              <li><Link href={`/${locale}/plan-du-site`}>{t('sitemap')}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>{t('contact')}</h3>
            {/* Coordonnées dynamiques depuis le CMS */}
            <div className="footer-ffvoile">
              <a href="https://www.ffvoile.fr" target="_blank" rel="noopener">ffvoile.fr</a>
              <a href="https://www.efvoile.fr" target="_blank" rel="noopener">efvoile.fr</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} — Powered by VoileWeb</span>
          {/* Bandeau RGPD / cookies géré par Tarteaucitron ou Axeptio */}
        </div>
      </div>
    </footer>
  )
}
