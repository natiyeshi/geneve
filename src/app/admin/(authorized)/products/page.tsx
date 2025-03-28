import React from "react";
import AdminNav from "../_components/AdminNav";
import Addproduct from "./_components/AddProduct";
import Product from "./_components/Product";
import Products from "./_components/Products";
import { IProduct } from "@/interfaces/product.interface";

const Page = async () => {
  let products: IProduct[] = [];
  products = await getProducts();
  return (
    <div className="w-full px-6 pt-2 h-full overflow-auto pb-12">
      <AdminNav />
      <Products initialProducts={products} />
    </div>
  );
};

async function getProducts(): Promise<IProduct[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const products: IProduct[] = await res.json();
    return products;
  } catch (error) {
    return [];
  }
}

export default Page;
