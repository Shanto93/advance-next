import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
