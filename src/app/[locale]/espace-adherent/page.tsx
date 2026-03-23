import Link from 'next/link'

export default function EspaceAdherentPage({ params: { locale } }: { params: { locale: string } }) {
  const base = locale === 'fr' ? '' : `/${locale}`
  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#0d1f3c,#1d6fa4)' }}>
        <div className="container page-hero-content">
          <div className="breadcrumb"><Link href={base || '/'}>Accueil</Link> › Espace adhérent</div>
          <h1>Espace adhérent</h1>
          <p>Accédez à votre espace personnel — licence, réservations, résultats</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '520px' }}>
          <div className="login-card">
            <h2>Connexion</h2>
            <p style={{ color: '#94a3b8', marginBottom: '24px', fontSize: '.95rem' }}>
              Utilisez votre email et le mot de passe reçu lors de votre inscription.
            </p>

            <form className="contact-form" action="/api/auth/signin" method="POST">
              <div className="form-group">
                <label htmlFor="email">Adresse email</label>
                <input type="email" id="email" name="email" required placeholder="vous@exemple.fr" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" name="password" required placeholder="••••••••" />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', fontSize: '.9rem' }}>
                <label style={{ display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer' }}>
                  <input type="checkbox" name="remember" />
                  Se souvenir de moi
                </label>
                <a href="#" className="link-ffv">Mot de passe oublié ?</a>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Se connecter
              </button>
            </form>

            <div className="login-divider">ou</div>

            <div style={{ textAlign: 'center' }}>
              <p style={{ color: '#94a3b8', fontSize: '.9rem', marginBottom: '12px' }}>
                Pas encore de compte ?
              </p>
              <Link href={`${base}/tarifs`} className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                Adhérer au club
              </Link>
            </div>
          </div>

          {/* INFO MODULE */}
          <div className="ffvoile-banner" style={{ marginTop: '24px' }}>
            <span>🔐</span>
            <div>
              <strong>Module Espace Adhérent</strong>
              <p>Après connexion : téléchargement de licence, réservation de bateaux, consultation des résultats de compétition et paiement en ligne des cotisations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
