import User from "../model/User.model.js";
import crypto from "crypto";
import sendEmail from "../utils/sendMails.js";
import dotenv from "dotenv";

dotenv.config();

const forgotPassword = async (req, res) => {
  try {
    // 1. Validate input
    const { email } = req.body;
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // 2. Look up user
    const user = await User.findOne({ email });

    // 3. Always return same message (security: don't reveal if email exists)
    const safeMessage =
      "If this email is registered, a reset link has been sent.";
    if (!user) {
      return res.status(200).json({ success: true, message: safeMessage });
    }
    // 4. Generate a secure random token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // 5. Hash the token before saving (never store raw tokens in DB)
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // 6. Save hashed token + expiry to user (10 minutes)
    user.passwordResetToken = hashedToken;
    user.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 min expiry
    await user.save();

    // 7. Build the reset URL with RAW token (user clicks this link)
    const resetUrl = `${process.env.BASE_URL_USER}/reset-password/${resetToken}`;

    // 8. Send email
    await sendEmail(
      user.email, // to
      "Password Reset Request", // subject
      "Click the link to reset your password.", // text (plain)
      `<p>Click <a href="${resetUrl}">Reset Password</a></p>
             <p>Expires in 10 minutes.</p>`, // html
    );

    return res.status(200).json({ success: true, message: safeMessage });
  } catch (error) {
    // 9. Log internally, respond generically
    console.log("forgotPassword error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

// Simple email format check
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default forgotPassword;
