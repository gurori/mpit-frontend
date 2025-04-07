import { HubConnectionBuilder } from "@microsoft/signalr"

export const startConnection = async () => {
    let connection = new HubConnectionBuilder()
    .withUrl(`${process.env.NEXT_PUBLIC_API_URL}/chat`)
    .withAutomaticReconnect()
    .build()

    try {
        await connection.start()
    } catch(error) {
        console.log(error);
    }
    return connection
}

export const joinChat = async (userName: string, chatId: string) => {
    let connection = await startConnection()

    await connection.invoke("JoinChatAsync", {userName, chatId})
}

export const sendMessage = async (message: string) => {
    let connection = await startConnection()
    await connection.invoke("SendMessageAsync", message)
}