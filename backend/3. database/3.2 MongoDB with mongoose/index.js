const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Student = require("./models/student.model");
const Teacher = require("./models/teacher.model");

dotenv.config();
// connect mongodb using mongoose
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { autoIndex: true, autoCreate: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected successfully!");
  main();
});

const main = async () => {
  await init();

  // console.log(await getStudents());

  // await createStudent({
  //   name: "J",
  //   email: "J@gmail.com",
  //   mainTeacherId: "62b6de6b85213dba0651f03f",
  //   todos: [],
  // });

  // console.log(await getTeacherStudents("62b6de6b85213dba0651f03f"));

  // await updateStudent({
  //   _id: "62b6e1debdfa122af3946977",
  //   name: "J edited",
  //   email: "JEdited@gmail.com",
  //   mainTeacherId: "62b6de6b85213dba0651f03f",
  //   todos: [],
  // });

  // await removeStudent("62b6e1debdfa122af3946977");
};

const init = async () => {
  await initStudent();
  await initTeacher();
};

const initStudent = async () => {
  console.log("init student...");
  const initialized = await Student.find();
  if (!initialized.length) {
    const student = new Student({
      name: "JackScript",
      email: "jackscript.me@gmail.com",
      todos: [],
    });

    await student.save();
  }
  console.log("init student done!");
};

const initTeacher = async () => {
  console.log("init teacher...");
  const initialized = await Teacher.find();
  if (!initialized.length) {
    const teacher = new Teacher({
      name: "JackScript teacher",
      email: "jackscript.teacher.me@gmail.com",
    });

    await teacher.save();
  }
  console.log("init teacher done!");
};

const getStudents = async () => {
  try {
    const students = await Student.find().lean();
    return students;
  } catch (err) {
    console.error("Error in getting students", err);
  }
};

const getTeacherStudents = async (mainTeacherId) => {
  try {
    const students = await Student.find({ mainTeacherId }).lean();
    return students;
  } catch (err) {
    console.error(`Error in getting students of teacher ${mainTeacherId}`, err);
  }
};

const createStudent = async (data) => {
  console.log(`Creating student`, data);
  try {
    const student = new Student(data);
    await student.save();
    console.log("Create student successfully!");
  } catch (err) {
    console.error("Error in creating student", err);
  }
};

const updateStudent = async (data) => {
  console.log("Updating student", data);
  try {
    const { _id, mainTeacherId, name, email, todos } = data;

    const student = await Student.findOne({ _id });
    if (!student) throw new Error(`Cannot find student with id ${_id}`);

    student.name = name;
    student.email = email;
    student.mainTeacherId = mainTeacherId;
    student.todos = todos;

    await student.save();
    console.log("Update student successfully!");
  } catch (err) {
    console.error("Error in updating student", err);
  }
};

const removeStudent = async (_id) => {
  console.log("Removing student", _id);
  try {
    const student = await Student.findOne({ _id });
    if (!student) throw new Error(`Cannot find student with id ${_id}`);

    await student.remove();
    console.log("Remove student successfully!");
  } catch (err) {
    console.error(`Error in removing student ${_id}`, err);
  }
};
