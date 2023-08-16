import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  padding: 8px 12px 0;
  background-color: #323232f5;
  text-align: center;
  font-size: 18px;
  a {
    color: #ffffffd9;
    padding: 0 6px;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const base = css`
  border-radius: 50%;
  margin-bottom: 6px;
  font-size: 30px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    margin-top: -5px;
  }
`;
export const Social = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 30px;
  justify-content: center;

  padding: 0;
  li {
    padding: 0 4px;
  }
`;

export const GitHub = styled(FaGithub)`
  ${base};
  background-color: #333;
`;
export const Facebook = styled(FaFacebook)`
  background-color: #1877f2;
  ${base}
`;
export const LinkedIn = styled(FaLinkedin)`
  background-color: #0077b5;
  ${base}
`;
export const Telegram = styled(FaTelegram)`
  background-color: #0088cc;
  ${base}
`;
export const WhatsApp = styled(FaWhatsapp)`
  background-color: #25d366;
  ${base}
`;
