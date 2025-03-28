"use client";

import { useState } from "react";
import { IMessage } from "@/interfaces/message.interface";
import Message from "./Message";
import { useToast } from "@/hooks/use-toast";

interface Props {
  initialMessages: IMessage[];
}

const Messages = ({ initialMessages }: Props) => {
  const [messages, setMessages] = useState<IMessage[]>(initialMessages);

  const { toast } = useToast();
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/message/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setMessages((test) => test.filter((data) => data._id != id));
        return true;
      }
      toast({
        description: "Error deleting message ",
      });
    } catch (error) {
      toast({
        description: "Error deleting message ",
      });
    }
    return false;
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="text-2xl font-black">Messages</div>
      </div>
      <div className=" text-adminText capitalize">Available messages</div>
      <div className="grid grid-cols-3 mt-8 gap-5 ">
        {messages.map((message) => (
          <Message
            key={message._id}
            message={message}
            onDelete={() => handleDelete(message._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Messages;
