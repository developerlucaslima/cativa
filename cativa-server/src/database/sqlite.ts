import sqlite3 from 'sqlite3' // version of the driver used
import sqlite from 'sqlite' // used to establish connection with the db
import path from 'path'

export async function sqliteConnection() {
  const database = await sqlite.open({
    filename: path.resolve(__dirname, '..', 'database.db'),
    driver: sqlite3.Database,
  })

  return database
}
