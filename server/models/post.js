import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: {
    type: [String],
    default: []
  }, 
  likes: {
    type: [ObjectId],
    default: [],
    ref: "User"
  }
})

const Post = mongoose.model("Post", postSchema)

export default Post