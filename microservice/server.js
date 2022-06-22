import 'dotenv/config'
import 'colors'
import { connectDB } from './config/db.js'
import express from 'express'
import userRouter from './routes/userRoutes.js'
const PORT = process.env.PORT || 5000

connectDB()
const app = express()

app.use('/api/user', userRouter)

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`.cyan.underline)
})
