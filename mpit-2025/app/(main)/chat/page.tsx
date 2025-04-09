import apiFetch from "@/lib/apiFetch";
import Chat from "./Chat";
import { getToken } from "@/lib/services/user";
import { redirect } from "next/navigation";

export default async function ChatPage() {
  const token = await getToken()
  const res = await apiFetch("/chats/messages", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token!.value}`,
    },
    //next: { revalidate: 10 }
  })
  if ([403, 401].includes(res.status)) redirect("/login")
  console.log(res);
  const messages = await res.json()
  console.log(messages);
  
  return <Chat initialMessages={messages.messages} chatId={messages.chatId} userName={messages.userName} />;
}
