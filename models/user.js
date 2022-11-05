import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: String,
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  avatarUrl: String,
});
