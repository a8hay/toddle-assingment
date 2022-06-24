import mongoose from 'mongoose'

const submissionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    assingment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assingment',
    },

    remark: {
      type: String,
    },
  },
  { timestamps: true }
)

submissionSchema.index({ user: 1, assingment: 1 }, { unique: true })

const Submission = mongoose.model('Submission', submissionSchema)

export default Submission
