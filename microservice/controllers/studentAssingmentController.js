import expressAsyncHandler from 'express-async-handler'
import Assingment from '../models/assingmentModel.js'
import User from '../models/userModel.js'
import StudentAssingment from '../models/studentAssingmentModel.js'

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
    throw new Error(error.message)
  }
})

export { assignAssingment }
