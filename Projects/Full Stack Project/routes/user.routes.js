import express from "express";
import { registerUser } from "../controller/user.controller.js";

const router = express.Router();

router.get("/resister", registerUser);

export default router;
