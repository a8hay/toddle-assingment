import mongoose from 'mongoose'

const tutorSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)

const Tutor = mongoose.model('Tutor', tutorSchema)

export default Tutor
