import Image from "next/image";
import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

import ts from "@/../public/images/ts.png";
import ab from "@/../public/images/ab.png";
import fr from "@/../public/images/fr.png";
import yabtsega from "@/../public/images/team/Yabtsega.png";
import Evangeline from "@/../public/images/team/Evangeline.png";

// Add styles for modern animations
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .floating {
    animation: float 6s ease-in-out infinite;
  }

  .gradient-bg {
    background: linear-gradient(-45deg, #EE1D46, #09163A, #EE1D46);
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
  }

  .hover-lift {
    transition: transform 0.3s ease;
  }

  .hover-lift:hover {
    transform: translateY(-5px);
  }

  .image-container {
    position: relative;
    overflow: hidden;
  }

  .image-container::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, rgba(238, 29, 70, 0.1), rgba(9, 22, 58, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .image-container:hover::after {
    opacity: 1;
  }
`;

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t('about.team.ceo.name'),
      role: t('about.team.ceo.role'),
      description: t('about.team.ceo.description'),
      delay: "0.1s",
      img: ab,
      isCEO: true,
    },
    {
      name: t('about.team.members.yeabtsega.name'),
      role: t('about.team.members.yeabtsega.role'),
      phone: "+251 98 911 1111",
      description: "",
      delay: "0.3s",
      img: yabtsega,
      isCEO: false,
    },
    {
      name: t('about.team.members.evangeline.name'),
      role: t('about.team.members.evangeline.role'),
      description: "",
      delay: "0.4s",
      img: Evangeline,
      isCEO: false,
    },
  ];

  const ceo = teamMembers.find(member => member.isCEO);
  const otherMembers = teamMembers.filter(member => !member.isCEO);

  const renderPhoneNumber = (phone?: string) => {
    if (!phone) return null;
    
    return (
      <a
        href={`tel:${phone.replace(/\s+/g, '')}`}
        className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[#EE1D46]/10 to-[#09163A]/10 text-gray-700 hover:text-[#EE1D46] transition-all duration-300"
      >
        <Phone className="w-4 h-4 mr-2" />
        <span className="text-sm">{phone}</span>
      </a>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white" id="team">
      <style>{styles}</style>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-light text-[#09163A] mb-16 text-center slide-up relative">
          {t('about.team.title')}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 gradient-bg rounded-full"></div>
        </h2>

        {/* CEO Section */}
        {ceo && (
          <div className="max-w-2xl mx-auto mb-20 slide-up" style={{ animationDelay: ceo.delay }}>
            <div className="text-center">
              <div className="image-container w-44 h-44 mx-auto mb-8 rounded-full overflow-hidden bg-gradient-to-br from-[#EE1D46]/10 to-[#09163A]/10 floating">
                {ceo.img ? (
                  <Image
                    src={ceo.img}
                    alt={ceo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#EE1D46] m-auto mt-8"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-serif text-[#09163A] mb-3">
                {ceo.name}
              </h3>
             
              <p className="text-[#EE1D46] font-medium mb-6 text-lg">{ceo.role}</p>
              {ceo.description && (
                <p className="text-gray-600 mb-4 w-full ">{ceo.description}</p>
              )}
              {ceo.phone && (
                <a
                  href={`tel:${ceo.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#EE1D46]/10 to-[#09163A]/10 text-gray-700 hover:text-[#EE1D46] transition-all duration-300 hover-lift"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>{ceo.phone}</span>
                </a>
              )}
            </div>
          </div>
        )}

        {/* Other Team Members */}
        <div className="flex flex-wrap justify-center gap-12 place-items-center mx-auto max-w-6xl">
          {otherMembers.map((member, index) => (
            <div
              key={index}
              className="text-center  slide-up hover-lift"
              style={{ animationDelay: member.delay }}
            >
              <div className="image-container w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-[#EE1D46]/10 to-[#09163A]/10">
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
                    className="text-[#EE1D46] m-auto mt-8"
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
              {renderPhoneNumber(member.phone)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
