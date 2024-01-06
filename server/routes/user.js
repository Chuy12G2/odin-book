import { Router } from 'express'
import { getUser, getAllUsers ,updateNameUser, deleteUser, getFriends, sendFriendRequest, acceptFriendRequest, declineFriendRequest, deleteFriend } from '../controllers/user.js'
import verifyToken from '../middlewares/auth.js'

const router = Router()


//get all users * 
router.get('/', verifyToken, getAllUsers)

//get user *
router.get('/:id', verifyToken, getUser)

//update name of user *
router.patch('/:id', verifyToken, updateNameUser)

//delete user *
router.delete('/:id', verifyToken, deleteUser)

//get friends *
router.get('/:id/friends', verifyToken, getFriends)

//send friend request *
router.post('/:id/friends', verifyToken, sendFriendRequest)

//accept friend request *
router.patch('/:id/friends', verifyToken, acceptFriendRequest)

//decline friend request *
router.delete('/:id/friends', verifyToken, declineFriendRequest)

//delete friend *
router.delete('/:id/friends/:friendId', verifyToken, deleteFriend)

export default router