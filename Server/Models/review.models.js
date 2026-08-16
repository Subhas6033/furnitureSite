import mongoose from "mongoose";

const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const reviewSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      minlength: [2, "Username must be at least 2 characters"],
      maxlength: [50, "Username must not be greater than 50 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [mailRegex, "Please provide a valid email address"],
    },

    review: {
      type: String,
      required: [true, "Review is required"],
      trim: true,
      minlength: [10, "Review must be at least 10 characters long"],
      maxlength: [1000, "Review must not be more than 1000 characters"],
    },
    isAccepted : {
        type : Boolean,
    }
  },
  {
    timestamps: true,
  }
);

export const Review = mongoose.model("Review", reviewSchema);