import React, { useState } from "react";
import {
  Bars,
  BarsContainer,
  Link,
  ListContainer,
  NavContainer,
} from "./nav.styles";
import { Outlet } from "react-router-dom";

const Nav = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <div>
          <Link to="/">Portfolio</Link>
          <Bars onClick={() => setOpen(!open)} />
        </div>
        <ListContainer action={open}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#skills" onClick={() => scrollToSection("skills")}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="#projects" onClick={() => scrollToSection("projects")}>
              Projects
            </Link>
          </li>
        </ListContainer>
      </NavContainer>
      <Outlet />
    </>
  );
};
export default Nav;
