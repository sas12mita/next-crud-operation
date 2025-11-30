"use server";

import { cookies } from "next/headers";

const SESSION_NAME = "userSession";

export async function setSession(data: { id: number; name: string; email: string }) {
  cookies().set(SESSION_NAME, JSON.stringify(data), {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export function getSession() {
  const cookie = cookies().get(SESSION_NAME);

  if (!cookie) return null;

  try {
    return JSON.parse(cookie.value);
  } catch {
    return null;
  }
}

export async function deleteSession() {
  cookies().delete(SESSION_NAME);
}
