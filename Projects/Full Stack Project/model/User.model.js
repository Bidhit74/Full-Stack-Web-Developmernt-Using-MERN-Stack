import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetExpires: {
      type: Date,
    },
  },
  {
    // createdAt + updatedAt auto
    timestamps: true,
  },
);

// Run before saving user document in database
UserSchema.pre("save", async function () {
  // Check if password field is modified or newly created
  // Prevents hashing already hashed password again
  if (!this.isModified("password")) return;

  // Hash plain password using bcrypt with 10 salt rounds
  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model("User", UserSchema);

export default User;
