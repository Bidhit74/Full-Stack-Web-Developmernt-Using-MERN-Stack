import User from "../model/User.model.js";
import crypto from "crypto";
import dotenv from "dotenv";
import sendEmail from "../utils/sendMails.js";

dotenv.config();

const registerUser = async (req, res) => {
  try {
    // Get Data
    const { name, email, password } = req.body || {};

    // validate esko aur strict validate karna hai baad me
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "user already exists",
      });
    }

    // agar exists nahi karta to create a user in database
    const user = await User.create({
      name,
      email,
      password,
    });
    console.log(user);
    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    // create a verification token
    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);
    user.verificationToken = token;

    // save token in database
    await user.save();

    // send token as email to user
    await sendEmail(
      user.email,
      "Verify your email",
      `Please click on the following link: 
      ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
    );

    // send success status to user
    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export default registerUser;
