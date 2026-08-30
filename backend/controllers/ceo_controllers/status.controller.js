import User from "../../models/user_models/user.models.js";

const statusById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Toggle status
    user.status = user.status === "active" ? "blocked" : "active";
    await user.save();

    return res.status(200).json({
      success: true,
      message: `User is now ${user.status}`,
      status: user.status,
    });
  } catch (error) {
    console.error("Status update error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
export default statusById;