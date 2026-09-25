import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true
    },
    passwordHash: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      enum: ['admin', 'teacher'],
      required: true
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true
    }, 
    refreshToken: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const User = mongoose.model("User", userSchema)