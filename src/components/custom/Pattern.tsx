import icon from "@/../public/assets/logo/pattern.svg";
import Image from "next/image";

export default function Pattern() {
  return (
    <div className="absolute left-0 right-0 overflow-hidden min-w-full flex flex-wrap gap-2 z-0">
      <Image
        className="w-full max-md:min-w-[1000px] object-cover"
        src={icon}
        alt="icon"
      />
    </div>
  );
}
