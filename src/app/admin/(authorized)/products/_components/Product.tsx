import AreYouSureDelete from "../../_components/AreYouSureDelete";
import img from "@/../public/assets/admin/template.png";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";

const Product = ({
  product,
  onDelete,
}: {
  product: IProduct;
  onDelete: Function;
}) => {
  return (
    <div className="bg-white rounded-xl text-adminText flex flex-col gap-2 w-[300px] px-2 py-2 shadow">
      <Image
        src={product.image}
        className="w-[300px] h-[200px] object-cover rounded-xl"
        width={100}
        height={100}
        unoptimized
        alt="Image"
      />
      <div className="flex flex-col text-sm mt-4">
        <div className="w-full justify-between flex">
          <div className="text-xs text-gray-500">Tag</div>
          <div className="font-semibold">{product.tag}</div>
        </div>
        <div className="w-full justify-between flex">
          <div className="text-xs text-gray-500">Catagory</div>
          <div className="font-semibold">{product.group}</div>
        </div>
      </div>
      <div className="flex justify-center">
        <AreYouSureDelete onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Product;
