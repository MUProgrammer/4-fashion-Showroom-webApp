import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: "muprogrammer295@gmail.com",
    pass: "rhiv dgdt ukki elxe",
  },
}); 