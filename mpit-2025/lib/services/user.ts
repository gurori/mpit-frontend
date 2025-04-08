import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getToken = async (
  name = "auth",
  isRedirect = true,
  redirectUrl = "/login"
) => {
    const cookiesStore = await cookies();
  if(!cookiesStore.has(name) && isRedirect)
    redirect(redirectUrl)

  const token = cookiesStore.get(name);
  return token;
};