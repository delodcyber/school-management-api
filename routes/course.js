const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course");

// ------------------------ Define routes for course operations --------------------- //

router.get("/", 
  /*
  #swagger.tags = ['Courses']
  #swagger.summary = 'Get all courses'
  #swagger.description = 'Returns a list of all courses stored in the database.'

  #swagger.responses[200] = {
    description: 'Courses retrieved successfully.',
    schema: [{ $ref: '#/definitions/Course' }]
  }

  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
*/
  courseController.getAllCourses);

router.post("/", 
  /*
  #swagger.tags = ['Courses']
  #swagger.summary = 'Create a new course'
  #swagger.description = 'Creates a new course. All required fields must be provided.'

  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: { $ref: '#/definitions/Course' }
  }

  #swagger.responses[201] = {
    description: 'Course created successfully. Returns the newly created course.',
    schema: { $ref: '#/definitions/Course' }
  }

  #swagger.responses[400] = {
    description: 'Validation failed.'
  }

  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
*/
  courseController.createCourse);

router.get("/:id", 
  /*
  #swagger.tags = ['Courses']
  #swagger.summary = 'Get a course by ID'
  #swagger.description = 'Returns a single course matching the supplied MongoDB ObjectId.'

  #swagger.parameters['id'] = {
    in: 'path',
    description: 'MongoDB ObjectId of the course',
    required: true,
    type: 'string'
  }

  #swagger.responses[200] = {
    description: 'Course retrieved successfully.',
    schema: { $ref: '#/definitions/Course' }
  }

  #swagger.responses[404] = {
    description: 'Course not found.'
  }

  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
*/
  courseController.getCourseById);


router.put("/:id", 
  /*
  #swagger.tags = ['Courses']
  #swagger.summary = 'Update a course'
  #swagger.description = 'Updates an existing course using the supplied MongoDB ObjectId.'

  #swagger.parameters['id'] = {
    in: 'path',
    description: 'MongoDB ObjectId of the course',
    required: true,
    type: 'string'
  }

  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: { $ref: '#/definitions/Course' }
  }

  #swagger.responses[200] = {
    description: 'Course updated successfully. Returns the updated course.',
    schema: { $ref: '#/definitions/Course' }
  }

  #swagger.responses[400] = {
    description: 'Validation failed.'
  }

  #swagger.responses[404] = {
    description: 'Course not found.'
  }

  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
*/
  courseController.updateCourse);


router.delete("/:id", 
  /*
  #swagger.tags = ['Courses']
  #swagger.summary = 'Delete a course'
  #swagger.description = 'Deletes a course matching the supplied MongoDB ObjectId.'

  #swagger.parameters['id'] = {
    in: 'path',
    description: 'MongoDB ObjectId of the course',
    required: true,
    type: 'string'
  }

  #swagger.responses[204] = {
    description: 'Course deleted successfully.'
  }

  #swagger.responses[404] = {
    description: 'Course not found.'
  }

  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
*/
  courseController.deleteCourse);

module.exports = router;