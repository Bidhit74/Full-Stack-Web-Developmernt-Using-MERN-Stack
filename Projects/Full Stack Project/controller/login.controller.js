import User from "../model/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginUser = async (req, res) => {
  try {
    // get data
    const { email, password } = req.body || {};

    // Validate
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // find user
    const user = await User.findOne({ email });
    // validate
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // User Verify or not
    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message: "Please verify your email",
      });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: "24h",
    });

    // save token in cookies
    const cookieOption = {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 24 hour
    };
    res.cookie("token", token, cookieOption);

    // Final response : Login Successful
    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default loginUser;
