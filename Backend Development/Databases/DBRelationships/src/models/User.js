import { Schema, model } from "mongoose";

const userSchema = new Schema({
	name: String,
	addresses: [
		{
			state: String,
			city: String,
		},
	],
});

const User = model("User", userSchema);

export default User;
