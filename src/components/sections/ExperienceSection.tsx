import { expCards } from "../../constants";
import GlowCard from "../GlowCard";
import TitleHeader from "../TitleHeader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = (): React.ReactElement => {
  useGSAP(() => {
    gsap.utils
      .toArray<HTMLDivElement>(".timeline-card")
      .forEach((card, index) => {
        gsap.from(card, {
          xPercent: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      });
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", { scaleY: 1 - self.progress });
        },
      },
    });
    gsap.utils
    .toArray<HTMLDivElement>(".expText")
    .forEach((text, index) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);
  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="My Career Overview"
        ></TitleHeader>

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((item: (typeof expCards)[number]) => (
              <div key={item.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={item}>
                    <div>
                      <img src={item.imgPath} alt={item.title} />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex item-start t">
                    <div className="timeline-wrapper">
                      <div className="timeline"> </div>
                      <div className="gradient-line w-1 h-full"></div>
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={item.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{item.title}</h1>
                        <p className="my-5 text-white-50">🗓️ {item.date}</p>
                        <p className="text-[#839cb5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc text-white-50 ms-5 mt-5 flex flex-col gap-5">
                          {item.responsibilities.map((r: string) => (
                            <li key={r} className="text-lg">
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
