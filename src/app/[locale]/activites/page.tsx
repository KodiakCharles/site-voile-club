import Link from 'next/link'

const supports = [
  { slug: 'optimist', icon: '⛵', name: 'Optimist', age: 'Dès 7 ans', level: 'Initiation', desc: "Le dériveur monotype par excellence pour apprendre la voile. Idéal pour les enfants de 7 à 15 ans.", color: '#0ea5e9' },
  { slug: 'deriveur', icon: '🚤', name: 'Dériveur', age: 'Dès 12 ans', level: 'Initiation → Compétition', desc: 'Laser ILCA, 420, RS Feva — des bateaux légers et nerveux pour progresser rapidement.', color: '#2dd4bf' },
  { slug: 'catamaran', icon: '🌊', name: 'Catamaran', age: 'Dès 14 ans', level: 'Initiation → Perfectionnement', desc: 'Vitesse, sensations et navigation en équipage. Le catamaran offre les plaisirs de la glisse.', color: '#f0b429' },
  { slug: 'planche', icon: '🏄', name: 'Planche à voile', age: 'Dès 10 ans', level: 'Initiation → Perfectionnement', desc: 'Windsurf, planche à voile initiation. Équilibre, technique et liberté sur l\'eau.', color: '#a78bfa' },
  { slug: 'foil', icon: '✈️', name: 'Foil & Wing Foil', age: 'Dès 16 ans', level: 'Perfectionnement', desc: 'La glisse ultime : voler au-dessus de l\'eau. Wing foil et foil dériveur pour les plus avancés.', color: '#f472b6' },
  { slug: 'croisiere', icon: '⚓', name: 'Voile habitable', age: 'Adultes', level: 'Initiation → Croisière', desc: 'Navigation hauturière, stages croisière côtière et hauturière. Permis côtier inclus.', color: '#4ade80' },
  { slug: 'kayak', icon: '🛶', name: 'Kayak & SUP', age: 'Tous âges', level: 'Loisir', desc: 'Kayak de mer et stand up paddle pour découvrir le littoral autrement.', color: '#fb923c' },
  { slug: 'yole', icon: '🚣', name: 'Yole', age: 'Dès 10 ans', level: 'Initiation', desc: 'Navigation en équipage sur embarcation traditionnelle. Cohésion et esprit d\'équipe.', color: '#60a5fa' },
]

export default function ActivitesPage({ params: { locale } }: { params: { locale: string } }) {
  const base = locale === 'fr' ? '' : `/${locale}`
  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#0a2030,#1d6fa4)' }}>
        <div className="container page-hero-content">
          <div className="breadcrumb"><Link href={base || '/'}>Accueil</Link> › Activités</div>
          <h1>Nos supports nautiques</h1>
          <p>8 disciplines pour naviguer à tout âge et tout niveau</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="supports-grid">
            {supports.map((s) => (
              <div key={s.slug} className="support-card" style={{ '--accent': s.color } as React.CSSProperties}>
                <div className="support-icon">{s.icon}</div>
                <h2>{s.name}</h2>
                <div className="support-meta">
                  <span>👤 {s.age}</span>
                  <span>📊 {s.level}</span>
                </div>
                <p>{s.desc}</p>
                <Link href={`${base}/stages?support=${s.slug}`} className="btn btn-primary" style={{ marginTop: '16px' }}>
                  Voir les stages
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
