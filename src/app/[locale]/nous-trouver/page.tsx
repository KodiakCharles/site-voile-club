import Link from 'next/link'

export default function NousTrouverPage({ params: { locale } }: { params: { locale: string } }) {
  const base = locale === 'fr' ? '' : `/${locale}`
  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#0a1628,#1d6fa4)' }}>
        <div className="container page-hero-content">
          <div className="breadcrumb"><Link href={base || '/'}>Accueil</Link> › Nous trouver</div>
          <h1>Nous trouver</h1>
          <p>Port de plaisance — accès bateau, voiture et transports en commun</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* CARTE PLACEHOLDER */}
          <div className="map-placeholder" style={{ height: '420px', borderRadius: '12px', marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <div style={{ fontSize: '3rem' }}>🗺️</div>
            <strong style={{ color: '#94a3b8' }}>Carte Google Maps</strong>
            <p style={{ color: '#64748b', fontSize: '.9rem', textAlign: 'center', maxWidth: '400px' }}>
              L&apos;intégration Google Maps sera activée avec votre clé API dans le panneau d&apos;administration.
            </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener"
              className="btn btn-outline btn-sm"
            >
              Ouvrir dans Google Maps
            </a>
          </div>

          <div className="content-grid">
            <div className="content-main">
              <h2>Adresse</h2>
              <address style={{ fontStyle: 'normal', lineHeight: 1.8 }}>
                <strong>Club de Voile</strong><br />
                Port de plaisance, quai des voiliers<br />
                00000 Votre-Ville<br /><br />
                <a href="tel:+33600000000">06 00 00 00 00</a><br />
                <a href="mailto:contact@votreclub.fr">contact@votreclub.fr</a>
              </address>

              <h2 style={{ marginTop: '32px' }}>Accès</h2>
              <div className="acces-list">
                {[
                  { icon: '🚗', label: 'En voiture', desc: 'Parking gratuit au port de plaisance. Suivre la direction "Port de plaisance" depuis le centre-ville.' },
                  { icon: '🚌', label: 'En bus', desc: 'Ligne 12 – arrêt "Port de plaisance". Fréquence 20 min en saison.' },
                  { icon: '🚴', label: 'À vélo', desc: 'Piste cyclable depuis la place centrale. Arceaux vélos disponibles à l\'entrée du port.' },
                  { icon: '⛵', label: 'Par la mer', desc: 'Coffres visiteurs disponibles sur demande. Appeler le port au 06 00 00 00 00.' },
                ].map((a) => (
                  <div key={a.label} className="acces-row">
                    <span className="acces-icon">{a.icon}</span>
                    <div>
                      <strong>{a.label}</strong>
                      <p>{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="content-aside">
              <div className="info-card">
                <h3>Horaires d&apos;accueil</h3>
                <ul className="contact-list">
                  <li><strong>Lun – Ven</strong> : 9h – 18h</li>
                  <li><strong>Samedi</strong> : 9h – 13h</li>
                  <li><strong>Dimanche</strong> : Fermé sauf régate</li>
                </ul>
              </div>
              <div className="info-card" style={{ marginTop: '20px' }}>
                <h3>Coordonnées GPS</h3>
                <p style={{ fontFamily: 'monospace', fontSize: '.9rem' }}>
                  48.000000° N<br />
                  -2.000000° W
                </p>
                <a href="https://www.google.com/maps" target="_blank" rel="noopener" className="btn btn-outline btn-sm" style={{ marginTop: '12px' }}>
                  Itinéraire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
