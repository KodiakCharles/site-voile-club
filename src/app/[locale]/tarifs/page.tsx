import Link from 'next/link'

const licences = [
  { type: 'Enfant (- 18 ans)', price: 180, desc: 'Licence FFVoile incluse, assurance, accès aux cours collectifs' },
  { type: 'Adulte', price: 250, desc: 'Licence FFVoile incluse, assurance, accès aux cours collectifs' },
  { type: 'Famille (2 adultes + enfants)', price: 420, desc: 'Licence FFVoile pour chaque membre, tarif dégressif' },
  { type: 'Compétition', price: 320, desc: 'Accès aux entraînements compétition + prise en charge déplacements régionaux' },
  { type: 'Loisir (sans licence)', price: 90, desc: 'Accès limité aux sorties encadrées, sans assurance FFVoile' },
]

const locations = [
  { boat: 'Optimist', halfDay: 30, fullDay: 50 },
  { boat: 'Laser ILCA 6', halfDay: 40, fullDay: 70 },
  { boat: 'Catamaran (Hobie Cat)', halfDay: 60, fullDay: 100 },
  { boat: 'Dériveur 420', halfDay: 45, fullDay: 75 },
  { boat: 'Planche à voile', halfDay: 35, fullDay: 55 },
]

export default function TarifsPage({ params: { locale } }: { params: { locale: string } }) {
  const base = locale === 'fr' ? '' : `/${locale}`
  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#0a2030,#1a4a6c)' }}>
        <div className="container page-hero-content">
          <div className="breadcrumb"><Link href={base || '/'}>Accueil</Link> › Tarifs</div>
          <h1>Tarifs & Adhésion</h1>
          <p>Rejoignez le club — inscription via HelloAsso, paiement en ligne sécurisé</p>
        </div>
      </section>

      {/* ADHÉSIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Cotisations 2025–2026</h2>
            <p className="section-subtitle">Licence FFVoile incluse dans toutes les formules</p>
          </div>
          <div className="tarifs-grid">
            {licences.map((l) => (
              <div key={l.type} className="tarif-card">
                <h3>{l.type}</h3>
                <div className="tarif-price">{l.price} <span>€ / an</span></div>
                <p>{l.desc}</p>
                <a href="#" className="btn btn-primary btn-sm" style={{ marginTop: '16px' }}>S&apos;inscrire</a>
              </div>
            ))}
          </div>
          <div className="booking-info" style={{ marginTop: '32px' }}>
            <h3>HelloAsso — inscription sans frais</h3>
            <p>Toutes les adhésions sont gérées via <strong>HelloAsso</strong> : aucun frais de dossier, paiement en ligne sécurisé (CB, virement). Un email de confirmation vous est envoyé immédiatement avec votre attestation de licence.</p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Location de bateaux</h2>
            <p className="section-subtitle">Pour les adhérents titulaires d&apos;une carte compétence</p>
          </div>
          <div className="table-responsive">
            <table className="tarifs-table">
              <thead>
                <tr>
                  <th>Support</th>
                  <th>Demi-journée</th>
                  <th>Journée</th>
                </tr>
              </thead>
              <tbody>
                {locations.map((r) => (
                  <tr key={r.boat}>
                    <td>{r.boat}</td>
                    <td>{r.halfDay} €</td>
                    <td>{r.fullDay} €</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '12px', fontSize: '.9rem', color: '#64748b' }}>* Caution requise. Réservation obligatoire 48h à l&apos;avance. Réservé aux membres avec niveau minimum attesté.</p>
        </div>
      </section>

      {/* AIDES */}
      <section className="section">
        <div className="container section-header">
          <h2 className="section-title">Aides & Pass Sport</h2>
          <p className="section-subtitle">Réductions et dispositifs d&apos;aide à la pratique</p>
          <div className="aides-list">
            {[
              { label: 'Pass Sport (gouvernement)', desc: '50 € déduits sur la cotisation pour les jeunes éligibles' },
              { label: 'Coupon Sport CAF', desc: 'Accepté pour les familles allocataires' },
              { label: 'Chèque Vacances ANCV', desc: 'Accepté pour les stages et la location' },
              { label: 'Tarif solidaire', desc: 'Contactez-nous pour les situations particulières' },
            ].map((a) => (
              <div key={a.label} className="aide-row">
                <strong>{a.label}</strong>
                <span>{a.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
