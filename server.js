import 'dotenv/config'
import 'colors'
import { connectDB } from './config/db.js'
import express from 'express'
const PORT = process.env.PORT || 5000

connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('Hi There')
})

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`.cyan.underline)
})
