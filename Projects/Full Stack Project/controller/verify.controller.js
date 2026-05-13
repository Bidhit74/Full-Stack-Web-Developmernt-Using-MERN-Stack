import User from "../model/User.model.js";

const verifyUser = async (req, res) => {
  try {
    // get token from params
    const { token } = req.params || {};

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

export default verifyUser;
