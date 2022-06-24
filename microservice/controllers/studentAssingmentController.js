import expressAsyncHandler from 'express-async-handler'
import Assingment from '../models/assingmentModel.js'
import User from '../models/userModel.js'
import StudentAssingment from '../models/studentAssingmentModel.js'
import Submission from '../models/submissionModel.js'

// @desc    Post assign Assingments to students
// @route   POST /api/?action=assignAssingment
// @access  Private
const assignAssingment = expressAsyncHandler(async (req, res) => {
  const { studentId, assingmentId } = req.body

  // check if tutor is requesting
  if (!req.user || req.user.role !== 'tutor') {
    res.status(403)
    throw new Error('Only tutor can assign assingments')
  }

  // check if user is a student
  const student = await User.findOne({ _id: studentId })
  const assingment = await Assingment.findOne({ _id: assingmentId })
  if (!student || student.role !== 'student') {
    res.status(403)
    throw new Error('check id to ensure they are of students')
  }

  // Assing Assingment to student
  const newStudentAssingment = new StudentAssingment({
    user: student,
    assingment,
  })
  try {
    await newStudentAssingment.save()
    res.status(200).json(newStudentAssingment)
  } catch (error) {
    res.status(403)
    throw new Error(error.message)
  }
})

// @desc    Post Submit Assingment
// @route   POST /api/?action=submitAssingment
// @access  Private
const submitAssingment = expressAsyncHandler(async (req, res) => {
  const { assingmentId, remark } = req.body

  // check if student is requesting
  if (!req.user || req.user.role !== 'student') {
    res.status(403)
    throw new Error('Only student can submit assingments')
  }

  // check if assingment exists
  const assingment = await Assingment.findOne({ _id: assingmentId })
  if (!assingment) {
    res.status(403)
    throw new Error('Please provide a valid assingment')
  }

  // check if assingment is not OverDue
  // if (assingment.status === 'OVERDUE') {
  //   res.status(400)
  //   throw new Error('Assingment deadline is passed')
  // }

  // submit the Assingment and update StudentAssingmentStatus
  const newSubmission = new Submission({
    user: req.user.id,
    assingment,
    remark,
  })

  const studentAssingment = await StudentAssingment.findOne({
    user: req.user.id,
    assingment,
  })

  try {
    await newSubmission.save()
    await studentAssingment.updateOne({ status: 'SUBMITTED' })
    res.status(201).json(newSubmission)
  } catch (error) {
    res.status(403)
    throw new Error(error.message)
  }
})

export { assignAssingment, submitAssingment }
