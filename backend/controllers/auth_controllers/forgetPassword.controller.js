import express from "express";
import { sendResetPasswordEmail } from "../../middlewares/email.js";

// forget password
const forgetPassword = async (req, res) => {
  try {
    // check all fields are fill
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // check if user already exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    // generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    // set reset token in database
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1 hour
    await user.save();
    const resetUrl = `${process.env.CLIENT_URL}/resetPassword/${resetToken}`;

    const message = `Click the link to reset your password: ${resetUrl}`;
    // send email
    await sendResetPasswordEmail(user.email, resetUrl);
    return res.status(200).json({
      success: true,
      message: "Reset password link sent to your email",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Internal Server Error in forgetpassword : ${error.message}`,
    });
  }
};
export default forgetPassword;
