const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "School API",
    description:
      "RESTful API for managing students and courses using Node.js, Express, MongoDB, and Mongoose."
  },

  host: "school-api-hqbp.onrender.com",
  basePath: "/",

  schemes: ["https"],

  definitions: {
    Student: {
      studentId: "ST001",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      department: "Computer Science",
      level: 300,
      gpa: 3.75,
      enrollmentDate: "2023-09-15"
    },

    Course: {
      courseCode: "CSC301",
      courseTitle: "Database Systems",
      department: "Computer Science",
      creditUnits: 3,
      semester: "Winter",
      lecturer: "Dr. Ahmed Bello",
      capacity: 120
    }
  }
};

const outputFile = "./swagger.json";

const endpointsFiles = [
  "./server.js"
];

swaggerAutogen(outputFile, endpointsFiles, doc);