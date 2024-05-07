import dbConnect from "@/lib/dbConnect";
import UserModel from "@/modal/User";
import { userNameValidation } from "@/schemas/signUpSchema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const UsernameQuerySchema = z.object({
  username: userNameValidation,
});

export async function GET(request: NextRequest) {
  if (request.method !== "GET") {
    return NextResponse.json(
      {
        success: false,
        message: "Method not allowed",
      },
      {
        status: 405,
      }
    );
  }
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const queryParam = {
      username: searchParams.get("username"),
    };

    // validate with zod

    const result = UsernameQuerySchema.safeParse(queryParam);
    if (!result?.success) {
      const usernameErrors = result.error.format().username?._errors || [];
      return NextResponse.json(
        {
          success: false,
          message:
            usernameErrors?.length > 0
              ? usernameErrors.join(", ")
              : "Invalid query parameter",
        },
        {
          status: 200,
        }
      );
    }
    const { username } = result?.data;
    console.log("username", username);

    const existingVerifiedUser = await UserModel.findOne({
      username,
      isVerified: true,
    });
    console.log("existingVerifiedUser", existingVerifiedUser);
    if (existingVerifiedUser) {
      return NextResponse.json(
        {
          success: false,
          message: "username is already taken.",
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "username is unique.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error checking username", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error checking username.",
      },
      {
        status: 500,
      }
    );
  }
}
