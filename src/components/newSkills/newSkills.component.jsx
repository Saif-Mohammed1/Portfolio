import React, { Fragment } from "react";
import { FaLaravel, FaReact } from "react-icons/fa";
import { Container, Cycle, ProgressDiv } from "./newSkills.styles";

const NewSkills = () => {
  const progress = [
    { title: "Material-UI", Icon: FaReact, prog: "25%" },
    { title: "Laravel", Icon: FaLaravel, prog: "35%" },
  ];

  return (
    <Container>
      <h1>Learning New Tech</h1>
      {progress.map(({ title, Icon, prog }, inx) => (
        <Fragment key={inx}>
          <h3>
            <span>
              {title} <Icon />
            </span>
            <Cycle />
          </h3>
          <ProgressDiv>
            <span style={{ width: prog }}></span>
          </ProgressDiv>
        </Fragment>
      ))}
    </Container>
  );
};

export default NewSkills;
