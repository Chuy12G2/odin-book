import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  friends: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    ref: "User"
  },
  requests: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    ref: "User"
  }
})

const User = mongoose.model("User", userSchema)

export default User