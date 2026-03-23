import Link from 'next/link'

export default function Footer({ locale }: { locale: string }) {
  const base = locale === 'fr' ? '' : `/${locale}`

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo"><span>⚓</span> Club de Voile</div>
            <p>Membre de la Fédération Française de Voile — Label École Française de Voile</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="X">𝕏</a>
              <a href="#" aria-label="YouTube">▶️</a>
            </div>
            <div className="footer-badges">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://www.ffvoile.fr/ffv/web/images/logos/logo-ffv.png" alt="FFVoile" height="36" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link href={`${base}/le-club`}>Le Club</Link></li>
              <li><Link href={`${base}/activites`}>Nos activités</Link></li>
              <li><Link href={`${base}/stages`}>Stages & cours</Link></li>
              <li><Link href={`${base}/competition`}>Compétition</Link></li>
              <li><Link href={`${base}/actualites`}>Actualités</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Informations</h4>
            <ul>
              <li><Link href={`${base}/tarifs`}>Tarifs & adhésion</Link></li>
              <li><Link href={`${base}/nous-trouver`}>Nous trouver</Link></li>
              <li><Link href={`${base}/contact`}>Contact</Link></li>
              <li><Link href={`${base}/espace-adherent`}>Espace adhérent</Link></li>
              <li><a href="https://www.ffvoile.fr" target="_blank" rel="noopener">FFVoile.fr</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <address>
              <p>📍 Port de plaisance<br />00000 Votre Ville</p>
              <p>📞 <a href="tel:+33000000000">00 00 00 00 00</a></p>
              <p>✉️ <a href="mailto:contact@club-voile.fr">contact@club-voile.fr</a></p>
              <p>🕐 Lun–Ven 9h–18h<br />(Juil–Août : 8h–20h)</p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Club de Voile — Tous droits réservés</span>
          <div className="footer-legal">
            <Link href={`${base}/mentions-legales`}>Mentions légales</Link>
            <Link href={`${base}/confidentialite`}>Confidentialité</Link>
          </div>
          <span className="footer-powered">Propulsé par <strong>VoileWeb</strong></span>
        </div>
      </div>
    </footer>
  )
}
