import { migrate } from 'drizzle-orm/node-postgres/migrator';
import db from '.';

const migrateDb = async () => {
  console.time('Migrate');
  await migrate(db, { migrationsFolder: './db-migrations' });
  console.timeEnd('Migrate');
};

migrateDb().catch(err => {
  console.error('[MIGRATION ERROR]: ', err);
});
