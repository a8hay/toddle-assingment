import express from 'express'
import { getMe } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.get('/getMe', getMe)

export default userRouter
