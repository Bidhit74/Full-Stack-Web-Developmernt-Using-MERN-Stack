import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/flipkart");
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

connectDB();

// *** Schema Validations ***
// Basic, Rules for schema
const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  auther: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Minimum price greater than 1"], // Add custom Error use array []
  },
  discount: {
    type: Number,
    default: 0, // by default sabhi me add ho jayega agar app define karte hai tab
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"], // Only give two value
  },
  genre: [String], // You can add multiple string array data
});

// *** Create a Model ***
const Book = model("Book", bookSchema);

// *** Insert Data in collection ***
// const book3 = new Book({
//   title: "Book7",
//   auther: "Lakshmi",
//   price: "1000", // this is working type is Number kuyki es covert kar sakte but yah nahi (price:"abc")
//   discount: 40,
//   category: "fiction", // Only give two value fiction or non-fiction
//   genre: ["comics", "comedy", "fiction", "non-fiction"],
// });

// book3
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// *** Updations ***
// Not working Schema rule : but show current data after change : returnDocument:'after'
// Book.findByIdAndUpdate(
//   "6a8ed4ef34d1c666a3f537e1",
//   { price: -500 },
//   { returnDocument:'after' },
// )

// Now working Schema rule: use - runValidators: true
Book.findByIdAndUpdate(
  "6a8ed4ef34d1c666a3f537e1",
  { price: -500 },
  { runValidators: true, returnDocument: "after" },
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    // console.log(err);
    // show custom error messages
    console.log("Error: ", err.errors.price.properties.message);
  });
