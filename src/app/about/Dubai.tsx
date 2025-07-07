"use client";

import React from "react";
import Image from "next/image";
import image1 from "@/../public/assets/d/dubai-pic-1.jpeg";
import image2 from "@/../public/assets/d/dubai-pic-1.jpeg";
import { motion } from "framer-motion";

const DubaiBureauShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4">
        {/* Left: Image + Video Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 max-w-xl"
        >
          {/* Image 1 */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={image1}
              alt="Dubai Bureau Image 1"
              className="object-cover w-full h-full"
              width={500}
              height={400}
            />
          </div>

          {/* Video */}
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
            <video
              className="object-cover w-full h-full aspect-[9/16]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/dubai-vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Image 2 */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={image2}
              alt="Dubai Bureau Image 2"
              className="object-cover w-full h-full"
              width={500}
              height={400}
            />
          </div>
        </motion.div>

        {/* Right: Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 max-w-xl"
        >
          <h2 className="text-4xl font-serif font-semibold text-[#09163A] mb-4">
            Dubai Bureau
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Located in the heart of the UAE, our Dubai bureau stands as a
            gateway to innovation and international collaboration. Equipped with
            modern infrastructure and a multicultural team, we help businesses
            establish a strong regional presence and expand into new markets
            across the Middle East.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DubaiBureauShowcase;
