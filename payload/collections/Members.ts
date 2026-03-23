import { CollectionConfig } from 'payload/types'

export const Members: CollectionConfig = {
  slug: 'members',
  admin: {
    useAsTitle: 'email',
    group: 'Adhérents',
    defaultColumns: ['email', 'firstName', 'lastName', 'club', 'licenseExpiry'],
  },
  auth: false,
  fields: [
    { name: 'club', type: 'relationship', relationTo: 'clubs', required: true },
    { name: 'firstName', type: 'text', required: true, label: 'Prénom' },
    { name: 'lastName', type: 'text', required: true, label: 'Nom' },
    { name: 'email', type: 'email', required: true, unique: true },
    { name: 'phone', type: 'text', label: 'Téléphone' },
    { name: 'birthDate', type: 'date', label: 'Date de naissance' },
    { name: 'avatar', type: 'upload', relationTo: 'media' },
    { name: 'licenseNumber', type: 'text', label: 'N° licence FFVoile' },
    { name: 'licenseExpiry', type: 'date', label: 'Date d\'expiration licence' },
    {
      name: 'sailingLevel',
      type: 'select',
      label: 'Niveau (Passeport Voile)',
      options: ['1', '2', '3', '4', '5', 'non-renseigne'],
      defaultValue: 'non-renseigne',
    },
    { name: 'passwordHash', type: 'text', admin: { hidden: true } },
    { name: 'active', type: 'checkbox', defaultValue: true },
  ],
}
