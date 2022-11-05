import mongoose from "mongoose";

import { UserSchema } from "./user";

export const SnipeSchema = new mongoose.Schema(
  {
    messageId: {
      type: String,
      unique: true,
      required: true,
    },
    senderId: UserSchema, // ID of the user who sent the message
    victims: [UserSchema],
    imageUrl: String,
    messageSent: Date,
    messageText: String,

    // If there is a dispute, let users vote on who is/are the victim(s)
    isDisputed: Boolean, // Whether or not the victims are known
    votes: [
      {
        userId: String,
        victims: [UserSchema],
      },
    ],
  },
  { timestamps: true }
);
