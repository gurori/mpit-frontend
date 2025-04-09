"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { type HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

export default function Chat({
  initialMessages,
  chatId,
  userName,
}: Readonly<{ initialMessages: any[]; userName: string; chatId: string }>) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [messages, setMessages] =
    useState<{ userName: string; text: string }[]>(initialMessages);
  const [message, setMessage] = useState("");
  const [currentConnection, setCurrentConnection] =
    useState<HubConnection | null>(null);
  useEffect(() => {
    const connect = async () => {
      const connection = new HubConnectionBuilder()
        .withUrl(`${process.env.NEXT_PUBLIC_API_URL}/chat`)
        .withAutomaticReconnect()
        .build();
      connection.on("ReceiveMessageAsync", (userName, message) => {
        console.log("message");

        setMessages((messages) => [...messages, { userName, text: message }]);
      });

      try {
        await connection.start();
        await connection.invoke("JoinChatAsync", {
          userName,
          chatId,
        });
        setCurrentConnection(connection);
      } catch (err) {
        console.log("Ошибка подключения к SignalR:", err);
      }
    };

    connect();
  }, []);
  const handleSubmit = async () => {
    if (message && currentConnection)
      await currentConnection.invoke("SendMessageAsync", message);
    if (inputRef.current) {
      inputRef.current.value = "";
      setMessage("");
    }
  };
  return (
    <main className="container center">
      <div className="grid gap-8">
        <div className="grid gap-4">
          {messages.map((m, i) => (
            <div key={i}>
              {m.userName} - {m.text}
            </div>
          ))}
        </div>
        <div className="flex gap-8">
          <input
            ref={inputRef}
            type="text"
            className="auth"
            placeholder="Что вас беспокоит?"
            onInput={(e) => setMessage(e.currentTarget.value)}
          />
          <Button onClick={handleSubmit}>Отправить</Button>
        </div>
      </div>
    </main>
  );
}
