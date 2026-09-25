import mongoose, { Schema } from "mongoose"

const subjectsSchema = new Schema({
  code: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  name: {
    type: String,
    trim: true,
    lowercase: true
  },
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  }
}, { timestamps: true })

export const Subject = mongoose.model("Subject", subjectsSchema)