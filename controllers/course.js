const Course = require("../models/course");

// Controller functions for course operations

// GET all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// POST create a new course
exports.createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);

    await course.save();

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET one course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found."
      });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// PUT update a course by ID
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true
      }
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found."
      });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// DELETE a course by ID
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found."
      });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};