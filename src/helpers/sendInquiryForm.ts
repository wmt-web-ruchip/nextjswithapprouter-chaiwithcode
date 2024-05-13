import * as sgMail from "@sendgrid/mail";

// import { resend } from "@/lib/resend";
// import VerificationEmail from "../../emails/VerificationEmail";
// import { ApiResponse } from "@/types/apiResponse";

// export async function sendInquiryForm(
//   email: string,
//   username: string,
// ): Promise<ApiResponse> {
//   try {
//     await resend.emails.send({

//       subject: "Mystry message | Verification Code",
//       react: VerificationEmail({ username, otp: verifyCode }),
//     });
//     return {
//       success: true,
//       message: "Verification email send successfully.",
//     };
//   } catch (emailError) {
//     console.log("error sending verification email.", emailError);
//     return {
//       success: false,
//       message: "Failed to send verification email.",
//     };
//   }
// }

// import { resend } from "@/lib/resend";
// import { ApiResponse } from "@/types/apiResponse";
// import InquiryEmail from "../../emails/InquiryEmail";

// export async function sendInquiryForm(email: string): Promise<ApiResponse> {
//   try {
//     await resend.emails.send({
//         from: email,
//         to: "deept@webmobtech.com",

//     //   from: "onboarding@resend.dev",
//     //   to: email,
//       subject: "Mystry message | Verification Code",
//       react: InquiryEmail({ email }),
//     });
//     return {
//       success: true,
//       message: "Verification email send successfully.",
//     };
//   } catch (emailError) {
//     console.log("error sending verification email.", emailError);
//     return {
//       success: false,
//       message: "Failed to send verification email.",
//     };
//   }
// }

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const from = "";

async function sendEmail(subject: string, emailName: string) {
  const msg = {
    from: "ruchip@webmobtech.com",
    to: emailName,
    subject: subject,
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  return sgMail.send(msg).then(() => {
    console.log(`${emailName} email successfully sent`);
  });
}

export async function sendInquiryForm(email: string) {
  await sendEmail("Inquiry-form", email);
}


