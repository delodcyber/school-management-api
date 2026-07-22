const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student");

// Define routes for student operations
router.get("/", 
  /*
  #swagger.tags = ['Students']
  #swagger.summary = 'Get all students'
  #swagger.description = 'Returns a list of all students stored in the database.'

  #swagger.responses[200] = {
    description: 'Students retrieved successfully.',
    schema: [{ $ref: '#/definitions/Student' }]
  }

  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
*/
  studentController.getAllStudents);

router.post("/", 
  /*
  #swagger.tags = ['Students']
  #swagger.summary = 'Create a new student'
  #swagger.description = 'Creates a new student record. All required fields must be provided.'

  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: { $ref: '#/definitions/Student' }
  }

  #swagger.responses[201] = {
    description: 'Student created successfully. Returns the newly created student.',
    schema: { $ref: '#/definitions/Student' }
  }

  #swagger.responses[400] = {
    description: 'Validation failed.'
  }

  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
*/
  studentController.createStudent);

router.get("/:id", 
  /*
  #swagger.tags = ['Students']
  #swagger.summary = 'Get a student by ID'
  #swagger.description = 'Returns a single student matching the supplied MongoDB ObjectId.'

  #swagger.parameters['id'] = {
    in: 'path',
    description: 'MongoDB ObjectId of the student',
    required: true,
    type: 'string'
  }

  #swagger.responses[200] = {
    description: 'Student retrieved successfully.',
    schema: { $ref: '#/definitions/Student' }
  }

  #swagger.responses[404] = {
    description: 'Student not found.'
  }

  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
*/
  studentController.getStudentById);

router.put("/:id", 
  /*
  #swagger.tags = ['Students']
  #swagger.summary = 'Update a student'
  #swagger.description = 'Updates an existing student using the supplied MongoDB ObjectId.'

  #swagger.parameters['id'] = {
    in: 'path',
    description: 'MongoDB ObjectId of the student',
    required: true,
    type: 'string'
  }

  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: { $ref: '#/definitions/Student' }
  }

  #swagger.responses[200] = {
    description: 'Student updated successfully. Returns the updated student.',
    schema: { $ref: '#/definitions/Student' }
  }

  #swagger.responses[400] = {
    description: 'Validation failed.'
  }

  #swagger.responses[404] = {
    description: 'Student not found.'
  }

  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
*/
  studentController.updateStudent);

router.delete("/:id", 
  /*
  #swagger.tags = ['Students']
  #swagger.summary = 'Delete a student'
  #swagger.description = 'Deletes a student matching the supplied MongoDB ObjectId.'

  #swagger.parameters['id'] = {
    in: 'path',
    description: 'MongoDB ObjectId of the student',
    required: true,
    type: 'string'
  }

  #swagger.responses[204] = {
    description: 'Student deleted successfully.'
  }

  #swagger.responses[404] = {
    description: 'Student not found.'
  }

  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
*/
  studentController.deleteStudent);

module.exports = router;