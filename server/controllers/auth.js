import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

const signInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(404)
        .json({ success: false, message: "Provide Email and Password" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email not registered",
      });
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(200).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "4d",
    });

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      user: {
        name: user.name,
        email: user.email,
        token,
      },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Error in sign-in" });
  }
};

const signUpController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(404)
        .json({ success: false, message: "Provide Name, Email and Password" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "Already registered, Please Sign In",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "4d",
    });

    return res.status(200).json({
      success: true,
      message: "User Created",
      user: { name, email, token },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Error in creating User" });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.userId;
    const { token } = req.body;
    const user = await User.findById(id);

    return res.status(200).json({
      success: true,
      user: { name: user.name, email: user.email, token },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
    });
  }
};

export { signInController, signUpController, getUser };
