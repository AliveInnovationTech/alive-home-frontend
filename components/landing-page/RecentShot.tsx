"use client";
import { recentShotData } from "@/utils/homeData";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RecentShot() {
  // Duplicate items for seamless scrolling effect
  const duplicatedData = [...recentShotData, ...recentShotData];
  return (
    <>
      <section className="bg-[#F4E8E1] p-4 md:p-10 lg:p-14 overflow-hidden">
        <div className="text-center max-w-7xl mx-auto">
          <h2 className="font-bold text-2xl text-[#6B6B6B]">
            Recently Shot With Us
          </h2>

          <div className="md:mt-6 lg:mt-10 rounded-lg p-2.5 flex justify-center space-x-6">
            <motion.div
              className="flex space-x-6"
              animate={{ x: ["0%", "-65%"] }} // Move from 0% to -100%
              initial={{ x: "0%" }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
            >
              {duplicatedData.map((item, index) => (
                <motion.div
                  whileHover={{
                    scale: 1.5,
                  }}
                  key={index}
                  className="shrink-0 cursor-pointer"
                >
                  <Image
                    src={item?.imageUrl as any}
                    alt={`${item.title} Image`}
                    width={160}
                    height={48}
                    priority
                    quality={100}
                    className="w-[67px] h-[25px] lg:w-[160px] lg:h-[32px] object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
