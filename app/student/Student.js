import { model, Schema } from "mongoose";
import gradeSchema from "./grade-schema.js";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Student name required"],
      minLength: [3, "Student name must be 3 characters long"],
      trim: true,
    },
    // An array of subdocuments
    grades: [gradeSchema],
    // TODO: Add a virtual property to calculate the student's average grade
  },
  {
    strict: "throw",
    versionKey: false,
  }
);

// TODO: Prevent duplicate grade names (use a custom hook)

export default model("Student", studentSchema);
