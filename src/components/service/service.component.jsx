import React from "react";
import { FcSettings } from "react-icons/fc";
import { PiScreencastBold } from "react-icons/pi";
import { SectionContainer, ServiceContainer } from "./service.styles";

const Services = () => {
  const services = [
    {
      title: "Creative Design",
      paragraph:
        "I convert your PSD, XD, AI, Sketch, PNG or JPG file into responsive web pages ",
      Icon: FcSettings,
    },
    {
      title: "Clean code",
      paragraph: "you will get easy and clean code to read and understand ",
      Icon: FcSettings,
    },
    {
      title: "Responsive Design",
      paragraph:
        "your web design ill fit all screen devices mobile,tablet and desktop",
      Icon: PiScreencastBold,
    },
  ];
  return (
    <SectionContainer>
      <h1>Services</h1>
      <ServiceContainer>
        {services.map(({ title, paragraph, Icon }, inx) => (
          <div key={inx}>
            <span>{<Icon />}</span>
            <h3>{title}</h3>
            <p>{paragraph}</p>
          </div>
        ))}
      </ServiceContainer>
    </SectionContainer>
  );
};

export default Services;
