import User from "../../models/user_models/user.models.js";

// get Current User Prolie
const getCurrentUserProlie = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");;
    if (user) {
      res.status(200).json({ success: true, user });
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
export default getCurrentUserProlie ;
