import express from 'express'
import protect from '../middlewares/authMiddleware.js'
import {
  assignAssingment,
  submitAssingment,
} from '../controllers/studentAssingmentController.js'

const actionRouter = express.Router()

actionRouter.post('/assignAssignment', protect, assignAssingment)
actionRouter.post('/submitAssignment', protect, submitAssingment)

export default actionRouter
