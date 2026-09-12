import { Schema, model } from "mongoose";
import connectDB from "../config/db.js";

connectDB();
const orderSchema = new Schema({
    item: String,
    price: Number,
});

// One to Many
const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});
const Order = model("Order", orderSchema);
const Customer = model("Customer", customerSchema);

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

const customerAdd = async () => {
    const customer1 = new Customer({
        name: "Bidhit",
    });
    const order1 = await Order.findOne({ item: "chips" });
    const order2 = await Order.findOne({ item: "milk" });
    customer1.orders.push(order1);
    customer1.orders.push(order2);

    const res = await customer1.save();
    console.log(res);
};

customerAdd();

// export default Customer;
