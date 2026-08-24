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
const user2 = new User({ name: "Navnit", email: "nkc@342gmail.com", age: 22 });

// Save User
// user1.save(); // save is async it is return promise(you cam use than and catch method)
user2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
