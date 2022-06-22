import User from '../models/userModel.js'

const getMe = (req, res) => {
  console.log(User)
  res.status(200).json({ message: 'Hi Me' })
}

export { getMe }
