import express from "express";

// logout the current user
const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ success: true, message: "Logout Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error logging out" });
  }
};

export default logout;
