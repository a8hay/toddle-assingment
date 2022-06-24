import express from 'express'
import protect from '../middlewares/authMiddleware.js'
import { assignAssingment } from '../controllers/studentAssingmentController.js'

const actionRouter = express.Router()

actionRouter.post('/', protect, assignAssingment)

export default actionRouter
