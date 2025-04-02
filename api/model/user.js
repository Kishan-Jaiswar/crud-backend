const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
      enum: {
        values: ["mr", "ms", "other"],
        message: "Title must be either 'Mr', 'Ms', or 'Other'",
      },
      trim: true,
    },
    firstName: {
      type: String,
      required: [true, "First name is required!"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters"],
      maxlength: [50, "First name cannot exceed 50 characters"],
      validate: {
        validator: (value) => /^[A-Za-z]+$/.test(value),
        message: "First name must contain only letters!",
      },
    },
    lastName: {
      type: String,
      required: [true, "Last name is required!"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters"],
      maxlength: [50, "Last name cannot exceed 50 characters"],
      validate: {
        validator: (value) => /^[A-za-z]+$/.test(value),
        message: "Last name must contain only letters!",
      },
    },
    gender: {
      type: String,
      required: [true, "Gender is required!"],
      enum: {
        values: ["male", "female", "other"],
        message: "Gender must be either 'Male', 'Female', or 'Other'",
      },
    },
    age: {
      type: Number,
      required: [true, "Age is required!"],
      min: [18, "Age must be at least 18"],
      max: [100, "Age must be at most 100"],
      validate: {
        validator: Number.isInteger,
        message: "Age must be a whole number",
      },
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required!"],
      unique: true,
      trim: true,
      match: [
        /^[6-9]\d{9}$/,
        "Please enter a valid 10-digit phone number starting with 6,7,8, or 9",
      ],
    },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
);

const User = mongoose.model("User", userSchema);
module.exports = User;
