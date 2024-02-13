const mongoose = require("mongoose");

const DBurl =
  "mongodb+srv://mrinal1224:zCViynGcS65huhOx@cluster0.kxyq8el.mongodb.net/Scaler?retryWrites=true&w=majority";

mongoose
  .connect(DBurl)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch(() => {
    console.log("Connection Unsuccesful");
  });

// How to add Data in our Database

// CourseSchema

const courseSchema = new mongoose.Schema({
  name: String,
  creator: String,
  isPublished: Boolean,
  publishedDate: { type: Date, default: Date.now },
  Ratings: Number,
});

// Model

const CourseModel = mongoose.model("CourseModel", courseSchema);

// create a Document (Course entry)

async function createCourse() {
  const course = new CourseModel({
    name: "Java",
    creator: "Mark",
    isPublished: true,
    Ratings: 4.7,
  });

  await course.save();
}

createCourse();
