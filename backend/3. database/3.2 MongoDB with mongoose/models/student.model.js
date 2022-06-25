const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mainTeacherId: { type: String },
  todos: [{ title: { type: String }, description: { type: String } }],
});

const Student = mongoose.model("Student", schema);

module.exports = Student;
