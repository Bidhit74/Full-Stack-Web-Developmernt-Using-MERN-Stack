import express from "express";
import {
  registerUser,
  verifyUser,
  loginUser,
  profile,
  logoutUser,
} from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middlewre.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", loginUser);
// use user define middleware
router.get("/profile", isLoggedIn, profile);
router.get("/logout", isLoggedIn, logoutUser);

export default router;
