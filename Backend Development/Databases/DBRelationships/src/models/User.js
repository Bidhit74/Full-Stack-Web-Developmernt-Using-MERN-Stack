import { Schema, model } from "mongoose";

// One to Few or One to Many
const userSchema = new Schema({
	name: String,
	addresses: [
		{
			// agar id nahi chahiye every addresses than _id: false.
			_id: false,
			state: String,
			city: String,
		},
	],
});

const User = model("User", userSchema);

export default User;
