import React from "react";
import Pic from "../assets/Saif.jpg";
import {
  AboutContainer,
  AboutMe,
  Container,
  ImageContainer,
} from "./about.styles";

import Resume from "../assets/Resume.pdf";
const About = () => {
  return (
    <AboutContainer>
      <Container>
        <ImageContainer>
          <img src={Pic} alt="Saif Mohammed" />
        </ImageContainer>
      </Container>
      <AboutMe>
        <span>Who am I ?</span>
        <h2>I'm Saif Mohammed, I'm a web developer. </h2>
        <p>
          I'm keen to use my skills to help people with their projects. I can
          use my skills to build E-commerce, landing page ...
        </p>
        <a href={Resume} download="Saif_mohammed_Resume.pdf">
          CV
        </a>
        {/* <button>CV</button> */}
      </AboutMe>
    </AboutContainer>
  );
};

export default About;
