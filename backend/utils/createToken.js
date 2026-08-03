import jwt from "jsonwebtoken"

const generateToken=async(res,userId)=>{
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development" ,
        sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });
      return token
}
export default generateToken