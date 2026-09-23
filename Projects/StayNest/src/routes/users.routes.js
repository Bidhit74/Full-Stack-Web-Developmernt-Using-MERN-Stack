import express from "express";
import SignUp from "../controllers/users/signup.controller.js";
import Login from "../controllers/users/login.controller.js";

const router = express.Router();

router.get("/signup", SignUp);
router.get("/login", Login);

export default router;
