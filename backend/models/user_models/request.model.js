import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // CEO
  },
  { timestamps: true },
);

const Request = mongoose.model("Request", requestSchema);
export default Request;
