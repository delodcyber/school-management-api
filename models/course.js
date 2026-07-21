const mongoose = require("mongoose");

// Helper function to convert a string to title case
function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Define the Course schema
const courseSchema = new mongoose.Schema(
  {
    courseCode: {
      type: String,
      required: [true, "Course code is required"],
      unique: true,
      uppercase: true,
      trim: true,
      minlength: [3, "Course code must be at least 3 characters long"],
      maxlength: [10, "Course code cannot exceed 10 characters"],
      match: [
        /^[A-Z0-9-]+$/,
        "Course code can only contain uppercase letters, numbers, and hyphens"
      ]
    },

    courseTitle: {
      type: String,
      required: [true, "Course title is required"],
      trim: true,
      minlength: [3, "Course title must be at least 3 characters long"],
      maxlength: [100, "Course title cannot exceed 100 characters"],
      match: [
        /^[A-Za-z0-9\s&.,()'-]+$/,
        "Course title contains invalid characters"
      ],
      set: toTitleCase
    },

    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
      minlength: [2, "Department must be at least 2 characters long"],
      maxlength: [50, "Department cannot exceed 50 characters"],
      match: [
        /^[A-Za-z\s&.-]+$/,
        "Department contains invalid characters"
      ],
      set: toTitleCase
    },

    creditUnits: {
      type: Number,
      required: [true, "Credit units are required"],
      min: [1, "Credit units must be at least 1"],
      max: [6, "Credit units cannot exceed 6"]
    },

    semester: {
      type: String,
      required: [true, "Semester is required"],
      trim: true,
      enum: {
        values: ["Fall", "Spring", "Summer", "Winter"],
        message: "{VALUE} is not a valid semester"
      },
      set: toTitleCase
    },

    lecturer: {
      type: String,
      required: [true, "Lecturer name is required"],
      trim: true,
      minlength: [3, "Lecturer name must be at least 3 characters long"],
      maxlength: [100, "Lecturer name cannot exceed 100 characters"],
      match: [
        /^[A-Za-z\s.'-]+$/,
        "Lecturer name contains invalid characters"
      ],
      set: toTitleCase
    },

    capacity: {
      type: Number,
      required: [true, "Capacity is required"],
      min: [1, "Capacity must be at least 1"],
      max: [300, "Capacity cannot exceed 300"]
    }
  },
  {
    collection: "courses",
    timestamps: true
  }
);

module.exports = mongoose.model("Course", courseSchema);