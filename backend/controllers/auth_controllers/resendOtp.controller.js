import express from "express";

const resendOTP = async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal Server Error in resendOTP : ${error.message}`,
    });
  }
};
export default resendOTP;