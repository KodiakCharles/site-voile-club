import Link from 'next/link'

export default function ConfidentialitePage({ params: { locale } }: { params: { locale: string } }) {
  const base = locale === 'fr' ? '' : `/${locale}`
  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#0a1628,#1a3a5c)' }}>
        <div className="container page-hero-content">
          <div className="breadcrumb"><Link href={base || '/'}>Accueil</Link> › Politique de confidentialité</div>
          <h1>Politique de confidentialité</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="legal-content">
            <h2>1. Responsable du traitement</h2>
            <p>Le responsable du traitement est l&apos;association <strong>[Nom du club]</strong>, dont le siège est situé au port de plaisance, 00000 Votre-Ville. Contact : <a href="mailto:contact@votreclub.fr">contact@votreclub.fr</a>.</p>

            <h2>2. Données collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <ul>
              <li><strong>Formulaire de contact</strong> : nom, prénom, email, message</li>
              <li><strong>Adhésion en ligne</strong> : nom, prénom, date de naissance, email, adresse postale, téléphone</li>
              <li><strong>Espace adhérent</strong> : identifiant, mot de passe (hashé), historique des réservations</li>
              <li><strong>Newsletter</strong> : adresse email uniquement</li>
              <li><strong>Cookies analytiques</strong> : données de navigation anonymisées (Google Analytics 4)</li>
            </ul>

            <h2>3. Finalités et bases légales</h2>
            <ul>
              <li><strong>Gestion des adhésions</strong> — exécution du contrat (art. 6.1.b RGPD)</li>
              <li><strong>Réponse aux demandes de contact</strong> — intérêt légitime (art. 6.1.f)</li>
              <li><strong>Newsletter</strong> — consentement (art. 6.1.a)</li>
              <li><strong>Analytics</strong> — consentement (art. 6.1.a)</li>
            </ul>

            <h2>4. Durée de conservation</h2>
            <ul>
              <li>Données d&apos;adhésion : 5 ans après la fin de l&apos;adhésion</li>
              <li>Messages de contact : 1 an</li>
              <li>Données newsletter : jusqu&apos;à désinscription</li>
              <li>Logs de connexion : 6 mois (anonymisés)</li>
            </ul>

            <h2>5. Destinataires des données</h2>
            <p>Vos données sont transmises aux sous-traitants suivants :</p>
            <ul>
              <li><strong>HelloAsso</strong> — gestion des paiements d&apos;adhésion</li>
              <li><strong>Brevo</strong> — envoi d&apos;emails transactionnels et newsletter</li>
              <li><strong>Google Analytics</strong> — statistiques de fréquentation (données anonymisées)</li>
            </ul>
            <p>Ces sous-traitants sont soumis à des clauses contractuelles de protection des données conformes au RGPD.</p>

            <h2>6. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p>Pour exercer ces droits : <a href="mailto:contact@votreclub.fr">contact@votreclub.fr</a> ou via votre <Link href={`${base}/espace-adherent`}>espace adhérent</Link> (rubrique &laquo; Mes données &raquo;).</p>
            <p>En cas de réclamation : <a href="https://www.cnil.fr" target="_blank" rel="noopener">CNIL — cnil.fr</a>.</p>

            <h2>7. Sécurité</h2>
            <p>Les mots de passe sont hashés avec bcrypt. Les communications sont chiffrées via HTTPS/TLS. Les accès aux données sont tracés et limités aux personnes habilitées.</p>

            <p style={{ marginTop: '32px', fontSize: '.85rem', color: '#64748b' }}>Dernière mise à jour : mars 2026</p>
          </div>
        </div>
      </section>
    </div>
  )
}
