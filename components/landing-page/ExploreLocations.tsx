"use client";
import { exploreData } from "@/utils/homeData";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExploreLocations() {
  return (
    <section className="text-center px-4 lg:px-6 py-10 md:py-14 lg:py-20 bg-[#F8F8F8]">
      <div className="max-w-5xl mx-auto">
        <div>
          <h2 className="font-bold text-xl md:text-4xl text-[#202020] lg:px-10">
            We have exactly what you need
          </h2>
          <p className="mt-3 md:mt-6 text-[#2A2A2A] lg:px-20">
            Explore a range of film-ready locations tailored to meet your
            production needs. Set your creativity free in our handpicked
            collection of studios and one-of-a-kind venues.
          </p>
          <div className="md:mt-8 lg:mt-14 flex space-x-4 overflow-x-auto overflow-y-hidden">
            {exploreData.map((item, index) => (
              <motion.div
                initial={{ x: "-90vw" }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 3 }}
                key={index}
                className="relative top-0 left-0 right-0 "
              >
                <Image
                  src={item?.imageUrl as any}
                  alt={`${item.title} Image`}
                  width={282}
                  height={460}
                  priority
                  sizes="282px"
                  quality={100}
                  className="relative mt-10 max-w-[282px] h-full sm:w-[282px] sm:h-[460px] md:w-[250px] md:h-[460px] object-cover"
                />
                <div className="absolute bottom-10 pl-8 text-left text-white">
                  <p className="font-semibold">{item.title}</p>
                  <p>{item.locationNumber}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
