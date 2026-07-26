import bcrypt from "bcryptjs";
import User from "../../models/user_models/user.models.js";

export const createCEO = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check if CEO already exists
    const existingCEO = await User.findOne({ role: "ceo" });
    if (existingCEO) {
      return res.status(400).json({
        success: false,
        message: "CEO already exists",
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create CEO user
    const ceo = new User({
      username,
      email,
      password: hashedPassword,
      role: "ceo",
      isVerified: true,
    });

    await ceo.save();

    return res.status(201).json({
      success: true,
      message: "CEO user created successfully",
      ceo,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `Internal server error: ${error.message}`,
    });
  }
};
