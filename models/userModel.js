import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  avatarUrl: String,
});

export const User = mongoose.model("User", schema);
