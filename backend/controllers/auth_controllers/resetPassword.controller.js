import express from "express";
import User from "../../models/user_models/user.models.js";
import bcrypt from "bcryptjs";
import { sendPasswordChangedEmail } from "../../middlewares/email.js";

// reset password
const resetPassword = async (req, res) => {
  try {
    const { token } = req.body;
    const { password } = req.body;
    // check password field is fill
    if (!password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // check if token is valid
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Token is invalid or has expired",
      });
    }
    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hasshedPassword = await bcrypt.hash(password, salt);
    // set password
    user.password = hasshedPassword;
    // set reset token
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();
    await sendPasswordChangedEmail(user.email, user.username);
    res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal Server Error in resetPassword : ${error.message}`,
    });
  }
};
export default resetPassword;
