import { Section } from "@/components/custom/Section";
import img from "@/../public/assets/images/random/movie-card (1).png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

import pr4 from "@/../public/assets/images/product/IMG_0662.jpg";
import pr5 from "@/../public/assets/images/product/IMG_0664.jpg";
import pr9 from "@/../public/assets/images/product/IMG_0668.jpg";
import pr1 from "@/../public/assets/images/new/IMG_0665.jpg";
import pr2 from "@/../public/assets/images/new/IMG_0660.jpg";
import pr3 from "@/../public/assets/images/new/image.jpg";

export default function Services() {
  return (
    <Section
      className="pt-12  pb-6 relative"
      childClassName="my-32 max-md:mt-12"
    >
      <div
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-delay="30"
        data-aos-duration={`1000`}
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        className="flex max-md:flex-col-reverse max-md:gap-10 gap-5 px-12 max-md:px-4"
      >
        <div className="md:w-1/2">
          <Image
            className="rounded-2xl h-[400px] object-cover md:me-4 shadow hover:shadow-xl duration-200"
            src={pr1}
            alt="image"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold">Branding Service</h2>
          <p className="mt-5">
            Whether you are preparing for a corporate event, need branded
            garments for giveaways, or outfitting your staff, Gaber has you
            covered. We provide fully customizable products, offering embroidery
            or print branding options to ensure your apparel aligns perfectly
            with your brand’s identity.
          </p>
          <ul className="mt-3">
            <li className="flex items-center gap-4">
              <FaCheck />
              <span> Custom embroidery or print branding service</span>
            </li>
            <li className="flex items-center gap-4">
              <FaCheck />
              <span>
                Bring your own Garment and obtain an embroidery only Service
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-delay="30"
        data-aos-duration={`1000`}
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        className="flex mt-12 max-md:flex-col max-md:gap-10 gap-5 px-12 max-md:px-4"
      >
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold">
            Cut, Make, Trim (CMT) Service
          </h2>
          <p className="mt-5">
            manufacturing service is provided by our factory and our team will
            essentially cut, make and trim your designs into fully produced
            products. This service requires customers to provide fabrics,
            accessories and sample. Gaber will provide the full stitching
            service. Minimum order quantity applies.
          </p>
          <ul className="mt-3">
            <li className="flex items-center gap-4">
              <FaCheck />
              <span>Customization designs for enhanced functionality.</span>
            </li>
            <li className="flex items-center gap-4">
              <FaCheck />
              <span>High-quality stitching and durable materials.</span>
            </li>
            <li className="flex items-center gap-4">
              <FaCheck />
              <span>Options for color coordination by department or role.</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <Image
            className="rounded-2xl h-[400px] object-cover hover:shadow-xl duration-200"
            src={pr3}
            alt="image"
          />
        </div>
      </div>
    </Section>
  );
}
