import leftPattern from "@/../public/assets/patterns/whitepattern.svg";
import Image from "next/image";
import bluepattern from "@/../public/assets/patterns/bluepattern.svg";

interface Pr {
  child: any;
  className?: string;
}

export default function Topic({ child, className }: Pr) {
  return (
    <div
      className={`${className} flex items-center justify-between overflow-hidden max-mdflex-col max-md:gap-4`}
    >
      <Image
        data-aos="fade-up-right"
        data-aos-offset="150"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        src={leftPattern}
        alt="left pattern"
        className="w-full h-[50px] object-cover max-md:h-[30px] max-lg:w-[70px]"
      />
      <h1 className="text-4xl font-bold px-12 text-background whitespace-nowrap max-md:px-0 max-md:text-3xl">
        {child}
      </h1>
      <Image
        data-aos="fade-up-left"
        data-aos-offset="150"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        src={leftPattern}
        alt="left pattern"
        className="w-full h-[50px] object-cover max-md:h-[30px] max-lg:w-full"
      />
    </div>
  );
}

export function TopicBlue({ child, className }: Pr) {
  return (
    <div
      className={`${className} flex items-center justify-between overflow-hidden max-mdflex-col max-md:gap-4`}
    >
      <Image
        data-aos="fade-up-right"
        data-aos-offset="150"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        src={bluepattern}
        alt="left pattern"
        className="w-full h-[50px] object-cover max-md:h-[30px] max-lg:w-[70px]"
      />
      <h1 className="text-4xl font-bold px-12 text-white whitespace-nowrap max-md:px-0 max-md:text-3xl">
        {child}
      </h1>
      <Image
        data-aos="fade-up-left"
        data-aos-offset="150"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        src={bluepattern}
        alt="left pattern"
        className="w-full h-[50px] object-cover max-md:h-[30px] max-lg:w-full"
      />
    </div>
  );
}
