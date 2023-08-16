import React from "react";
import {
  Contact,
  Details,
  DetailsContainer,
  HeaderContainer,
} from "./header.styles";
const Header = () => {
  return (
    <HeaderContainer>
      <DetailsContainer>
        <div className="subtitle">
          <span>Hi there!</span>
          <h1> I'm a Web Developer</h1>
          <span> I make the complex simple.</span>
          <Contact>
            <a
              href="https://www.linkedin.com/in/saif-mohammed-2a4ab31a6/"
              target="_blank"
              rel="noreferrer"
            >
              Hire Me
            </a>
          </Contact>
        </div>
        <Details>
          <div>
            <h3>Email</h3>
            <span>saif.mohammed@gmail.com</span>
          </div>
          <div className="special">
            <h3>Phone</h3>
            <span>+201024599132</span>
          </div>
          <div>
            <h3>Location</h3>
            <span>Egypt</span>
          </div>
        </Details>
      </DetailsContainer>
    </HeaderContainer>
  );
};
export default Header;
