import express from "express";
import SignUp from "../controllers/users/signup.controller.js";
import Login from "../controllers/users/login.controller.js";
import addUserDB from "../controllers/users/add-user.controller.js";

const router = express.Router();

router.get("/signup", SignUp);
router.post("/signup", addUserDB);
router.get("/login", Login);

export default router;
