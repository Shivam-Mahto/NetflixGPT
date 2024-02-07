import express from "express";
import {
  getUser,
  signInController,
  signUpController,
} from "../controllers/auth.js";
import requireSignIn from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/sign-in", signInController);
router.post("/sign-up", signUpController);

// to check if the jwt token is not tampered
router.post("/auth-user", requireSignIn, getUser);

export default router;
