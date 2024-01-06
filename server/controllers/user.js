import User from "../models/user.js"

export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateNameUser = async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const user = await User.findByIdAndUpdate(id, { name })
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}


export const getFriends = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    )
    return res.status(200).json(friends)

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const sendFriendRequest = async (req, res) => {
  try {
    const { id } = req.params
    const { friendId } = req.body

    const user = await User.findById(id)
    const friend = await User.findById(friendId)

    user.requestsSent.push(friendId)
    friend.requestsReceived.push(id)

    await user.save()
    await friend.save()

    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const acceptFriendRequest = async (req, res) => {
  try {
    const { id } = req.params
    const { friendId } = req.body

    const user = await User.findById(id)
    const friend = await User.findById(friendId)

    if (user.friends.includes(friendId)) {
      return res.status(400).json({ message: "Already friends" })
    } else {
      user.friends.push(friendId)
      friend.friends.push(id)
      await user.save()
      await friend.save()
      res.status(200).json(user)
    }
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const declineFriendRequest = async (req, res) => {
  try {
    const { id } = req.params
    const { friendId } = req.body

    const user = await User.findById(id)
    const friend = await User.findById(friendId)

    user.requests = user.requests.filter((id) => id !== friendId)
    friend.requests = friend.requests.filter((id) => id !== id)

    await user.save()
    await friend.save()

    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }  
}

export const deleteFriend = async (req, res) => {
  try {
    const { id } = req.params
    const { friendId } = req.body

    const user = await User.findById(id)
    const friend = await User.findById(friendId)

    user.friends = user.friends.filter((id) => id !== friendId)
    friend.friends = friend.friends.filter((id) => id !== id)

    await user.save()
    await friend.save()

    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
