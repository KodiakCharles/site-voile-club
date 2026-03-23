import { CollectionConfig } from 'payload/types'

export const Clubs: CollectionConfig = {
  slug: 'clubs',
  admin: {
    useAsTitle: 'name',
    group: 'Multi-tenant',
  },
  access: {
    read: () => true,
    create: ({ req }) => req.user?.role === 'super_admin',
    update: ({ req }) => ['super_admin', 'club_admin'].includes(req.user?.role),
    delete: ({ req }) => req.user?.role === 'super_admin',
  },
  fields: [
    // Identité
    { name: 'name', type: 'text', required: true, label: 'Nom du club' },
    { name: 'slug', type: 'text', required: true, unique: true, label: 'Slug (URL)' },
    { name: 'domain', type: 'text', required: true, unique: true, label: 'Nom de domaine' },
    { name: 'tagline', type: 'text', label: 'Accroche / Slogan', localized: true },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo du club',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Image héro (accueil)',
    },

    // Identité visuelle
    {
      name: 'branding',
      type: 'group',
      label: 'Identité visuelle',
      fields: [
        { name: 'primaryColor', type: 'text', label: 'Couleur principale (hex)', defaultValue: '#1d6fa4' },
        { name: 'secondaryColor', type: 'text', label: 'Couleur secondaire (hex)', defaultValue: '#2eb8e6' },
        { name: 'fontFamily', type: 'select', label: 'Police', options: ['Inter', 'Montserrat', 'Raleway', 'Poppins', 'Open Sans'], defaultValue: 'Inter' },
      ],
    },

    // Coordonnées
    {
      name: 'contact',
      type: 'group',
      label: 'Coordonnées',
      fields: [
        { name: 'address', type: 'text', label: 'Adresse' },
        { name: 'city', type: 'text', label: 'Ville' },
        { name: 'postalCode', type: 'text', label: 'Code postal' },
        { name: 'lat', type: 'number', label: 'Latitude GPS' },
        { name: 'lng', type: 'number', label: 'Longitude GPS' },
        { name: 'phone', type: 'text', label: 'Téléphone' },
        { name: 'email', type: 'email', label: 'Email de contact' },
        { name: 'googleBusinessUrl', type: 'text', label: 'URL fiche Google Business' },
      ],
    },

    // Réseaux sociaux
    {
      name: 'social',
      type: 'group',
      label: 'Réseaux sociaux',
      fields: [
        { name: 'instagram', type: 'text', label: 'Instagram (URL ou @handle)' },
        { name: 'facebook', type: 'text', label: 'Facebook (URL page)' },
        { name: 'twitter', type: 'text', label: 'X / Twitter (URL ou @handle)' },
        { name: 'youtube', type: 'text', label: 'YouTube (URL chaîne)' },
        { name: 'instagramToken', type: 'text', label: 'Instagram API Token (OAuth)', admin: { description: 'Token pour le flux Instagram en temps réel' } },
      ],
    },

    // Intégrations
    {
      name: 'integrations',
      type: 'group',
      label: 'Intégrations',
      fields: [
        { name: 'yoplanningKey', type: 'text', label: 'Clé API Yoplanning' },
        { name: 'axyomesKey', type: 'text', label: 'Clé API Axyomes' },
        { name: 'helloassoUrl', type: 'text', label: 'URL HelloAsso (page association)' },
        { name: 'windguruStationId', type: 'text', label: 'ID Station Windguru' },
        { name: 'ga4MeasurementId', type: 'text', label: 'Google Analytics 4 Measurement ID' },
        { name: 'googleMapsApiKey', type: 'text', label: 'Clé API Google Maps' },
        { name: 'stripeAccountId', type: 'text', label: 'Stripe Connect Account ID (location bateaux)' },
        { name: 'newsletterApiKey', type: 'text', label: 'Clé API Newsletter (Brevo / Mailchimp)' },
        { name: 'newsletterListId', type: 'text', label: 'ID Liste Newsletter' },
      ],
    },

    // Modules actifs
    {
      name: 'modules',
      type: 'group',
      label: 'Modules actifs',
      fields: [
        { name: 'weatherWidget', type: 'checkbox', label: 'Météo marine (Windguru)', defaultValue: false },
        { name: 'boatRental', type: 'checkbox', label: 'Location de bateaux', defaultValue: false },
        { name: 'memberSpace', type: 'checkbox', label: 'Espace adhérent privé', defaultValue: true },
        { name: 'multilingual', type: 'checkbox', label: 'Site multilingue (EN + ES)', defaultValue: false },
        { name: 'ffvoileIntegration', type: 'checkbox', label: 'Intégration API FFVoile', defaultValue: false },
        { name: 'competitionPage', type: 'checkbox', label: 'Page compétition / régates', defaultValue: true },
        { name: 'blogEnabled', type: 'checkbox', label: 'Blog / Actualités', defaultValue: true },
        { name: 'galleryEnabled', type: 'checkbox', label: 'Galerie photos & vidéos', defaultValue: true },
      ],
    },

    // Labels et certifications
    {
      name: 'labels',
      type: 'group',
      label: 'Labels & certifications',
      fields: [
        { name: 'efvoile', type: 'checkbox', label: 'Label École Française de Voile (EFVoile)' },
        { name: 'efvoileCompetition', type: 'checkbox', label: 'EFVoile — École de Compétition' },
        { name: 'efvoileCroisiere', type: 'checkbox', label: 'EFVoile — École de Croisière' },
      ],
    },

    // Plan
    {
      name: 'subscription',
      type: 'group',
      label: 'Abonnement',
      admin: { description: 'Géré par le super admin uniquement' },
      fields: [
        {
          name: 'plan',
          type: 'select',
          label: 'Formule',
          options: ['starter', 'pro', 'premium'],
          defaultValue: 'pro',
        },
        { name: 'active', type: 'checkbox', label: 'Actif', defaultValue: true },
        { name: 'renewalDate', type: 'date', label: 'Date de renouvellement' },
      ],
    },
  ],
}
