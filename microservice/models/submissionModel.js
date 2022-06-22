import mongoose from 'mongoose'

const submissionSchema = mongoose.Schema(
  {
    remark: {
      type: String,
    },

    assingment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assingment',
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  },
  { timestamps: true }
)

const Submission = mongoose.model('Submission', submissionSchema)

export default Submission
