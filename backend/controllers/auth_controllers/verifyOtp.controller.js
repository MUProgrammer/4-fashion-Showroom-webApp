import User from "../../models/user_models/user.models.js";
import Request from "../../models/user_models/request.model.js";

const verifyOtp = async (req, res) => {
  try {
    const { verificationCode } = req.body;
    const user = await User.findOne({ verificationCode });

    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    if (Date.now() > new Date(user.verficationTokenExpiresAt).getTime()) {
      return res.status(400).json({ success: false, message: "Verification code expired" });
    }

    if (user.verificationCode !== verificationCode) {
      return res.status(400).json({ success: false, message: "Invalid verification code" });
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    user.verficationTokenExpiresAt = undefined;
    await user.save();

    const ceo = await User.findOne({ role: "ceo" });
    if (ceo) {
      try {
        await Request.create({
          user: user._id,
          requestedBy: ceo._id,
          status: "pending",
        });
        console.log("CEO request created successfully");
      } catch (err) {
        console.error("Request create error:", err);
      }
    } else {
      console.log("No CEO found in DB");
    }

    return res.status(200).json({
      success: true,
      message: "Email verified successfully. Awaiting CEO approval.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `Internal server error: ${error.message}`,
    });
  }
};

export default verifyOtp;


