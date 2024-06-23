import { Router } from 'express'
import { agenciesRoutes } from './agencies-routes'

export const routes = Router()
routes.use('/agencies', agenciesRoutes)
