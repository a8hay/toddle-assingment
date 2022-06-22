import expressAsyncHandler from 'express-async-handler'
import Assingment from '../models/assingmentModel.js'
import User from '../models/userModel.js'

// @desc    Get get all Assingments
// @route   GET /api/assingment
// @access  Private
const getAssingment = expressAsyncHandler(async (req, res) => {
  const assingments = await Assingment.find({ createdBy: req.user.id })
  res.status(200).json(assingments)
})

// @desc    Create new Assingment
// @route   POST /api/assingment/create
// @access  Private
const createAssingment = expressAsyncHandler(async (req, res) => {
  //verify user is tutor
  if (!req.user || req.user.role !== 'tutor') {
    res.status(400)
    throw new Error('User not authorised')
  }

  // very fields
  const { name, description, deadlineDate } = req.body
  if (!name || !deadlineDate) {
    res.status(400)
    throw new Error('Please enter all fields')
  }

  // Create Assingment
  const assingment = await Assingment.create({
    name,
    description,
    deadlineDate,
    createdBy: req.user.id,
  })

  res.status(201).json({
    assingment,
  })
})

// @desc    Update Assingment
// @route   PUT /api/assingment/:id
// @access  Private
const updateAssingment = expressAsyncHandler(async (req, res) => {
  const assingment = await Assingment.findById(req.params.id)
  if (!assingment) {
    res.status(400)
    throw new Error('Assingment not found')
  }

  const user = await User.findById(req.user.id)
  // check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // make sure the logged in user has created the assingment
  if (assingment.createdBy.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorised')
  }

  const updatedAssingment = await Assingment.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  )
  res.status(200).json(updatedAssingment)
})

// @desc    Delete Assingment
// @route   DELETE /api/assingment/:id
// @access  Private
const deleteAssingment = expressAsyncHandler(async (req, res) => {
  const assingment = await Assingment.findById(req.params.id)
  if (!assingment) {
    res.status(400)
    throw new Error('Assingment not found')
  }

  const user = await User.findById(req.user.id)
  // check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // make sure the logged in user has created the assingment
  if (assingment.createdBy.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorised')
  }

  await assingment.deleteOne()
  res.status(200).json({ id: req.params.id })
})

export { getAssingment, createAssingment, updateAssingment, deleteAssingment }
