import ReadMessage from "./ReadMessage";
import AreYouSureDelete from "../../_components/AreYouSureDelete";
import { formatDate, getMaxString } from "@/utils/helper";
import { IMessage } from "@/interfaces/message.interface";
import { GoPerson } from "react-icons/go";
const Message = ({
  message,
  onDelete,
}: {
  message: IMessage;
  onDelete: Function;
}) => {
  return (
    // <div className="bg-white rounded-xl text-adminText flex flex-col gap-2 w-[300px] px-2 py-2 shadow">
    //   <div className="self-end">
    //     {formatDate(
    //       message.createdAt ? new Date(message.createdAt) : new Date(Date.now())
    //     )}
    //   </div>
    //   <div className="break-all">{getMaxString(message.message)}</div>
    //   <div className="font-semibold text-black text-sm place-self-end break-all">
    //     {message.email}
    //   </div>
    //   <div className="flex justify-between">
    //     <ReadMessage data={message} />
    //     <AreYouSureDelete onDelete={onDelete} />
    //   </div>
    // </div>
    <div className="bg-white rounded-xl text-adminText flex flex-col gap-2 w-[300px] px-2 py-2 shadow">
      <div className="flex justify-between">
        <div className="font-semibold capitalize">{message.name}</div>
        <div>
          <GoPerson className="text-xl" />
        </div>
      </div>
      <div className="break-words">
        {message.message.split("").slice(0, 60).join("")}...
      </div>
      <div className="flex flex-col text-sm mt-4">
        <div className="w-full justify-between flex">
          <div className="text-xs text-gray-500">Phone Number</div>
          <div>{message.phoneNumber}</div>
        </div>
        <div className="w-full justify-between flex">
          <div className="text-xs text-gray-500">Email</div>
          <div>{message.email}</div>
        </div>
      </div>
      <div className="flex justify-between">
        <ReadMessage data={message} />
        <AreYouSureDelete onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Message;
