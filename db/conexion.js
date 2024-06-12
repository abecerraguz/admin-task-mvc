import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
// Esto es para que funcione la ruta haca el .env
dotenv.config();


const pool = new Pool({
    connectionString: process.env.DATABASE_URL_LOCAL || process.env.DATABASE_URL
 });

export default pool;