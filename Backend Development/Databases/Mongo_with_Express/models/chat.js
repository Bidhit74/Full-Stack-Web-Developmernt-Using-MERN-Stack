import { Schema, model } from "mongoose";

// *** Schema ***

const chatSchema = new Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    maxLength: 50,
  },
  created_at: {
    type: Date,
    required: true,
  },
  updated_at: {
    type: Date,
  },
});

// Create model with export
export const Chat = model("Chat", chatSchema);
