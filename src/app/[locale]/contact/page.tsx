import Link from 'next/link'

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const base = locale === 'fr' ? '' : `/${locale}`
  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#0a2030,#1d6fa4)' }}>
        <div className="container page-hero-content">
          <div className="breadcrumb"><Link href={base || '/'}>Accueil</Link> › Contact</div>
          <h1>Nous contacter</h1>
          <p>Une question ? L&apos;équipe vous répond sous 48h</p>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          {/* FORMULAIRE */}
          <div className="content-main">
            <h2>Envoyer un message</h2>
            <form className="contact-form" action="/api/contact" method="POST">
              {/* Honeypot anti-spam */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Prénom *</label>
                  <input type="text" id="firstName" name="firstName" required placeholder="Jean" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Nom *</label>
                  <input type="text" id="lastName" name="lastName" required placeholder="Dupont" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required placeholder="jean.dupont@exemple.fr" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Objet *</label>
                <select id="subject" name="subject" required>
                  <option value="">-- Choisir un objet --</option>
                  <option value="adhesion">Adhésion / Inscription</option>
                  <option value="stage">Renseignements stage</option>
                  <option value="competition">Compétition</option>
                  <option value="location">Location de bateaux</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" required rows={6} placeholder="Votre message..." maxLength={2000} />
              </div>

              <div className="form-group form-check">
                <input type="checkbox" id="rgpd" name="rgpd" required />
                <label htmlFor="rgpd">J&apos;accepte que mes données soient traitées pour répondre à ma demande (<Link href={`${base}/confidentialite`}>politique de confidentialité</Link>)</label>
              </div>

              <button type="submit" className="btn btn-primary">Envoyer le message</button>
            </form>
          </div>

          {/* COORDONNÉES */}
          <div className="content-aside">
            <div className="info-card">
              <h3>Coordonnées</h3>
              <ul className="contact-list">
                <li><strong>Adresse</strong><br />Port de plaisance, quai des voiliers<br />00000 Votre-Ville</li>
                <li><strong>Téléphone</strong><br /><a href="tel:+33600000000">06 00 00 00 00</a></li>
                <li><strong>Email</strong><br /><a href="mailto:contact@votreclub.fr">contact@votreclub.fr</a></li>
              </ul>
            </div>

            <div className="info-card" style={{ marginTop: '20px' }}>
              <h3>Horaires d&apos;accueil</h3>
              <ul className="contact-list">
                <li><strong>Lundi – Vendredi</strong><br />9h – 12h &amp; 14h – 18h</li>
                <li><strong>Samedi</strong><br />9h – 13h (en saison)</li>
                <li><strong>Dimanche</strong><br />Fermé (hors régate)</li>
              </ul>
            </div>

            <div className="info-card" style={{ marginTop: '20px' }}>
              <h3>Réseaux sociaux</h3>
              <div className="social-links-inline">
                <a href="#" className="social-btn">Facebook</a>
                <a href="#" className="social-btn">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
