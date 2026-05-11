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

const verifyUser = async (req, res) => {
  try {
    // get token from params
    const { token } = req.params;

    // validate token
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Invalid token",
      });
    }

    // find user by token
    const user = await User.findOne({
      verificationToken: token,
    });

    // user not found
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid or expired token",
      });
    }

    // already verified
    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "User already verified",
      });
    }

    // verify user
    user.isVerified = true;

    // remove token
    user.verificationToken = undefined;

    // save
    await user.save();

    // response
    return res.status(200).json({
      success: true,
      message: "User verified successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { registerUser, verifyUser };
