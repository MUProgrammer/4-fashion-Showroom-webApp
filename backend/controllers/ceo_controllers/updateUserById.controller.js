import User from "../../models/user_models/user.models.js";

// update user by id
const updateUserById = async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // CEO apna khud ka role is route se change nahi kar sakta
    if (user._id.toString() === req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You cannot change your own role.",
      });
    }
    // CEO kisi ko bhi "ceo" role assign nahi kar sakta
    const allowedRoles = ["user", "subadmin", "admin"]; // "ceo" yahan se exclude
    if (!role || !allowedRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role. Allowed values: user, subadmin, admin.",
      });
    }
    // wo eik or ceo nhi bna skta
    if (user.role === "ceo") {
      return res.status(403).json({
        success: false,
        message: "Cannot modify another CEO's role.",
      });
    }
    user.role = role;
    await user.save();

    return res.status(200).json({
      success: true,
      message: `User role updated to '${role}' successfully.`,
      data: {
        id: user._id,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while updating role.",
    });
  }
};
export default updateUserById;
