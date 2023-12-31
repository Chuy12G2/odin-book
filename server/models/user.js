import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  friends: {
    type: [ObjectId],
    default: [],
    ref: "User"
  },
  requests: {
    type: [ObjectId],
    default: [],
    ref: "User"
  }
})

const User = mongoose.model("User", userSchema)

export default User