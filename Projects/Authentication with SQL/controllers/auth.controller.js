import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import dotenv from "dotenv";
import sendEmail from "../utils/sendMail.js";

const prisma = new PrismaClient();
dotenv.config();

export const registerUser = async (req, res) => {
  const { email, password, name, phone } = req.body;
  // validate
  if (!email || !password || !name || !phone) {
    console.log("Data missing");
    return res.status(400).json({
      success: false,
      message: "All fields required",
    });
  }
  try {
    const exitsUser = await prisma.user.findUnique({
      where: { email },
    });
    if (exitsUser) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }

    // hash password using bcrypt
    const hashPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashPassword,
        verificationToken,
      },
    });
    console.log(user);
    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }
    // send token as email to user
    await sendEmail(
      user.email,
      "Verify your email",
      `Please click on the following link:
      ${process.env.BASE_URL}/api/v1/users/verify/${verificationToken}`,
    );

    // send success status to user
    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
};
