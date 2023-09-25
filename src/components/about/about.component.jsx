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
          Hello, I'm Saif, a skilled web and Android developer with a strong
          background in utilizing essential tools to create innovative projects.
          My expertise extends to frameworks like React and React Native, where
          I've successfully built applications ranging from e-commerce solutions
          to dynamic web pages. I'm passionate about transforming ideas into
          functional and user-friendly digital experiences. If you have exciting
          projects in mind, please feel free to contact me; I'd love to
          collaborate and turn your ideas into reality.
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
