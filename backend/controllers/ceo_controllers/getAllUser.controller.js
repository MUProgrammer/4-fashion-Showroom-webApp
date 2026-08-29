import express from "express";
import User from "../../models/user_models/user.models.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal Server Error in get ALl users : ${error.message}`,
    });
  }
};
export default getAllUsers;
