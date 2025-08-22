import { FooterList } from "@/utils/footerLinks";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <section className="bg-[#C77D01] px-4 lg:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-4xl">Alive Homes</h2>
          <p className="mt-4 md:mt-8 lg:mt-10 mb-4 text-xs text-white md:text-sm xl:text-base leading-6">
            Alive Home is an AI-driven real estate technology platform that
            leverages proximity-based services, geotechnology, and interactive
            tools to transform how Nigerians buy, sell, and rent properties. It
            connects homeowners, developers, realtors, and buyers in real time,
            reducing fraud, improving decision-making, and increasing access to
            verified housing information.
          </p>
          <p className="font-bold text-sm md:text-base text-white">
            ISO Certification (ISO 9001, 27001).
          </p>
          {/* ======Links sections===== */}
          <div className="border-y-[0.5px] border-slate-200 text-white grid grid-cols-3 gap-6 md:grid-cols-5 py-10 my-10">
            {FooterList.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold text-xs md:text-base mb-4 whitespace-nowrap">
                  {item.headings}
                </h4>
                <div>
                  {item.subHeadings.map((item, index) => (
                    <ul
                      key={index}
                      className="leading-10 text-xs md:text-sm lg:text-base"
                    >
                      <li
                        className={
                          item.includes("@") || item.includes(".com")
                            ? "text-[#2DCA73]"
                            : ""
                        }
                      >
                        {item}
                      </li>
                    </ul>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {item.imageUrl?.map((item, index) => (
                    <div key={index}>
                      <Image
                        src={item}
                        alt="Partner and Accolades"
                        width={132}
                        height={60}
                        sizes="100vw"
                        priority
                        quality={100}
                        className="mt-10 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
