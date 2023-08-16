import React from "react";
import {
  ProjectsContainer,
  Container,
  Image,
  ImageContainer,
} from "./projects.styles";
import Shop from "../assets/image/shop.png";
import Memory from "../assets/image/Memory-Game.png";
import To from "../assets/image/TO-DO-LIST.png";
import Weather from "../assets/image/Weather-App.png";
import Template1 from "../assets/image/Leon-Template.png";
import Template2 from "../assets/image/Kasper-Template-Two.png";
import Template3 from "../assets/image/Template-Three.png";
import Manage from "../assets/image/manage-landing-page.png";
import Youtube from "../assets/image/youtube-api.png";
import Spacial from "../assets/image/Spacial-Design.png";
import Sunnyside from "../assets/image/SunnySide.png";

const Projects = () => {
  const project = [
    {
      img: Shop,
      name: "Shop&firebase",
      Url: "https://superlative-chebakia-1f1043.netlify.app/",
    },
    {
      img: Memory,
      name: "Memory-Game",
      Url: "https://saif-mohammed1.github.io/Memory-Game/",
    },
    {
      img: To,
      name: "To-DO-List",
      Url: "https://saif-mohammed1.github.io/To-DO-List/",
    },
    {
      img: Weather,
      name: "Weather-App",
      Url: "https://fastidious-cupcake-4ef5a8.netlify.app/",
    },
    {
      img: Template1,
      name: "HTML_CSS_Template_One",
      Url: "https://saif-mohammed1.github.io/HTML_CSS_Template_One/",
    },
    {
      img: Template2,

      name: "HTML_CSS_Template_Two",
      Url: "https://saif-mohammed1.github.io/Template-Two/#",
    },
    {
      img: Template3,
      name: "HTML_CSS_Template_Three",
      Url: "https://saif-mohammed1.github.io/HTML_And_CSS_Template_Three/",
    },
    {
      img: Manage,
      name: "manage-landing-page",
      Url: "https://beamish-sunshine-e28ad1.netlify.app/",
    },
    {
      img: Youtube,
      name: "youtube-api",
      Url: "https://strong-cranachan-9d6614.netlify.app/",
    },
    {
      img: Spacial,
      name: "Spacial-Design",
      Url: "https://saif-mohammed1.github.io/Spacial-Design/",
    },
    {
      img: Sunnyside,
      name: "Sunnyside",
      Url: "https://saif-mohammed1.github.io/Sunnyside/",
    },
  ];
  return (
    <ProjectsContainer id="projects">
      <h1>My Projects </h1>
      <Container>
        {project.map(({ img, name, Url }, inx) => (
          <ImageContainer key={inx}>
            <Image to={Url} target="_blank" image={img} />
            <h3> {name}</h3>
          </ImageContainer>
        ))}
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;
