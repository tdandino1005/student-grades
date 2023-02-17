import { Schema } from "mongoose";

const gradeSchema = new Schema({
  gradeType: {
    type: String,
    enum: ["exam", "quiz", "homework", "project"],
    default: "exam",
  },
  name: {
    type: String,
    required: [true, "Grade name is required"],
    minLength: [3, "Grade must be at least 3 characters long"],
    trim: true,
  },
  earned: {
    type: Number,
    min: [0, "Earned points must be greater than 0"],
    max: [100, "Earned points must be less than 100"],
    required: [true, "Earned points are required"],
  },
  possible: {
    type: Number,
    min: [0, "Possible points must be greater than 0"],
    max: [100, "Possible points must be less than 100"],
    required: [true, "Possible points are required"],
  },
});
