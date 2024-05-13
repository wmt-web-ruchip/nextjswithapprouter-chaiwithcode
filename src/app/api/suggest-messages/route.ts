import OpenAI from "openai";
import { StreamingTextResponse, OpenAIStream } from "ai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export const runtime = "edge";
export async function POST(req: Request) {
  try {
    const prompt = "helllooo"
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo",
      max_tokens: 400,
      stream: true,
      prompt,
    });

    const stream = OpenAIStream(response);
    
    return new StreamingTextResponse(stream);
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      // OpenAI API error handling
      const { name, status, headers, message } = error;
      return NextResponse.json({ name, status, headers, message }, { status });
    } else {
      // General error handling
      console.error("An unexpected error occurred:", error);
      throw error;
    }
  }
}
