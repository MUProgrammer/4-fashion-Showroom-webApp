import User from "../../models/user_models/user.models.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";

const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    user.username = req.body.username || user.username;

    // check if email is already taken by someone else
    if (req.body.email) {
      const emailExist = await User.findOne({ email: req.body.email });
      if (emailExist && emailExist._id.toString() !== user._id.toString()) {
        return res
          .status(400)
          .json({ success: false, message: "Email already exist" });
      }
      user.email = req.body.email;
    }

    // check the password
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      user.password = hashedPassword;
    }

    // check the image
    // if (req.file && req.file.filename) {
    //   if (user.profilePic) {
    //     const oldPath = path.join(__dirname, "../uploads", user.profilePic);
    //     if (fs.existsSync(oldPath)) {
    //       fs.unlinkSync(oldPath);
    //     }
    //   }
    //   user.profilePic = req.file.filename;
    // }
    if (req.file && req.file.filename) {
      if (user.profilePic) {
        const oldPath = path.join(__dirname, "../../uploads", user.profilePic);
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
      user.profilePic = req.file.filename;
    }
    await user.save();
    res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal Server Error in update Profile controller : ${error.message}`,
    });
  }
};

export default updateProfile;
