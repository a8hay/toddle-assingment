import mongoose from 'mongoose'

const assingmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please give assingment a name'],
    },

    description: {
      type: String,
    },

    publishedAt: {
      type: Date,
      default: Date.now(),
      required: [true, 'Please provide publish date'],
    },

    deadlineDate: {
      type: Date,
      required: [true, 'Please provide deadline'],
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tutor',
    },
  },
  { timestamps: true }
)

const Assingment = mongoose.model('Assingment', assingmentSchema)

export default Assingment
