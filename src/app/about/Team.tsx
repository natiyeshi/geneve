import Image from "next/image";

import ts from "@/../public/images/ts.png";
import ab from "@/../public/images/ab.png";
import fr from "@/../public/images/fr.png";
import yabtsega from "@/../public/images/team/Yabtsega.png";
import Evangeline from "@/../public/images/team/Evangeline.png";

const Team = () => {
  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-light text-[#09163A] mb-12 text-center slide-up">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Mr. Abraham Lemma",
              role: "CEO",
              description: "",
              delay: "0.1s",
              img: ab,
            },
            {
              name: "Tsion Dereje Haile",
              role: "Tour and Travel, Addis Ababa Operation Head",
              description: "",
              delay: "0.2s",
              img: ts,
            },
            {
              name: "Yabtsega behailu mamo",
              role: "Office Assistant",
              description: "",
              delay: "0.3s",
              img: yabtsega,
            },
            {
              name: "Evangeline Guinto Ramelo",
              role: "Tour and Travel, Dubai Operation Head",
              description: "",
              delay: "0.4s",
              img: Evangeline,
            },
          ].map((member, index) => (
            <div
              key={index}
              className="text-center slide-up"
              style={{ animationDelay: member.delay }}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-[#EE1D46]/10 flex items-center justify-center">
                {member.img ? (
                  <Image
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#EE1D46]"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-serif text-[#09163A] mb-2">
                {member.name}
              </h3>
              <p className="text-[#EE1D46] font-medium mb-4">{member.role}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
