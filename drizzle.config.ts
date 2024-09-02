import 'dotenv/config'
import type { Config } from 'drizzle-kit'

export default {
  schema: './db/schema.ts',
  dialect: 'sqlite',
  out: './migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
  verbose: true,
  strict: true,
} satisfies Config
