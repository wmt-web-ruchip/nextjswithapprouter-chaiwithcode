import fs from "fs";
import nodemailer from "nodemailer";

export async function sendNodemailer(
  email: string,
  inquiryMessage: string,
  phoneNumber: string
) {
  const emailTemplate = fs.readFileSync("emails/email_template.html", "utf-8");
  const personalizedTemplate = emailTemplate
    .replace("{{email}}", email)
    .replace("{{inquiryMessage}}", inquiryMessage)
    .replace("{{phoneNumber}}", phoneNumber);

  // write a function to send email using nodemailer
  //   var transport = nodemailer.createTransport({
  //     host: "sandbox.smtp.mailtrap.io",
  //     port: 2525,
  //     auth: {
  //       user: "18ff5ecfe8e240",
  //       pass: "e6c608c79f802a",
  //     },
  //   });

  const transport = nodemailer.createTransport({
    service: "gmail",
    host: process.env.HOST,
    port: 587, // or 587
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_FROM, // Your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
    },
  });

  const mailOptions = {
    from: "ruchip@webmobtech.com",
    to: email,
    subject: "Inquiry Form",
    html: personalizedTemplate,
  };

  try {
    const info = await transport.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
}
