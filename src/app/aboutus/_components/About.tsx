import { Section } from "@/components/custom/Section";
import Topic from "@/components/custom/Topic";
import img from "@/../public/assets/images/random/movie-card (1).png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

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
      <div className="mx-auto max-w-[50rem] text-center my-12 ">
        We, at Gaber Wear, understand that it is better to stand out than to
        blend in with the crowd. That is why we specialize in providing
        customized and tailored service to our customers. We pride ourselves in
        our capacity to understand our customer needs and provide apparels that
        are functional and unique to you.
      </div>
      <div className="flex w-full px-12 max-md:px-4 max-md:flex-col gap-0 flex-1">
        <div className="flex relative flex-1 mt-24  ">
          <Image
            className="  z-10 rounded-3xl  w-[500px]  md:-rotate-[8.31deg] shadow-primary"
            src={img}
            style={{
              boxShadow: "20px 20px 40px rgba(225, 168, 39, 1)",
            }}
            alt="abcd"
          />
          {/* <div className="absolute top-[80px] -left-[1rem] w-[580px] h-[360px] rounded-[50px] bg-primary -rotate-[8.31deg]"></div> */}
        </div>
        <div className="mt-32 max-md:12 md:pe-12 flex-1 ">
          <h3 className="font-bold text-xl ">
            Empowering Communities Since 2016
          </h3>
          <p className="lg:max-w-lg m w-full mt-5">
            As a woman owned company established in 2016, women empowerment is
            at the core of what we do. We hire on average 150 employees of which
            85% are women and some are in managerial positions.{" "}
          </p>
        </div>
      </div>

      <div className="flex w-full px-12 max-md:px-4 max-md:flex-col gap-0 flex-1">
        <div className=" content-center max-md:12 md:pe-12 flex-1 items-center ">
          <h3 className="font-bold text-xl ">To Encourage More Women</h3>
          <p className="lg:max-w-lg m w-full mt-5">
            to strive for growth, we focus on promoting from within which helps
            Gaber build a strong internal capacity and a brighter future for our
            employees.
          </p>
        </div>
        <div className="flex relative flex-1 mt-24  ">
          <Image
            className="  z-10 rounded-3xl  w-[500px]  md:-rotate-[8.31deg] shadow-primary"
            src={img}
            style={{
              boxShadow: "20px 20px 40px rgba(225, 168, 39, 1)",
            }}
            alt="abcd"
          />
        </div>
      </div>
      <div className="mt-[6rem] flex flex-col">
        <h2 className="text-3xl mb-5 font-semibold text-center">
          Our Mession and Core Values
        </h2>
        <div className="flex  px-12 max-md:px-4 w-full justify-center gap-10 overflow-auto">
          {list.map(({ name, Icon },ind) => (
            <div key={ind} className="flex border hover:shadow-lg duration-200 min-w-[200px]  rounded-md border-primary p-4  flex-col items-center">
              <div className="p-3 w-14 h-14 flex rounded-full bg-primary/40">
                <Icon className="text-yellow-500 m-auto text-4xl mb-4" />
              </div>
              <div className="text-lg">{name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full px-12 max-md:px-4 max-md:flex-col gap-0 flex-1">
        <div className="flex relative flex-1 mt-24  ">
          <Image
            className="  z-10 rounded-3xl  w-[500px]  md:-rotate-[8.31deg] shadow-primary"
            src={img}
            style={{
              boxShadow: "20px 20px 40px rgba(225, 168, 39, 1)",
            }}
            alt="abcd"
          />
          {/* <div className="absolute top-[80px] -left-[1rem] w-[580px] h-[360px] rounded-[50px] bg-primary -rotate-[8.31deg]"></div> */}
        </div>
        <div className="mt-32 max-md:12 md:pe-12 flex-1 ">
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
