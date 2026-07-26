import Request from "../../models/user_models/request.model.js";
import User from "../../models/user_models/user.models.js";
import generateToken from "../../utils/createToken.js";
import { sendWelcomeEmail } from "../../middlewares/email.js";

const approveRequest = async (req, res) => {
  // try {
  //   const { requestId } = req.params;
  //   const { action, role } = req.body; // role: "admin" or "subadmin"

  //   const request = await Request.findById(requestId).populate("user");
  //   if (!request) {
  //     return res.status(404).json({ success: false, message: "Request not found" });
  //   }

  //   request.status = action;
  //   await request.save();

  //   if (action === "approved") {
  //     // update user role + verification
  //     request.user.isVerified = true;
  //     if (role && ["admin", "subadmin"].includes(role)) {
  //       request.user.role = role;
  //     }
  //     await request.user.save();

  //     // generate token + welcome email
  //     generateToken(res, request.user._id);
  //     await sendWelcomeEmail(request.user.email, request.user.username);

  //     return res.json({
  //       success: true,
  //       message: `Request approved by CEO. User promoted to ${request.user.role}. Token generated and welcome email sent.`,
  //     });
  //   }

  //   return res.json({ success: true, message: "Request rejected by CEO." });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ success: false, message: "Error approving request" });
  // }
  try {
    const { requestId } = req.params;
    const { action, role } = req.body; // role: "admin" or "subadmin"

    const request = await Request.findById(requestId).populate("user");
    if (!request) {
      return res
        .status(404)
        .json({ success: false, message: "Request not found" });
    }

    request.status = action;
    request.requestedBy = req.user?._id; // CEO id from auth middleware
    await request.save();

    if (action === "approved") {
      // ✅ CEO approval flag
      request.user.isApprovedByCEO = true;
      request.user.isVerified = true;

      // optional role promotion
      if (role && ["admin", "subadmin"].includes(role)) {
        request.user.role = role;
      }
      await request.user.save();

      // generate token + welcome email
      generateToken(res, request.user._id);
      await sendWelcomeEmail(request.user.email, request.user.username);

      return res.json({
        success: true,
        message: `Request approved by CEO. User promoted to ${request.user.role}. Token generated and welcome email sent.`,
      });
    }

    return res.json({ success: true, message: "Request rejected by CEO." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error approving request" });
  }
};

export default approveRequest;
