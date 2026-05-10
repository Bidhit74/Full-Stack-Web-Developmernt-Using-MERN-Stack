import User from "../model/User.model.js";

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
    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    // create a verification token

    // save token in database

    // send token as email to user

    // send success status to user
    res.status(200).json({
      message: "User registered successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export { registerUser };
