import React from "react";
import {
  Facebook,
  FooterContainer,
  GitHub,
  LinkedIn,
  Social,
  Telegram,
  WhatsApp,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        made with 💓 by
        <a
          href="https://github.com/Saif-Mohammed1"
          target="_blank"
          rel="noreferrer"
        >
          Saif
        </a>
        &copy; 2023 all rights received
      </p>
      <Social>
        <li>
          <a
            href="https://github.com/Saif-Mohammed1"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/saif.mohammed0"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/saif-mohammed-2a4ab31a6/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/@Saif_M0hammed"
            target="_blank"
            rel="noreferrer"
          >
            <Telegram />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+201024599132"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsApp />
          </a>
        </li>
      </Social>
    </FooterContainer>
  );
};

export default Footer;
