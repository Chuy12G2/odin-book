import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './userSlicer'
import { postsSlice } from './postsSlicer'

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    posts: postsSlice.reducer
  }
})

export default store



