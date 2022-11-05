import mongoose from "mongoose";

import { User } from "./userModel.js";

const schema = new mongoose.Schema(
  {
    messageId: {
      type: String,
      unique: true,
      required: true,
    },
    senderId: String, // ID of the user who sent the message
    victimIds: [String],
    imageUrl: String,
    messageSent: Date,
    messageText: String,

    // If there is a dispute, let users vote on who is/are the victim(s)
    isDisputed: Boolean, // Whether or not the victims are known
    votes: [
      {
        userId: String,
        victimId: [String],
      },
    ],
  },
  { timestamps: true }
);

export const Snipe = mongoose.model("Snipe", schema);
