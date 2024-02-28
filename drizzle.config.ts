import { Config } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

export default {
  dbCredentials: { connectionString: process.env.DB_URL, ssl: true },
  driver: 'pg',
  schema: './lib/db/schema.ts',
  out: './db-migrations'
} as Config;
