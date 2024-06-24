import sqlite3 from 'sqlite3'
import { open, Database } from 'sqlite'
import path from 'path'
import { agenciesTable } from './agencies.table'

export async function sqliteConnection(): Promise<Database> {
  const database = await open({
    filename: path.resolve(__dirname, '../database', 'cativa-db.db'),
    driver: sqlite3.Database,
  })

  await agenciesTable(database)
  return database
}
