import { transporter } from "../config/email_config/email.config.js";
import {
  Password_Changed_Email_Template,
  Reset_Password_Email_Template,
  Verification_Email_Template,
  Welcome_Email_Template,
} from "../utils/EmailTemplate.js";

export const sendVerificationEamil = async (email, verificationCode) => {
  try {
    const info = await transporter.sendMail({
      from: '"programmers" Team" <muprogrammer295@gmail.com>', // sender address
      to: email, // list of recipients
      subject: "Verify Your Email", // subject line
      text: "Verify Your Email", // plain text body
      html: Verification_Email_Template.replace(
        "{verificationCode}",
        verificationCode,
      ), // HTML body
    });
    console.log("Email Send ok", info);
  } catch (error) {
    console.log(`Email Error ${error}`);
  }
};

export const sendResetPasswordEmail = async (email,resetUrl) => {
  try {
    const info = await transporter.sendMail({
      from: '"programmers" Team" <muprogrammer295@gmail.com>', // sender address
      to: email, // list of recipients
      subject: "Reset Password", // subject line
      text: "Reset Password", // plain text body
      html: Reset_Password_Email_Template.replace(
        "{resetUrl}",
        resetUrl
      ), // HTML body
    });
    console.log("Email Send ok", info);
  } catch (error) {
    console.log(`Email Error ${error}`);
  }
};

export const sendPasswordChangedEmail = async (email,name) => {
  try {
    const info = await transporter.sendMail({
      from: '"programmers" Team" <muprogrammer295@gmail.com>', // sender address
      to: email, // list of recipients
      subject: "Password Changed", // subject line
      text: "Password Changed", // plain text body
      html: Password_Changed_Email_Template.replace(
        "{name}",
        name
      ), // HTML body
    });
    console.log("Email Send ok", info);
  } catch (error) {
    console.log(`Email Error ${error}`);
  }
}
export const sendWelcomeEmail = async (email, name) => {
  try {
    const response = await transporter.sendMail({
      from: '"programmers" Team" <muprogrammer295@gmail.com>',

      to: email, // list of receivers
      subject: "Welcome Email", // Subject line
      text: "Welcome Email", // plain text body
      html: Welcome_Email_Template.replace("{name}", name),
    });
    console.log("Email send Successfully", response);
  } catch (error) {
    console.log("Email error", error);
  }
};
