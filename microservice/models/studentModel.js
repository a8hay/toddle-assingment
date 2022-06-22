import mongoose from 'mongoose'

const studentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    assingment: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assingment' }],
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

const Student = mongoose.model('Student', studentSchema)

export default Student
