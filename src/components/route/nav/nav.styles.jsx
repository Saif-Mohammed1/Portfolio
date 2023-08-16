import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavPadding } from "../../standers/standers";
import { FaBars } from "react-icons/fa";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${NavPadding};
  background-color: #323232f5;
  flex-wrap: wrap;
  div {
    display: flex;
    justify-content: space-between;
    @media (max-width: 601px) {
      width: 100%;
    }
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: #ffffffd9;
  font-weight: 700;
  &:hover {
    opacity: 0.7;
  }
`;
export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  li {
    padding: 0 20px;
  }
  @media (max-width: 601px) {
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.action ? "150px" : "0")};
    transition: max-height 2s linear;
    overflow: hidden;
    li {
      padding: 0;
      padding-top: 10px;
    }
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #ffffffd9;
  cursor: pointer;
  @media (max-width: 600px) {
    display: block;
  }
`;
