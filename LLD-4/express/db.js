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

const CourseModel = mongoose.model("Course", courseSchema);

// create a Document (Course entry)

async function createCourse() {
  const course = new CourseModel({
    name: "Python",
    creator: "Steve",
    isPublished: true,
    Ratings: 4.5,
  });

  await course.save();
}

// createCourse();

// Update a course


async function updateCourse(id){
       let course = await CourseModel.findById(id)

       if(!course) return 

       course.name = "DBMS"
       course.creator = "Mrinal"

       await course.save()
       
}

// updateCourse('65cba816d2f7bb1eda15c9fb')


// Delete


async function deleteEntry(id){
     let courseDeleted = await CourseModel.findByIdAndDelete(id)

     console.log(courseDeleted)

}

deleteEntry('65cba816d2f7bb1eda15c9fb')








