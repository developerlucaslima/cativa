import { AgenciesController } from '@/controllers/agencies-controller'
import { Router } from 'express'

export const agenciesRoutes = Router()
const agenciesController = new AgenciesController()

agenciesRoutes.post('/', agenciesController.create)
