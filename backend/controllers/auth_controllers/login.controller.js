import express from "express";
import User from "../../models/user_models/user.models.js";
import bcrypt from "bcryptjs";
import generateToken from "../../utils/createToken.js";
// login the user
const login = async (req, res) => {
  // try {
  //   // check all fields are fill
  //   const { email, password } = req.body;
  //   if (!email || !password) {
  //     return res.status(400).json({
  //       success: false,
  //       message: "All fields are required",
  //     });
  //   }
  //   // check if user is approved by CEO
  //   if (!userExists.isApprovedByCEO) {
  //     return res.status(403).json({
  //       success: false,
  //       message: "Login denied. CEO approval required",
  //     });
  //   }
  //   // check if user already exist
  //   const userExists = await User.findOne({ email });
  //   if (!userExists) {
  //     return res.status(400).json({
  //       success: false,
  //       message: "User not found",
  //     });
  //   }
  //   // check if user is verified
  //   if (!userExists.isVerified) {
  //     return res.status(400).json({
  //       success: false,
  //       message: "User not verified",
  //     });
  //   }
  //   // check if password is correct
  //   const isPasswordCorrect = await bcrypt.compare(
  //     password,
  //     userExists.password,
  //   );
  //   if (!isPasswordCorrect) {
  //     return res.status(400).json({
  //       success: false,
  //       message: "Invalid password",
  //     });
  //   }
  //   // role check
  //   const allowedRoles = ["user", "admin", "subadmin", "ceo"];
  //   if (!allowedRoles.includes(userExists.role)) {
  //     return res.status(403).json({
  //       success: false,
  //       message: "Access denied. Invalid role",
  //     });
  //   }
  //   // generate token
  //   generateToken(res, userExists._id);
  //   return res.status(200).json({
  //     success: true,
  //     message: "User logged in successfully",
  //     user: userExists,
  //   });
  // } catch (error) {}

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    // ✅ Fixed: "user" ko "userExists" se badla
    if (userExists.status === "blocked") {
      return res.status(403).json({
        success: false,
        message: "Your account has been blocked. Please contact admin.",
      });
    }

    if (!userExists.isVerified) {
      return res
        .status(400)
        .json({ success: false, message: "User not verified" });
    }

    if (!userExists.isApprovedByCEO) {
      return res.status(403).json({
        success: false,
        message: "Login denied. CEO approval required",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      userExists.password,
    );
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password" });
    }

    const allowedRoles = ["user", "admin", "subadmin", "ceo"];
    if (!allowedRoles.includes(userExists.role)) {
      return res
        .status(403)
        .json({ success: false, message: "Access denied. Invalid role" });
    }

    generateToken(res, userExists._id);
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: userExists,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
export default login;
// generateToken(res, userExists._id);
// return res.status(200).json({
//   success: true,
//   message: "User logged in successfully",
//   user: userExists,
// });
