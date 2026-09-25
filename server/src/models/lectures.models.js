import mongoose, { Schema } from "mongoose"

const lectureSchema = new Schema({
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true
  }, 
  date: {
    type: Date,
    required: true
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
  type: {
    type: String,
    enum: ['regular', 'extra'],
    required: true,
  }
}, { timestamps: true })

export const Lecture = mongoose.model("Lecture", lectureSchema)