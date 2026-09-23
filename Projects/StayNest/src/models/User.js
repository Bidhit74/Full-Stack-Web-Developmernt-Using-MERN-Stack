import { Schema, model } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

// You're free to define your User how you like. Passport-Local Mongoose will add a username, hash and salt field to store the username, the hashed password and the salt value.
// Additionally, Passport-Local Mongoose adds some methods to your Schema.
userSchema.plugin(passportLocalMongoose);

const User = model("User", userSchema);

export default User;
