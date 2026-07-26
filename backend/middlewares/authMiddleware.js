import jwt from "jsonwebtoken";
import User from "../models/user_models/user.models.js";

// ✅ Protect middleware: verify JWT and attach user
export const protect = async (req, res, next) => {
  let token;

  // agar cookie mein token hai
  if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password"); // attach user object
    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Not authorized, token failed" });
  }
};

// ✅ CEO role check middleware
export const isCEO = (req, res, next) => {
  if (req.user && req.user.role === "ceo") {
    next();
  } else {
    return res
      .status(403)
      .json({ success: false, message: "Access denied. CEO only." });
  }
};
