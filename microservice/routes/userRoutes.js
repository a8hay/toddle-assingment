import express from 'express'
import {
  registerUser,
  loginUser,
  getMe,
} from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/getMe', getMe)

export default userRouter
