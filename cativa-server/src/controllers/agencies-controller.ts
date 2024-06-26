import { Request, Response } from 'express'
import { sqliteConnection } from '@/database/sqlite'

export class AgenciesController {
  async create(request: Request, response: Response) {
    const database = await sqliteConnection()

    const { name, email, phone, website } = request.body

    const checkAgencyExists = await database.get(
      'SELECT * FROM agencies WHERE email = ?',
      [email],
    )
    if (checkAgencyExists) {
      return response.status(400).json({ message: 'Agency already exists' })
    }

    await database.run(
      'INSERT INTO agencies (name, email, phone, website) VALUES (?, ?, ?, ?)',
      [name, email, phone, website],
    )

    return response.status(201).json({ message: 'Agency added successfully' })
  }

  async update(request: Request, response: Response) {
    const database = await sqliteConnection()

    const { id } = request.params
    const { name, email, phone, website } = request.body

    const checkAgencyExists = await database.get(
      'SELECT * FROM agencies WHERE id = ?',
      [id],
    )
    if (!checkAgencyExists) {
      return response.status(404).json({ message: 'Agency not found' })
    }

    await database.run(
      'UPDATE agencies SET name = ?, email = ?, phone = ?, website = ? WHERE id = ?',
      [name, email, phone, website, id],
    )

    return response.status(200).json({ message: 'Agency updated successfully' })
  }

  async delete(request: Request, response: Response) {
    const database = await sqliteConnection()

    const { id } = request.params

    const checkAgencyExists = await database.get(
      'SELECT * FROM agencies WHERE id = ?',
      [id],
    )
    if (!checkAgencyExists) {
      return response.status(404).json({ message: 'Agency not found' })
    }

    await database.run('DELETE FROM agencies WHERE id = ?', [id])

    return response.status(204).json({ message: 'Agency deleted successfully' })
  }

  async getById(request: Request, response: Response) {
    const database = await sqliteConnection()

    const { id } = request.params

    const agency = await database.get('SELECT * FROM agencies WHERE id = ?', [
      id,
    ])
    if (!agency) {
      return response.status(404).json({ message: 'Agency not found' })
    }

    return response.status(200).json(agency)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAll(request: Request, response: Response) {
    const database = await sqliteConnection()

    const agencies = await database.all('SELECT * FROM agencies')

    return response.status(200).json(agencies)
  }
}
