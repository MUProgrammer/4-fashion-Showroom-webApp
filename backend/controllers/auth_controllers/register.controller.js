import express from "express";
import User from "../../models/user_models/user.models.js";
import {sendVerificationEamil} from "../../middlewares/email.js"
import bcrypt from "bcryptjs";
// register the user
const registerUser = async (req, res) => {
  try {
    // check all fields are fill
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // check if user already exist
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }
    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // generate otp
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();
    // expires in 2 minutes
    const expiresAt = new Date(Date.now() + 2 * 60 * 1000);
    // create user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      verificationCode,
      verficationTokenExpiresAt: expiresAt,
      isVerified: false,
    });
    // send verification email
    await sendVerificationEamil(newUser.email, verificationCode);
    // save user
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User created successfully. Verification email sent.",
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error in register Controller",
    });
  }
};
export default registerUser;
