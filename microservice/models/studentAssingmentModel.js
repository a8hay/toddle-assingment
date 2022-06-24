import mongoose from 'mongoose'

const studentAssingmentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    assingment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assingment',
    },

    status: {
      type: 'String',
      enum: ['PENDING', 'OVERDUE', 'SUBMITTED'],
      default: 'PENDING',
      required: [true, 'Please provide the status of assingment'],
    },
  },
  { timestamps: true }
)

// add constraint to have unique combinatino of user and assingment
studentAssingmentSchema.index(
  {
    user: 1,
    assingment: 1,
  },
  { unique: true }
)

const StudentAssingment = mongoose.model(
  'StudentAssingment',
  studentAssingmentSchema
)

export default StudentAssingment
