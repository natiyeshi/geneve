import ReadMessage from "./ReadMessage";
import AreYouSureDelete from "../../_components/AreYouSureDelete";
import { formatDate, getMaxString } from "@/utils/helper";
import { IMessage } from "@/interfaces/message.interface";

const Message = ({
  message,
  onDelete,
}: {
  message: IMessage;
  onDelete: Function;
}) => {
  return (
    <div className="bg-white text-adminText flex flex-col gap-2 w-[300px] px-2 py-2 shadow">
      <div className="self-end">
        {formatDate(
          message.createdAt ? new Date(message.createdAt) : new Date(Date.now())
        )}
      </div>
      <div className="break-all">{getMaxString(message.message)}</div>
      <div className="font-semibold text-black text-sm place-self-end break-all">
        {message.email}
      </div>
      <div className="flex justify-between">
        <ReadMessage data={message} />
        <AreYouSureDelete onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Message;
