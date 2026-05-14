import { Pool } from 'pg';

// Render automatically sets DATABASE_URL in your environment variables
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for secure connections to Render Postgres
  },
});

export default pool;
