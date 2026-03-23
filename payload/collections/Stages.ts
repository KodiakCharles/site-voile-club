import { CollectionConfig } from 'payload/types'

export const Stages: CollectionConfig = {
  slug: 'stages',
  admin: {
    useAsTitle: 'title',
    group: 'Contenus',
    defaultColumns: ['title', 'support', 'startDate', 'availableSpots', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'club', type: 'relationship', relationTo: 'clubs', required: true, label: 'Club' },
    { name: 'title', type: 'text', required: true, label: 'Titre du stage', localized: true },
    {
      name: 'support',
      type: 'select',
      label: 'Support nautique',
      required: true,
      options: [
        'optimist', 'laser-ilca', 'deriveur-420', 'deriveur-470', 'rs-feva',
        'catamaran', 'planche-voile', 'windsurf', 'foil', 'wing-foil',
        'voile-habitable', 'croisiere', 'kayak', 'sup', 'yole', 'autre',
      ],
    },
    {
      name: 'level',
      type: 'select',
      label: 'Niveau',
      options: ['initiation', 'debutant', 'intermediaire', 'perfectionnement', 'competition', 'tous-niveaux'],
    },
    {
      name: 'audience',
      type: 'select',
      label: 'Public',
      options: ['enfants', 'ados', 'adultes', 'famille', 'tous'],
    },
    { name: 'minAge', type: 'number', label: 'Âge minimum' },
    { name: 'maxAge', type: 'number', label: 'Âge maximum' },
    { name: 'startDate', type: 'date', required: true, label: 'Date de début' },
    { name: 'endDate', type: 'date', required: true, label: 'Date de fin' },
    { name: 'totalSpots', type: 'number', label: 'Nombre de places total' },
    { name: 'availableSpots', type: 'number', label: 'Places disponibles' },
    { name: 'price', type: 'number', label: 'Prix (€)' },
    { name: 'description', type: 'richText', label: 'Description', localized: true },
    { name: 'program', type: 'richText', label: 'Programme jour par jour', localized: true },
    { name: 'equipmentProvided', type: 'richText', label: 'Matériel fourni', localized: true },
    { name: 'equipmentRequired', type: 'richText', label: 'Matériel à apporter', localized: true },
    { name: 'meetingPoint', type: 'text', label: 'Point de rendez-vous' },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo du stage',
    },
    {
      name: 'bookingProvider',
      type: 'select',
      label: 'Système de réservation',
      options: ['yoplanning', 'axyomes', 'helloasso', 'internal'],
      defaultValue: 'helloasso',
    },
    { name: 'bookingUrl', type: 'text', label: 'URL / Widget réservation' },
    {
      name: 'status',
      type: 'select',
      label: 'Statut',
      options: ['draft', 'published', 'full', 'cancelled'],
      defaultValue: 'draft',
    },
  ],
}
