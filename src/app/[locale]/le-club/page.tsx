import Link from 'next/link'

export default function ClubPage({ params: { locale } }: { params: { locale: string } }) {
  const base = locale === 'fr' ? '' : `/${locale}`
  return (
    <div>
      {/* HERO */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#0a1628,#1a3a5c)' }}>
        <div className="container page-hero-content">
          <div className="breadcrumb"><Link href={base || '/'}>Accueil</Link> › Le Club</div>
          <h1>Le Club</h1>
          <p>Une passion partagée pour la voile depuis plus de 20 ans</p>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="section">
        <div className="container content-grid">
          <div className="content-main">
            <h2>Notre histoire</h2>
            <p>Fondé en 2001, notre club de voile accueille chaque année plus de 300 licenciés, du jeune optimiste au marin confirmé. Installés sur le port de plaisance, nous bénéficions d&apos;un plan d&apos;eau exceptionnel pour la pratique de tous les supports nautiques.</p>
            <p style={{ marginTop: '16px' }}>Labelisé <strong>École Française de Voile</strong>, nous proposons des formations encadrées par des moniteurs diplômés d&apos;État, dans le respect des valeurs fédérales : sécurité, progression et convivialité.</p>
            <div className="club-stats-row">
              {[['300+','licenciés'],['20+','moniteurs diplômés'],['50+','bateaux'],['1 label','EFVoile']].map(([n,l]) => (
                <div key={l} className="club-stat"><span className="club-stat-num">{n}</span><span className="club-stat-label">{l}</span></div>
              ))}
            </div>
          </div>
          <div className="content-aside">
            <div className="info-card">
              <h3>🏷️ Nos labels</h3>
              <ul className="label-list">
                <li>✅ École Française de Voile</li>
                <li>✅ École de Compétition</li>
                <li>✅ École de Croisière</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Notre équipe</h2>
            <p className="section-subtitle">Des moniteurs diplômés et passionnés</p>
          </div>
          <div className="team-grid">
            {[
              { name: 'Marc Durand', role: 'Directeur technique', diploma: 'DE Voile', icon: '👨‍✈️' },
              { name: 'Sophie Martin', role: 'Monitrice principale', diploma: 'BPJEPS Voile', icon: '👩‍✈️' },
              { name: 'Thomas Leroy', role: 'Moniteur compétition', diploma: 'BPJEPS Voile', icon: '👨‍✈️' },
              { name: 'Emma Bernard', role: 'Monitrice jeunes', diploma: 'CQP Initiateur', icon: '👩‍✈️' },
            ].map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-avatar">{m.icon}</div>
                <h3>{m.name}</h3>
                <p className="team-role">{m.role}</p>
                <span className="team-diploma">{m.diploma}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="section">
        <div className="container section-header">
          <h2 className="section-title">Nos partenaires</h2>
          {['Partenaire Principal', 'Sponsor Or', 'Sponsor Argent', 'Partenaire local'].map((p) => (
            <div key={p} className="partner-placeholder">{p}</div>
          ))}
        </div>
      </section>
    </div>
  )
}
