"use server";

import { UserType } from "@/app/_types/user";
import axios from "axios";
import { setSession, deleteSession } from "@/app/_lib/session";
import { redirect } from "next/navigation";

const API_URL = "http://localhost:5000";

export const loginAction = async (formData: FormData) => {
  const response = await axios.get(
    `${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`
  );

  const user: UserType = response.data[0];
  if (!user) throw new Error("Invalid Credentials");

  // Set session cookie (server-side)
  await setSession({ name: user.name, email: user.email, id: user.id });

  };

export const logoutAction = async () => {
  await deleteSession();
};