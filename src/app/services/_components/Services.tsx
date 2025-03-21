import { Section } from "@/components/custom/Section";
import img from "@/../public/assets/images/random/movie-card (1).png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function Services() {
  return (
    <Section className="pt-12  pb-6 relative" childClassName="my-32">
      <div className="flex max-md:flex-col-reverse max-md:gap-10 gap-5 px-12 max-md:px-4">
        <div className="md:w-1/2">
          <Image
            className="rounded-2xl hover:shadow-xl duration-200"
            src={img}
            alt="image"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold">Branded Apparels</h2>
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
              <span>Custom embroidery or print branding</span>
            </li>
            <li className="flex items-center gap-4">
              <FaCheck />
              <span>
                High-quality fabrics suitable for professional and casual
                settings.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <FaCheck />
              <span>Versatile designs tailored to your needs.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex mt-12 max-md:flex-col max-md:gap-10 gap-5 px-12 max-md:px-4">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold">Uniform Solutions</h2>
          <p className="mt-5">
            Say goodbye to boring, one-size-fits-all uniforms. Gaber specializes
            in creating functional workwear without compromising quality or
            style. From adding extra pockets for functionality to
            color-coordinating staff uniforms, we provide solutions that enhance
            productivity and maintain a polished corporate look.
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
            className="rounded-2xl hover:shadow-xl duration-200"
            src={img}
            alt="image"
          />
        </div>
      </div>
    </Section>
  );
}
