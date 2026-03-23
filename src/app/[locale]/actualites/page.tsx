import Link from 'next/link'

const posts = [
  {
    id: 1, slug: 'resultats-championnat-departemental-optimist',
    title: 'Résultats du Championnat Départemental Optimist',
    date: '15 mars 2026', category: 'Compétition',
    excerpt: 'Nos jeunes optimistes ont brillé lors du championnat départemental. Thomas L. décroche la 2e place et se qualifie pour la phase régionale.',
    image: null,
  },
  {
    id: 2, slug: 'ouverture-inscriptions-stages-ete-2026',
    title: 'Ouverture des inscriptions — Stages Été 2026',
    date: '10 mars 2026', category: 'Stages',
    excerpt: 'Les inscriptions pour les stages d\'été 2026 sont ouvertes ! Au programme : Optimist, Laser ILCA, Catamaran, Wing Foil et Voile habitable. Places limitées.',
    image: null,
  },
  {
    id: 3, slug: 'nouveau-materiel-wing-foil',
    title: 'Nouveau matériel Wing Foil — La flotte s\'agrandit',
    date: '2 mars 2026', category: 'Vie du club',
    excerpt: 'Le club vient d\'acquérir 2 nouveaux wings et foils pour la saison 2026. La pratique du wing foil est désormais accessible dès 16 ans.',
    image: null,
  },
  {
    id: 4, slug: 'assemblee-generale-2026',
    title: 'Compte-rendu Assemblée Générale 2026',
    date: '18 fév. 2026', category: 'Vie du club',
    excerpt: 'L\'assemblée générale annuelle s\'est tenue le 15 février. Renouvellement du bureau, présentation des comptes et programme de la saison à venir.',
    image: null,
  },
  {
    id: 5, slug: 'label-ecoresponsable-ffvoile',
    title: 'Le club obtient le label Éco-responsable FFVoile',
    date: '5 fév. 2026', category: 'Distinctions',
    excerpt: 'Fiers d\'annoncer l\'obtention du label Éco-responsable FFVoile niveau 1. Engagement pour la protection du milieu maritime et réduction de notre empreinte.',
    image: null,
  },
  {
    id: 6, slug: 'bilan-saison-2025',
    title: 'Bilan de la saison 2025 — Une année record',
    date: '12 jan. 2026', category: 'Bilan',
    excerpt: '320 licenciés, 45 compétitions, 8 podiums régionaux. La saison 2025 restera comme l\'une des plus belles de l\'histoire du club. Merci à tous !',
    image: null,
  },
]

const categories = ['Toutes', 'Compétition', 'Stages', 'Vie du club', 'Distinctions', 'Bilan']

export default function ActualitesPage({ params: { locale } }: { params: { locale: string } }) {
  const base = locale === 'fr' ? '' : `/${locale}`
  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#0a1628,#1a3a5c)' }}>
        <div className="container page-hero-content">
          <div className="breadcrumb"><Link href={base || '/'}>Accueil</Link> › Actualités</div>
          <h1>Actualités</h1>
          <p>Toute la vie du club — résultats, stages, événements</p>
        </div>
      </section>

      <section className="section-filters">
        <div className="container filters-bar">
          <span className="filter-label">Filtrer :</span>
          {categories.map((c) => (
            <button key={c} className={`filter-btn${c === 'Toutes' ? ' active' : ''}`}>{c}</button>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((p) => (
              <article key={p.id} className="blog-card">
                <div className="blog-img-placeholder">
                  <span>{p.category}</span>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-cat">{p.category}</span>
                    <span className="blog-date">{p.date}</span>
                  </div>
                  <h2>{p.title}</h2>
                  <p>{p.excerpt}</p>
                  <Link href={`${base}/actualites/${p.slug}`} className="btn btn-outline btn-sm" style={{ marginTop: '12px' }}>
                    Lire la suite
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button className="btn btn-outline">Charger plus d&apos;articles</button>
          </div>
        </div>
      </section>
    </div>
  )
}
