import 'dotenv/config'
import 'colors'
import { connectDB } from './config/db.js'
import express from 'express'
import userRouter from './routes/userRoutes.js'
import assingmentRouter from './routes/assingmentRoutes.js'
import actionRouter from './routes/actionRouter.js'
import errorHandler from './middlewares/errorMiddleware.js'
const PORT = process.env.PORT || 5000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send({'toddle backend assignment, refer github readme'})
})
app.use('/api/user', userRouter)
app.use('/api/assingment', assingmentRouter)
app.use('/api/action', actionRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`.cyan.underline)
})
