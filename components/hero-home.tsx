import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import bannber from "@/public/images/banner.png";

import bannber02 from "@/public/images/banner02.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              {/* <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div> */}
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
            深化高等教育产教融合
            <br className="max-lg:hidden" />
            促进校企协同创新
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-500"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                产教融合既是产业转型升级的通道，也是教育形态变革的路径。深化产教融合促进教育链、人才链与产业链、创新链有机衔接，是当前推进人力资源供给侧结构性改革的迫切要求。幸福产业，也就是精神文化产业，与国家十七届五中全会提出的发展一文化产 业的战略相一致，涉及生活的方方面面。幸福产业的意义在于累积幸福感受提升居民幸福感，是构建和谐社会的重要经济手段之一。是构建和谐社 会的重要经济手段之一。
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  {/* <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Free Trial{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl flex flex-col justify-between "
            data-aos="zoom-y-out"
            data-aos-delay={500}
          >
            <Image  
                  className="rounded bg-gray-900 mb-12"
                  src={bannber02}
                  width={1600}
                  height={800}
                  alt="Planet">

                </Image>
             <Image  
                  className="rounded bg-gray-900"
                  src={bannber}
                  width={1600}
                  height={800}
                  alt="Planet">

                </Image>
                
          </div>
        </div>
      </div>
    </section>
  );
}
