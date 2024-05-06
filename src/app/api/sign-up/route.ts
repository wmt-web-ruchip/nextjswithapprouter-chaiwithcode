import dbConnect from "@/lib/dbConnect";
import UserModal from "@/modal/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const { username, email, password } = await request.json();
    console.log("username, email, password", username, email, password);
    const existingUserVerifiedByUsername = await UserModal.findOne({
      username,
      // isVerified: true,
    });

    if (existingUserVerifiedByUsername) {
      return NextResponse.json(
        {
          success: false,
          message: "Username is already taken.",
        },
        {
          status: 200,
        }
      );
    }

    const existingUserByEmail = await UserModal.findOne({ email });

    // Genrate verification code
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    if (existingUserByEmail) {
      if (existingUserByEmail?.isVerified) {
        return NextResponse.json(
          {
            success: false,
            message: "User already exist with this email",
          },
          {
            status: 400,
          }
        );
      } else {
        const hasedPassword = await bcrypt.hash(password, 10);
        existingUserByEmail.password = hasedPassword;
        existingUserByEmail.verifyCode = verifyCode;
        existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000);

        await existingUserByEmail.save();
      }
    } else {
      const hasedPassword = await bcrypt.hash(password, 10);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);

      const newUser = new UserModal({
        username,
        email,
        password: hasedPassword,
        verifyCode,
        isVerified: false,
        verifyCodeExpiry: expiryDate,
        isAcceptingMessage: true,
        messages: [],
      });

      await newUser.save();
    }

    //send verification email
    const emailResponse = await sendVerificationEmail(
      email,
      username,
      verifyCode
    );

    if (!emailResponse?.success) {
      return NextResponse.json(
        {
          success: false,
          message: emailResponse?.message,
        },
        {
          status: 500,
        }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "User register successfully. please verify your email",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error registering user", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error registering user",
      },
      {
        status: 500,
      }
    );
  }
}
