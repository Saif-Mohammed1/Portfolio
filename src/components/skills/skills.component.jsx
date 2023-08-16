import React from "react";
import {
  //   Name,
  // Progress,
  Skill,
  SkillContainer,
  SkillsContainer,
} from "./skills.styles";

import {
  BiLogoRedux,
  BiLogoCss3,
  BiLogoReact,
  BiLogoFirebase,
} from "react-icons/bi";
import { IoLogoHtml5, IoLogoSass, IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
const Skills = () => {
  const skill = {
    Html5: IoLogoHtml5,
    Css: BiLogoCss3,
    Sass: IoLogoSass,
    BootStrap: FaBootstrap,
    JavaScript: IoLogoJavascript,
    React: BiLogoReact,
    Redux: BiLogoRedux,
    "Styled-components": SiStyledcomponents,
    Firebase: BiLogoFirebase,

    // "Php&Laravel": 30,
  };
  return (
    <SkillsContainer id="skills">
      <h1>Skills</h1>
      <SkillContainer>
        {Object.entries(skill).map(([key, Value]) => (
          <Skill key={key}>
            {<Value />}
            <h3> {key}</h3>
          </Skill>
        ))}
      </SkillContainer>
    </SkillsContainer>
  );
};

export default Skills;
