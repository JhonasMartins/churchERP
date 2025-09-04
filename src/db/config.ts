// Database configuration
import { Pool } from 'pg';

// In a real application, these would come from environment variables
const dbConfig = {
  user: process.env.DB_USER || 'church_user',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'church_db',
  password: process.env.DB_PASSWORD || 'church_password',
  port: parseInt(process.env.DB_PORT || '5432'),
};

// Create a pool instance (commented out since we're not connecting yet)
// export const pool = new Pool(dbConfig);

// Export the config for use in API files
export { dbConfig };