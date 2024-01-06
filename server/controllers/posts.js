import Post from "../models/post.js"

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  const { userId,title, message } = req.body
  const newPost = new Post({  userId, title, message })

  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {
  const { id } = req.params
  const { title, message } = req.body

  if (!title || !message) {
    return res.status(400).json({ message: 'Title and message are required' })
  } else {
    try {
      const updatedPost = await Post.findByIdAndUpdate(id, { title, message }, { new: true })
      res.status(200).json(updatedPost)
    } catch (error) {
      res.status(409).json({ message: error.message })
    }
  }
}

export const deletePost = async (req, res) => {
  const { id } = req.params
  try {
    const deletedPost = await Post.findByIdAndDelete(id)
    res.status(200).json(deletedPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const likePost = async (req, res) => {
  const { id } = req.params
  const { userId } = req.body

  try {
    const post = await Post.findById(id)
    const isLiked = post.likes.find((id) => id === String(userId))

    if (isLiked) {
      post.likes = post.likes.filter((id) => id !== String(userId))
    } else {
      post.likes.push(userId)
    }
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true })

    res.status(200).json(updatedPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
    
}

export const getSinglePost = async (req, res) => {
  const { id } = req.params
  try {
    const post = await Post.findById(id)
    res.status(200).json(post)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
