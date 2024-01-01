import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/user', userRouter)

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err))


app.listen(3000)



