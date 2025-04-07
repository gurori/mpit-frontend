"use server";

import type { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function setCookies(
  name: string,
  value: string,
  cookie?: ResponseCookie | Partial<ResponseCookie> | undefined
) {
  const cookiesStore = await cookies();
  cookiesStore.set(name, value, cookie);
}
