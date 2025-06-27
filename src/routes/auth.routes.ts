import express from "express";
import registerUser, { logIn } from "./../controllers/auth.controllers";

const router = express.Router();

router.post("/register", registerUser);
router.post("/logIn", logIn);

export default router;
