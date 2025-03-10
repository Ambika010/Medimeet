import express from 'express'
import { registerUser, loginUser, getProfile, updateProfile } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const userRouter = express.Router()
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/get-profile', authUser, getProfile)
userRouter.post('/update-profile', upload.single('image'), authUser, updateProfile)

export default userRouter

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2QxNjk4OTRkNmMwYmNlYTc3ZTgwNiIsImlhdCI6MTc0MTQ5NjYyMH0.bM4NrrRq0SvbvfUwTMumbOMgwUwkCCCATyoTeApi9u0