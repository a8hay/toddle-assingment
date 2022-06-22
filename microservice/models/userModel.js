import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
    },

    email: {
      type: String,
      required: [true, 'Please provide email'],
      unique: true,
    },

    password: {
      type: String,
      required: [true, 'Please provide password'],
    },

    role: {
      type: String,
      required: [true, 'Please provide type'],
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User
