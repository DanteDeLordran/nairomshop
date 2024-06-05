import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/lib/server/db/schema.ts',
    out: './drizzle',
    dbCredentials: {
        url: 'postgres://lordran_dev:lordran_dev@localhost:5432/nairomshop_db',
    },
});