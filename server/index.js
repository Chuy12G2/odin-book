import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'
import postRouter from './routes/posts.js'
import authRouter from './routes/auth.js'

dotenv.config()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/posts', postRouter)

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err))


app.listen(3000)



