
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import User from "../../models/user_models/user.models.js";
// // delete user by id
// const deleteUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     const __filename = fileURLToPath(import.meta.url);
//     const __dirname = path.dirname(__filename);
//     if (user) {
//       if (user.profilePic) {
//         const filePath = path.join(__dirname, "../uploads", user.profilePic);
//         if (fs.existsSync(filePath)) {
//           fs.unlinkSync(filePath);
//         }
//       }
//       await user.deleteOne();
//       res
//         .status(200)
//         .json({ success: true, message: "User Deleted Successfully" });
//     } else {
//       res.status(400).json({ success: false, message: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: `Internal Server Error : ${error.message}`,
//     });
//   }
// };
// export default deleteUserById;
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import User from "../../models/user_models/user.models.js";

const deleteUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    if (user) {
      if (user.profilePic) {
        // ✅ go two levels up to reach backend/uploads
        const filePath = path.join(__dirname, "../../uploads", user.profilePic);
        console.log("Deleting file:", filePath);

        try {
          await fs.unlink(filePath);
        } catch (err) {
          console.error("File deletion error:", err.message);
        }
      }

      await user.deleteOne();
      res.status(200).json({ success: true, message: "User Deleted Successfully" });
    } else {
      res.status(400).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal Server Error : ${error.message}`,
    });
  }
};

export default deleteUserById;
