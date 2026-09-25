import mongoose, { Schema } from "mongoose"

const studentSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true
    },
    enrollNum: {
      type: String,
      required: true,
      unique: true
    },
    fullname: {
      type: String,
      required: true,
      trim: true
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  }, { timestamps: true }
)

export const Student = mongoose.model("Student", studentSchema)