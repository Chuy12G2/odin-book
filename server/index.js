import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'
import postRouter from './routes/posts.js'
import authRouter from './routes/auth.js'
import User from './models/user.js'

dotenv.config()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/posts', postRouter)

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err))


app.listen(3000)


// const user1 = new User({
//   name: 'John',
//   email: 'j@j.com',
//   password: '1234'
// })

// const user2 = new User({
//   name: 'Jane',
//   email: 'j@ne.com',
//   password: '1234'
// })

// const user3 = new User({
//   name: 'Joe',
//   email: 'j@o.com',
//   password: '1234'
// })

// user1.save()
// user2.save()
// user3.save()

