import mongoose, { Schema } from "mongoose"

const lecSchedulesSchema = new Schema({
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true
  },
  dayOfWeek: {
    type: Number,
    required: true,
    min: 0,
    max: 6
  },
  startTime: {
    type: String,
    match: /^([01]\d|2[0-3]):([0-5]\d)$/,
    required: true
  },
  endTime: {
    type: String,
    match: /^([01]\d|2[0-3]):([0-5]\d)$/,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  }

}, { timestamps: true })

export const lecSchedules = mongoose.model("lecSchedules", lecSchedulesSchema)