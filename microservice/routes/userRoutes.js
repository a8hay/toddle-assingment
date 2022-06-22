import express from 'express'
import protect from '../middlewares/authMiddleware.js'

import {
  registerUser,
  loginUser,
  getMe,
} from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/getMe', protect, getMe)

export default userRouter
