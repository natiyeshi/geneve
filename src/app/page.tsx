import Image from "next/image";
import img from "@/../public/assets/admin/0A3A8093-ltO7b60S9-transformed-transformed.jpeg";
import Countdown from "./CountDown";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center">
      <Image
        className="absolute h-screen object-cover left-0 right-0 bottom-0 top-0"
        src={img}
        alt="A"
      />
      <div className="absolute left-0 right-0 bottom-0 top-0 bg-black/60"></div>
      <div className="z-20 text-white">
        <div className="text-[45px] max-md:text-[30px] text-center font-black ">
          Website Weaving in Process!
        </div>
        <div className="text-2xl text-center ">
          Stay tuned for something amazing.
        </div>
        <Countdown />
        <div className="flex mt-20  text-white gap-6 justify-center">
          <Link href="https://web.facebook.com/gabergarment">
            <FaFacebook size={30} />
          </Link>
          <Link href="https://www.instagram.com/gaberwear/?hl=en">
            <FaInstagram size={30} />
          </Link>
        </div>
        <div className="text-center mt-4">Copyright 2025 | All Rights Reserved</div>
      </div>
    </div>
  );
}
