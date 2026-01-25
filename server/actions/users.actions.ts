"use server";

import dbConnect from "@/lib/dbConnect";
import { User } from "../models/user.model";
import { revalidatePath } from "next/cache";

export const addUser = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");

  const userData = {
    name,
    email,
  };

  try {
    await dbConnect();

    await new User(userData).save();
    revalidatePath('/about')

    return { success: true, message: "User added successfully", data: userData };
  } catch (error) {
    console.error("Error adding user:", error);
    return { success: false, message: "Failed to add user" };
  }
};

export const getUsers = async () => {
    try {
        await dbConnect();
        const users = await User.find({});
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};
