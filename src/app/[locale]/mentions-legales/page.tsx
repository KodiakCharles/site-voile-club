import Link from 'next/link'

export default function MentionsLegalesPage({ params: { locale } }: { params: { locale: string } }) {
  const base = locale === 'fr' ? '' : `/${locale}`
  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#0a1628,#1a3a5c)' }}>
        <div className="container page-hero-content">
          <div className="breadcrumb"><Link href={base || '/'}>Accueil</Link> › Mentions légales</div>
          <h1>Mentions légales</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="legal-content">
            <h2>Éditeur du site</h2>
            <p><strong>Nom de l&apos;association :</strong> Club de Voile [À compléter]<br />
            <strong>Forme juridique :</strong> Association loi 1901<br />
            <strong>SIRET :</strong> [À compléter]<br />
            <strong>Siège social :</strong> Port de plaisance, 00000 Votre-Ville<br />
            <strong>Email :</strong> <a href="mailto:contact@votreclub.fr">contact@votreclub.fr</a><br />
            <strong>Tél. :</strong> 06 00 00 00 00</p>

            <h2>Directeur de la publication</h2>
            <p>Le Président de l&apos;association.</p>

            <h2>Hébergement</h2>
            <p><strong>VoileWeb / Kodiak</strong><br />
            Infrastructure hébergée en France (OVH Cloud, Roubaix).<br />
            Ce site est propulsé par la solution <em>VoileWeb</em>.</p>

            <h2>Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus publiés sur ce site (textes, photos, logos) est la propriété exclusive de l&apos;association ou de ses partenaires. Toute reproduction, même partielle, est interdite sans accord écrit préalable.</p>

            <h2>Responsabilité</h2>
            <p>L&apos;association s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations. Elle ne peut être tenue responsable des erreurs ou omissions. Les liens vers des sites tiers sont fournis à titre informatif.</p>

            <h2>Données personnelles</h2>
            <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;effacement de vos données. Consultez notre <Link href={`${base}/confidentialite`}>politique de confidentialité</Link> ou contactez-nous à <a href="mailto:contact@votreclub.fr">contact@votreclub.fr</a>.</p>

            <h2>Cookies</h2>
            <p>Ce site utilise des cookies fonctionnels et analytiques (Google Analytics). Un bandeau de consentement vous permet de les accepter ou les refuser.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
