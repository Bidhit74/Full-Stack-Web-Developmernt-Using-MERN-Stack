import express from "express";
import SignUp from "../controllers/users/signup.controller.js";
import Login from "../controllers/users/login.controller.js";
import addUserDB from "../controllers/users/add-user.controller.js";
import checkUser from "../controllers/users/checkUser.controller.js";
import passport from "passport";
import logout from "../controllers/users/logout.controller.js";

const router = express.Router();

router.get("/signup", SignUp);
router.post("/signup", addUserDB);
router.get("/login", Login);
// use passport middleware
router.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    checkUser,
);
router.post("/logout", logout);

export default router;
