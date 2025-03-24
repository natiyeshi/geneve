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
    <div className="bg-white text-adminText flex flex-col gap-2 w-[300px] px-2 py-2 shadow">
      <Image
        src={product.image}
        className="w-[300px] h-[200px] object-cover "
        width={100}
        height={100}
        unoptimized
        alt="Image"
      />
      <div className="flex justify-center">
        <AreYouSureDelete onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Product;
