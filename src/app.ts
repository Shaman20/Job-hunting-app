import nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});

const mailOptions = {
  from: "",
  to: "",
  subject: "Email from my program",
  html: "<h1>Welcome</h1><p>That was easy!</p>",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error while sending email", error);
  } else {
    console.log("Email sent: ", info.response);
  }
});
