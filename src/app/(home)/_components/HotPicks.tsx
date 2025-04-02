import bg1 from "@/../public/assets/images/image 13.png";
import bg2 from "@/../public/assets/images/image 14.png";
import bg3 from "@/../public/assets/images/image 16.png";
import bg4 from "@/../public/assets/images/movie-card.png";
import bg5 from "@/../public/assets/images/tg_image_3253265098 1.png";
import { Section } from "@/components/custom/Section";
import Image from "next/image";
const HotPicks = () => {
  return (
    <Section className=" flex flex-col mb-12" pixelate>
      <h1 className="text-3xl  py-6  font-semibold text-background">
        Hot Picks
      </h1>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 flex-1  ">
        <Image
          unoptimized
          className="h-[600px] w-full rounded-xl object-cover"
          src={bg3}
          alt="image"
        />
        <div className="flex flex-col gap-4 h-[600px]">
          <Image
            unoptimized
            className="h-[262px] object-cover w-full rounded-xl flex-1"
            src={bg1}
            alt="image"
          />
          <Image
            unoptimized
            className="h-[322px] object-cover w-full rounded-xl flex-1"
            src={bg2}
            alt="image"
          />
        </div>
        <div className="flex max-md:flexrow flex-col gap-4 md:h-[600px] max-md:w-full ">
          <Image
            unoptimized
            className="md:h-[322px]  max-md:h-[300px] object-cover w-full rounded-xl flex-1"
            src={bg4}
            alt="image"
          />
          <Image
            unoptimized
            className="md:h-[262px]  max-md:h-[300px]  object-cover w-full rounded-xl flex-1"
            src={bg5}
            alt="image"
          />
        </div>
      </div>
    </Section>
  );
};

export default HotPicks;
