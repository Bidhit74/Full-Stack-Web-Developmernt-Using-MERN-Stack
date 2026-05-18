import User from "../model/User.model.js";
import crypto from "crypto";
const resetPassword = async (req, res) => {
  try {
    // collect token from params
    const { token } = req.params || {};
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Invalid token",
      });
    }
    // password from req.body
    const { password } = req.body || {};
    console.log(password);
    if (!password || password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }
    // Hash the raw token to match what's stored in DB
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // find user based on token and expiry
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() }, // greater than Abhi ke time ke Jis yah pata chalega ki token expire hai ki nahi
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid token or token has expired",
      });
    }
    // Set new password and clear reset fields
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    // data save
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.log("Reset controller error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

export default resetPassword;
