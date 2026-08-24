import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

connectDB();

// Create schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create model
const User = mongoose.model("User", userSchema);

// InsertOne Data in collection
// const user1 = new User({ name: "Bidhit", email: "bkc@342gmail.com", age: 24 });
// const user2 = new User({ name: "Navnit", email: "nkc@342gmail.com", age: 22 });

// InsertMany Data in collection
// User.insertMany([
//   { name: "Bidhit", email: "bkc@46gmail.com", age: 24 },
//   { name: "Navnit", email: "k@342gmail.com", age: 22 },
//   { name: "Kalu", email: "k@342gmail.com", age: 25 },
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Save User
// user1.save(); // save is async it is return promise(you cam use than and catch method)
// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Find: Model.find() --> returns a Query Object
// Mongoose Queries are not promise. But they have a ".then() and .catch()" Method
// User.find().then((res) => {
//   console.log(res);
// });

// use condition
// User.find({ age: { $gt: 22 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Use findOne single user
User.findOne({ age: { $gt: 22 } })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
