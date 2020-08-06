import express from 'express'
// import { celebrate, joi, Joi } from 'celebrate'

import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'

const routes = express.Router()

const classesController = new ClassesController()
const connectionsController = new ConnectionsController()

routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

// routes.get('/points', pointsController.index)
// routes.get('/points/:id', pointsController.show)

// routes.post(
//   '/points',
//   upload.single('image'),
//   celebrate(
//     {
//       body: Joi.object().keys({
//         name: Joi.string().required(),
//         email: Joi.string().required(),
//         whatsapp: Joi.number().required(),
//         latitude: Joi.string().required(),
//         longitude: Joi.string().required(),
//         city: Joi.string().required(),
//         uf: Joi.string()
//           .required()
//           .max(2),
//         items: Joi.string().required()
//       })
//     },
//     {
//       // Para retornar todas as mensagens de uma vez
//       abortEarly: false
//     }
//   ),
//   pointsController.create
// )

export default routes
