import { NextRequest, NextResponse } from "next/server";
import { sendNodemailer } from "@/lib/nodemailer";
import InquiryModel from "@/modal/inquiry";
export async function POST(request: NextRequest) {
  try {
    const { inquiryMessage, email, phoneNumber } = await request.json();

    if (!inquiryMessage || !email || !phoneNumber) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all the fields.",
        },
        {
          status: 400,
        }
      );
    }

    if (inquiryMessage?.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: "Inquiry message should be less than 10 characters.",
        },
        {
          status: 400,
        }
      );
    }

    if (phoneNumber?.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number should be of 10 digits.",
        },
        {
          status: 400,
        }
      );
    }
    const existingUserVerifiedByEmail = await InquiryModel.findOne({
      email,
    });
    if (existingUserVerifiedByEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "Already inquired. Please wait for the response",
        },
        {
          status: 400,
        }
      );
    }
    const inquiryData = await InquiryModel.create({
      inquiryMessage,
      email,
      phoneNumber,
    });

    if (inquiryData?.email) {
      const response = await sendNodemailer(email, inquiryMessage, phoneNumber);
      if (response) {
        return NextResponse.json(
          {
            success: true,
            message: "Inquiry email sent successfully.",
          },
          {
            status: 201,
          }
        );
      }
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send inquiry email.",
        },
        {
          status: 500,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}
