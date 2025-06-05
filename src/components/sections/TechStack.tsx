import React from "react";
import TitleHeader from "../TitleHeader";
import { techStackIcons, techStackImgs } from "../../constants";
import TechIcon from "../Models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: { trigger: "#skills", start: "top center" },
      }
    );
  },[]);
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Prefered Tech Stack"
          sub="🤝 Skills I Bring To The Table"
        ></TitleHeader>
        <div className="tech-grid">
          {techStackIcons.map((item, index) => (
            <div
              key={item.name}
              className="relative tech-card card-border overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={item}></TechIcon>
                </div>
                <div className="padding-x w-full">
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          ))}
          {/* {techStackImgs.map((item, index) => (
            <div
              key={item.name}
              className="tech-card card-border overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={item.imgPath} alt={item.name} />
                </div>
                <div className="padding-x w-full">
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
