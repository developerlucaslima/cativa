import { AgenciesController } from '@/controllers/agencies-controller'
import { Router } from 'express'

export const agenciesRoutes = Router()
const agenciesController = new AgenciesController()

agenciesRoutes.post('/add', agenciesController.create)
agenciesRoutes.get('/', agenciesController.getAll)
agenciesRoutes.get('/getById/:id', agenciesController.getById)
agenciesRoutes.put('/update/:id', agenciesController.update)
agenciesRoutes.delete('/:id', agenciesController.delete)
