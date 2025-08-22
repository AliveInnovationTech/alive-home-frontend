"use client";
import { processData } from "@/utils/homeData";
import { useRouter } from "next/navigation";
import Card from "@/components/cards/Card";

export default function Process() {
  const router = useRouter();
  return (
    <section className="text-center px-6 lg:px-6 py-10 md:py-20 bg-[#F8F8F8]">
      <div className="max-w-5xl mx-auto">
        <div>
          <h2 className="font-bold text-xl md:text-4xl text-[#202020]">
            The Alive Homes Process
          </h2>
          <p className="mt-6 text-[#2A2A2A] px-6 md:px-24">
            We love production and are committed to simplifying it, starting
            with film locations. Alive Homes&apos;s marketplace connects
            thousands of producers and agencies with spaces, to create
            commercials, films, and branded content throughout Nigeria.
          </p>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 place-items-center gap-6">
            {processData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                icon={item.icon}
                content={item.content}
                cardStyle={`max-w-[460px] px-6 md:px-14 ${
                  processData.length % 2 !== 0 &&
                  index === processData.length - 1
                    ? "md:col-span-2 "
                    : ""
                }`}
              />
            ))}
          </div>

          <button className="bg-[#C77D01] hover:bg-[#C77D01]/90 text-white p-2 py-3 cursor-pointer rounded-md w-[150px] text-center mx-auto mt-10 flex items-center justify-center">
            Browse Spaces
          </button>
        </div>
      </div>
    </section>
  );
}
