import { Router } from 'express'
import { getUser, getAllUsers ,updateNameUser, deleteUser, getFriends, sendFriendRequest, acceptFriendRequest, declineFriendRequest } from '../controllers/user.js'

const router = Router()


//get all users * 
router.get('/', getAllUsers)

//get user *
router.get('/:id', getUser)

//update name of user *
router.patch('/:id', updateNameUser)

//delete user *
router.delete('/:id', deleteUser)

//get friends
router.get('/:id/friends', getFriends)

//send friend request
router.post('/:id/friends', sendFriendRequest)

//accept friend request
router.patch('/:id/friends', acceptFriendRequest)

//decline friend request
router.delete('/:id/friends', declineFriendRequest)

export default router