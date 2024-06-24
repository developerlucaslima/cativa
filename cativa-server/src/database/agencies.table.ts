import { Database } from 'sqlite'

export async function agenciesTable(database: Database) {
  const tableExists = await database.get(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='agencies';`,
  )

  if (!tableExists) {
    await database.exec(`
      CREATE TABLE agencies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone TEXT,
        website TEXT
      );
    `)
  }
}
