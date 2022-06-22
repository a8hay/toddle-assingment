import express from 'express'
import {
  createAssingment,
  deleteAssingment,
  getAssingment,
  updateAssingment,
} from '../controllers/assingmentController.js'
import protect from '../middlewares/authMiddleware.js'

const assingmentRouter = express.Router()

assingmentRouter.get('/', protect, getAssingment)
assingmentRouter.post('/', protect, createAssingment)
assingmentRouter.put('/:id', protect, updateAssingment)
assingmentRouter.delete('/:id', protect, deleteAssingment)

export default assingmentRouter
