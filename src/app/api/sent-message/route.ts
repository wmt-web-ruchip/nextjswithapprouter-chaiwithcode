import dbConnect from "@/lib/dbConnect";
import UserModel from "@/modal/User";
import { NextRequest, NextResponse } from "next/server";
import { Message } from "@/modal/User";

export async function POST(request: NextRequest) {
  await dbConnect();
  const { username, content } = await request.json();
  try {
    const user = await UserModel.findOne({ username });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found.",
        },
        {
          status: 404,
        }
      );
    }
    if (!user.isAcceptingMessage) {
      return NextResponse.json(
        {
          success: false,
          message: "User not accepting messages",
        },
        {
          status: 403,
        }
      );
    }
    const newMessage = {
      content: content,
      createdAt: new Date(),
    };

    user.messages.push(newMessage);
    await user.save();
    return NextResponse.json(
      {
        success: true,
        message: "Message send successfully.",
      },
      {
        status: 500,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        message: "Error while sending message",
      },
      {
        status: 500,
      }
    );
  }
}
