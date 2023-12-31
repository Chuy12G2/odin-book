import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    required: true
  },
  content: {
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
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    ref: "User"
  }
})

const Post = mongoose.model("Post", postSchema)

export default Post