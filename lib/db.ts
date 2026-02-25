// Mock DB connector (sqlite disabled for Vercel deploy)
// If you need real DB later, switch to pg (Postgres) or Turso

export function getDb() {
  return null;
}
