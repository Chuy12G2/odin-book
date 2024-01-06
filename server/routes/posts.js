import { Router } from 'express'
import { getPosts, getSinglePost ,createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
import verifyToken from '../middlewares/auth.js'

const router = Router()

//get all posts
router.get('/', verifyToken, getPosts)

//get one post
router.get('/:id', verifyToken, getSinglePost)

//create post
router.post('/', verifyToken, createPost)

//update post
router.patch('/:id', verifyToken, updatePost)

//delete post
router.delete('/:id', verifyToken, deletePost)

//like post
router.patch('/:id/likePost', verifyToken, likePost)

export default router