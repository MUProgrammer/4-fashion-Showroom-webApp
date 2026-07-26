import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
      required: false,
    },
    role: {
      type: String,
      enum: ["user", "subadmin", "admin", "ceo"],
      default: "user",
      required: true,
    },
    promotedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    promotedAt: {
      type: Date,
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: false,
      required: true,
    },
    isApprovedByCEO: { type: Boolean, default: false },
    verificationCode: {
      type: String,
    },
    verficationTokenExpiresAt: Date,
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpiresAt: Date,
  },
  { timestamps: true },
);
const User = mongoose.model("User", userSchema);
export default User;
