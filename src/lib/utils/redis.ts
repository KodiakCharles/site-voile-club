import { createClient } from 'redis'

const client = createClient({ url: process.env.REDIS_URL ?? 'redis://localhost:6379' })

client.on('error', (err) => console.error('[Redis] Client error', err))

if (!client.isOpen) {
  client.connect()
}

export const redis = client
