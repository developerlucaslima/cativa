import express, { Request, Response } from 'express'
import { routes } from './routes'
import { sqliteConnection } from './database/sqlite'
import { AppError } from './error/app-error'

sqliteConnection()
const app = express()
const PORT = 3000
app.use(express.json())
app.use(routes)

app.use((error: Error, _: Request, response: Response) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }

  console.error(error)

  return response.status(500).json({
    status: 'error',
    message: '❌ Internal server error',
  })
})

app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`))
