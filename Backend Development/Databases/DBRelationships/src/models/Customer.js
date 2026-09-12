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

// ** Middleware - Pre
// Pre - run before the query is executed
// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("Pre - Middleware");
// });

// ** Middleware - Post
// Post - run after the query is executed
customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(res);
    }
    console.log("Post - Middleware");
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
        name: "Rahul",
    });
    const order1 = await Order.findOne({ item: "mango" });
    customer1.orders.push(order1);
    const res = await customer1.save();
    console.log(res);
};

// customerAdd();

const findCustomer = async () => {
    // Fetch all customers from the Customer collection
    const customers = await Customer.find();
    // Fetch customers along with their related orders
    // populate("orders") replaces order IDs with complete Order documents
    const customersWithOrders = await Customer.find().populate("orders");
    // Print all customers
    console.log(customers);
    // Print customers with populated order details /
    console.log(customersWithOrders);
    // Print the first customer with their complete order details
    console.log(customersWithOrders[0]);
};

// findCustomer();

// ** Delete Customer - only Delete customer - not delete link order
const delCust = async () => {
    let data = await Customer.findByIdAndDelete("6aa592166e084a34d17f6804");
    console.log(data);
};
// delCust();

// ** After Define Pre Schema
// Pre - middleware functions are executed one after another.
// findByIdAndDelete() - This function triggers the following middleware - findOneAndDelete()
delCust();
// export default Customer;
