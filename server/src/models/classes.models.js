import mongoose, { Schema } from "mongoose";

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true
  },
  semester: {
    type: Number,
    required: true
  },
  section: {
    type: String,
    maxLength: [1, "Section can be a single alphabet"],
    lowercase: true,
  },
  academicYear: {
    type: String,
    required: true,
    trim: true,
    maxLength: [9, "Academic year cannot exceed 9 characters."],
  }, isActive: {
    type: Boolean,
    required: true,
    default: true
  }
}, { timestamps: true })

export const Class = mongoose.model("Class", classSchema) 