import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <div className="hero-badge">⚓ Club de Voile</div>
          <h1 className="hero-title">Bienvenue au<br /><span>Club de Voile</span></h1>
          <p className="hero-tagline">
            Voile légère, compétition, stages pour tous niveaux.<br />
            Venez naviguer avec nous !
          </p>
          <div className="hero-actions">
            <Link href={`/${locale}/stages`} className="btn btn-primary btn-lg">Voir nos stages</Link>
            <Link href={`/${locale}/le-club`} className="btn btn-outline btn-lg">Découvrir le club</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar">
        <div className="container stats-grid">
          <div className="stat-item"><span className="stat-num">1 080</span><span className="stat-label">clubs FFVoile</span></div>
          <div className="stat-item"><span className="stat-num">+20 ans</span><span className="stat-label">d&apos;expérience</span></div>
          <div className="stat-item"><span className="stat-num">8</span><span className="stat-label">supports nautiques</span></div>
          <div className="stat-item"><span className="stat-num">FR · EN · ES</span><span className="stat-label">langues</span></div>
        </div>
      </section>

      {/* ACTIVITÉS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos supports nautiques</h2>
            <p className="section-subtitle">De l&apos;Optimist au foil, pour tous les âges et tous les niveaux</p>
          </div>
          <div className="activities-grid">
            {[
              { icon: '⛵', label: 'Optimist', desc: 'Initiation dès 7 ans' },
              { icon: '🚤', label: 'Dériveur', desc: 'Laser, 420, RS Feva' },
              { icon: '🌊', label: 'Catamaran', desc: 'Vitesse & sensations' },
              { icon: '🏄', label: 'Planche à voile', desc: 'Windsurf & Wing foil' },
              { icon: '✈️', label: 'Foil', desc: 'La glisse ultime' },
              { icon: '⚓', label: 'Croisière', desc: 'Voile habitable' },
            ].map((a) => (
              <div key={a.label} className="activity-card">
                <div className="activity-icon">{a.icon}</div>
                <h3>{a.label}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Prochains stages</h2>
            <p className="section-subtitle">Inscrivez-vous en ligne en quelques clics</p>
          </div>
          <div className="stages-grid">
            {[
              { title: 'Stage Optimist — Été', dates: '7 – 11 juil. 2026', level: 'Initiation', spots: 8, price: '290 €' },
              { title: 'Stage Catamaran Adulte', dates: '14 – 18 juil. 2026', level: 'Débutant', spots: 6, price: '340 €' },
              { title: 'Stage Laser Perfectionnement', dates: '21 – 25 juil. 2026', level: 'Intermédiaire', spots: 4, price: '320 €' },
            ].map((s) => (
              <div key={s.title} className="stage-card">
                <div className="stage-level">{s.level}</div>
                <h3>{s.title}</h3>
                <div className="stage-meta">
                  <span>📅 {s.dates}</span>
                  <span>👤 {s.spots} places</span>
                  <span>💶 {s.price}</span>
                </div>
                <Link href={`/${locale}/stages`} className="btn btn-primary" style={{ marginTop: '16px', width: '100%', textAlign: 'center' }}>
                  S&apos;inscrire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTÉO */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Météo marine</h2>
            <p className="section-subtitle">Conditions en temps réel avant de sortir naviguer</p>
          </div>
          <div className="meteo-placeholder">
            <p>🌬️ Widget Windguru — configurez votre station dans l&apos;admin</p>
            <p style={{ fontSize: '.85rem', color: '#94a3b8', marginTop: '8px' }}>
              Station ID configurable dans le back-office du club
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-alt">
        <div className="container section-header">
          <h2 className="section-title">Nous trouver</h2>
          <p className="section-subtitle">Venez nous rendre visite au port</p>
          <div className="maps-placeholder">
            <p>🗺️ Carte Google Maps — configurez vos coordonnées dans l&apos;admin</p>
          </div>
          <Link href={`/${locale}/contact`} className="btn btn-primary" style={{ marginTop: '24px' }}>
            Nous contacter
          </Link>
        </div>
      </section>
    </main>
  )
}
