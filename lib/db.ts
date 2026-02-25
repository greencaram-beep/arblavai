import Database from 'better-sqlite3';
import path from 'path';

let db: Database.Database | null = null;

export function getDb() {
  if (db) return db;
  
  try {
    // Vercel / Local handling
    const dbPath = path.join(process.cwd(), 'engine.db');
    // Read-only access, do not create if missing
    db = new Database(dbPath, { readonly: true, fileMustExist: false });
    return db;
  } catch (err) {
    // Silent fail if DB is missing (common in build/deploy if not provided)
    return null;
  }
}
