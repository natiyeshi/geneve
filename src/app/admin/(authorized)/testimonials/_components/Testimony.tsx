import { ITestimonial } from "@/interfaces/testimoial.interface";
import AreYouSureDelete from "../../_components/AreYouSureDelete";
import { formatDate } from "@/utils/helper";
import ReadTestimony from "./ReadTestimony";
import { getMaxString } from "@/utils/helper"

const Testimony = ({ testimony, onDelete }: { testimony: ITestimonial , onDelete : Function}) => {
  return (
    <div className="bg-white text-adminText flex flex-col gap-2 w-[300px] px-2 py-2 shadow">
      <div className="self-end">
        {formatDate(
          testimony.createdAt
            ? new Date(testimony.createdAt)
            : new Date(Date.now())
        )}
      </div>
      <div className="break-words">{getMaxString(testimony.message)}</div>
      <div className="break-words font-semibold text-black">{testimony.name}</div>
      <div className="flex justify-between">
        <ReadTestimony data={testimony} />
        <AreYouSureDelete onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Testimony;
