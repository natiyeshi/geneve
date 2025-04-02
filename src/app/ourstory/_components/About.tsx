import { Section } from "@/components/custom/Section";
import Topic from "@/components/custom/Topic";
import img from "@/../public/assets/images/product/IMG_0665.jpg";
import img2 from "@/../public/assets/images/random/movie-card (2).png";
import img3 from "@/../public/assets/images/random/image 22.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GiHanger } from "react-icons/gi";

export default function About() {
  const list = [
    {
      Icon: FaStar,
      name: "Excellence",
    },
    {
      Icon: FaStar,
      name: "Respect",
    },
    {
      Icon: FaStar,
      name: "Social-Impact",
    },
    {
      Icon: FaStar,
      name: "Integrity",
    },
    {
      Icon: FaStar,
      name: "Passion",
    },
  ];
  return (
    <Section childClassName="flex mb-32 flex-col">
      <Topic child={<>How it All Started ?</>} />
      <div
        data-aos="fade-up-top"
        data-aos-offset="150"
        data-aos-delay="30"
        data-aos-duration={`1000`}
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="true"
        className="mx-auto max-w-[50rem] text-center my-12 "
      >
        Gaber Wear is an Ethiopian apparel brand dedicated to empowering women
        to reach their full potential. The brand offers a range of products,
        including branded apparel, workwear and a retail shop. Gaber means
        Sunrise in Guragigna which symbolises the start of a new journey for the
        owners.
      </div>
      <div className="flex w-full px-12 max-md:px-4 max-md:flex-col gap-0 flex-1">
        <div
          data-aos="fade-up-right"
          data-aos-offset="150"
          data-aos-delay="30"
          data-aos-duration={`1000`}
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          className="flex relative flex-1 mt-24  "
        >
          <Image
            className="  z-10 rounded-3xl  w-[500px]   shadow-primary"
            src={img3}
            alt="abcd"
          />
          <div className="border-[1.5px] max-md:hidden border-black w-[500px] rounded-3xl h-[335px] absolute top-7 left-7  "></div>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-offset="150"
          data-aos-delay="30"
          data-aos-duration={`1000`}
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          className="mt-32 max-md:12 md:pe-12 flex-1 "
        >
          <h3 className="font-bold text-xl ">
            Empowering Communities Since 2016
          </h3>
          <p className="lg:max-w-lg m w-full mt-5">
            The founder and CEO, Jennet Lemma moved from the US in 2016 to
            establish this manufacturing business and her main motivation was
            contributing to the growth of Ethiopia’s economy. She believes her
            guiding principles integrity, hard work and leading by example
            helped her establish Gaber Wear.
          </p>

          <p className="mt-2">
            She considers herself most passionate about empowering women and
            impacting the community, and her work does not fall short on her
            ideals. She was selected among Top 50 African innovators highlighted
            in UNDP Regional Bureau for Africa Magazine during COVID-19.
          </p>
        </div>
      </div>

      <div className="flex w-full px-12 max-md:px-4 max-md:flex-col gap-0 flex-1">
        <div
          data-aos="fade-up-right"
          data-aos-offset="150"
          data-aos-delay="30"
          data-aos-duration={`1000`}
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          className=" content-center max-md:12 md:pe-12 flex-1 items-center "
        >
          <h3 className="font-bold text-xl max-md:mt-4">
            To Encourage More Women
          </h3>
          <p className="lg:max-w-lg m w-full mt-5">
            At the peak COVID-19, Gaber was also among 12 SME&apos;s consortium
            selected by Mastercard Foundation to repurpose their factories and
            manufacture PPE materials. The consortium successfully completing
            the program and collectively saved 1,060 jobs. Gaber Wear has been
            featured in media outlets like BBC Smart Money, where founder Miss
            Lemma discussed her motivation for returning to Ethiopia and
            establishing the brand.
          </p>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-offset="150"
          data-aos-delay="30"
          data-aos-duration={`1000`}
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          className="flex relative flex-1 mt-24  "
        >
          <Image
            className="  z-10 rounded-3xl  w-[500px] shadow-primary"
            src={img}
            alt="abcd"
          />
          <div className="border-[1.5px] max-md:hidden  border-black w-[500px] rounded-3xl h-[400px] absolute top-7 left-7  "></div>
        </div>
      </div>
      <div className="mt-[6rem] flex flex-col py-20">
        <h2 className="text-3xl mb-5 font-semibold text-center">
          Our Core Values
        </h2>
        <div
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-delay="30"
          data-aos-duration={`1000`}
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          className="flex  px-12 mt-4  max-md:px-4 w-full md:justify-center gap-10 overflow-auto"
        >
          {list.map(({ name, Icon }, ind) => (
            <div
              key={ind}
              className="flex border hover:shadow-lg duration-200 min-w-[200px]  rounded-md border-primary p-4  flex-col"
            >
              <div className="p-3 w-14 h-14 flex rounded-full bg-primary/40">
                <GiHanger className="text-yellow-500 m-auto text-4xl mb-4" />
              </div>
              <div className="text-lg">{name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full px-12 max-md:px-4 max-md:flex-col gap-0 flex-1 h-fit pb-12">
        <div
          data-aos="fade-up-right"
          data-aos-offset="150"
          data-aos-delay="30"
          data-aos-duration={`1000`}
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          className="flex relative flex-1 mt-24  "
        >
          <Image
            className="z-10 rounded-3xl  w-[500px]   shadow-primary"
            src={img2}
            alt="abcd"
          />
          <div className="border-[1.5px] max-md:hidden border-black w-[500px] rounded-3xl h-[320px] absolute top-7 left-7  "></div>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-offset="150"
          data-aos-delay="30"
          data-aos-duration={`1000`}
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          className="mt-32 max-md:12 md:pe-12 flex-1 "
        >
          <h3 className="font-bold text-xl ">
            Uplifting Women, Transforming Lives
          </h3>
          <p className="lg:max-w-lg m w-full mt-5">
            At Gaber Wear, uplifting women is at the core of everything we do.
            With 85% of our 150 employees being women, many in managerial roles,
            we focus on creating opportunities for personal growth and
            leadership.
          </p>
          <p className="mt-4">
            Through continuous training and a culture of internal promotion, we
            are building a future where women lead with confidence and impact
            their communities positively
          </p>
        </div>
      </div>
    </Section>
  );
}
