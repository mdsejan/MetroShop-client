"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const getCurrenUser = async () => {
  const token = cookies().get("token")?.value;

  let decodedToken = null;

  if (token) {
    decodedToken = await jwtDecode(token as string);
    return {
      userId: decodedToken?.userId,
      role: decodedToken?.role
    };
  }
  return decodedToken;
};
