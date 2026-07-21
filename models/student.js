const mongoose = require("mongoose");

// Helper function to convert a string to title case
function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: [true, "Student ID is required"],
      unique: true,
      uppercase: true,
      trim: true,
      minlength: [3, "Student ID must be at least 3 characters long"],
      maxlength: [12, "Student ID cannot exceed 12 characters"],
      match: [
        /^[A-Z0-9-]+$/,
        "Student ID can only contain uppercase letters, numbers, and hyphens"
      ]
    },

    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters long"],
      maxlength: [50, "First name cannot exceed 50 characters"],
      match: [
        /^[A-Za-z\s.'-]+$/,
        "First name contains invalid characters"
      ],
      set: toTitleCase
    },

    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters long"],
      maxlength: [50, "Last name cannot exceed 50 characters"],
      set: toTitleCase,
      match: [
        /^[A-Za-z\s.'-]+$/,
        "Last name contains invalid characters"
      ]
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      minlength: [5, "Email must be at least 5 characters long"],
      maxlength: [254, "Email cannot exceed 254 characters"],
      match: [
        /^\S+@\S+\.\S+$/,
        "Please enter a valid email address"
      ]
    },

    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
      enum: {
        values: [
          "Computer Science",
          "Mathematics",
          "Physics",
          "Engineering",
          "Business",
          "Arts",
          "Social Sciences"
        ],
        message: "{VALUE} is not a valid department"
      },
      set: toTitleCase
    },

    level: {
      type: Number,
      required: [true, "Academic level is required"],
      enum: {
        values: [100, 200, 300, 400, 500],
        message: "{VALUE} is not a valid academic level"
      }
    },

    gpa: {
      type: Number,
      required: [true, "GPA is required"],
      min: [0, "GPA cannot be less than 0"],
      max: [4.0, "GPA cannot exceed 4.0"]
    },

    enrollmentDate: {
      type: Date,
      required: [true, "Enrollment date is required"],
      max: [Date.now, "Enrollment date cannot be in the future"]
    }
  },
  {
    collection: "students",
    timestamps: true
  }
);

module.exports = mongoose.model("Student", studentSchema);