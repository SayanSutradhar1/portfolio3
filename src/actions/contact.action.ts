"use server";

import connectDB from "@/lib/db";
import { ContactMessage } from "@/models/contactMessage.model";

interface SendMessagePayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function SendMessage(sendMessagePayload: SendMessagePayload) {
  try {
    await connectDB();

    const newMessage = await ContactMessage.create(sendMessagePayload);

    if (newMessage) {
      return {
        success: true,
        status: 201,
        message: "Message has been sent successfully",
      };
    }

    return {
      success: false,
      status: 400,
      message: "Failed to send message ... Please try again later",
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: "Internal Server Error",
      error: (error as Error).message,
    };
  }
}
