import React from "react";
import AdminNav from "../_components/AdminNav";
import Messages from "./_components/Messages";
import { IMessage } from "@/interfaces/message.interface";

const Page = async () => {
  let messages: IMessage[] = [];
  messages = await getMessages();
  return (
    <div className="w-full px-6 pt-2 h-full overflow-auto pb-12">
      <AdminNav />
      <Messages initialMessages={messages} />
    </div>
  );
};

async function getMessages(): Promise<IMessage[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/message`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const messages: IMessage[] = await res.json();
    return messages;
  } catch (error) {
    return [];
  }
}

export default Page;
