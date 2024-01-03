import { Router } from 'express'
import { getPosts, getSinglePost ,createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = Router()

//get all posts
router.get('/', getPosts)

//get one post
router.get('/:id', getSinglePost)

//create post
router.post('/', createPost)

//update post
router.patch('/:id', updatePost)

//delete post
router.delete('/:id', deletePost)

//like post
router.patch('/:id/likePost', likePost)

export default router