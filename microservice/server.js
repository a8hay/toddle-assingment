import 'dotenv/config'
import 'colors'
import { connectDB } from './config/db.js'
import express from 'express'
import userRouter from './routes/userRoutes.js'
import errorHandler from './middlewares/errorMiddleware.js'
import protect from './middlewares/authMiddleware.js'
const PORT = process.env.PORT || 5000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/user', protect, userRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`.cyan.underline)
})
