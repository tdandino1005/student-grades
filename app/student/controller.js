import Student from "./Student.js";

const controller = {
  // Add a method to get all students
  index() {
    return Student.find();
  },
  show(id) {
    return Student.findById(id);
  },
  // Add a method to get a single student by id
  create(newStudent) {
    return Student.create(newStudent);
  },
  // Add a method to create a new student
};

controller
  .index()
  .then((students) => console.log(students))
  .catch((err) => console.error(err.message));

export default controller;
