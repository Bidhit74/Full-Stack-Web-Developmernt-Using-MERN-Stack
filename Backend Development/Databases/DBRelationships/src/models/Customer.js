import { Schema, model } from "mongoose";
import connectDB from "../config/db.js";

connectDB();
const orderSchema = new Schema({
    item: String,
    price: Number,
});

const Order = model("Order", orderSchema);

const addOrder = async () => {
    let res = await Order.insertMany([
        { item: "chips", price: 20 },
        { item: "milk", price: 60 },
        { item: "dahi", price: 80 },
        { item: "mango", price: 120 },
    ]);
    console.log(res);
};
// addOrder();

// export default Customer;
