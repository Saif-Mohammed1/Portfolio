import styled from "styled-components";
import { GlobalPadding } from "../standers/standers";
import { Link } from "react-router-dom";

export const ProjectsContainer = styled.section`
  padding: ${GlobalPadding};
  background-color: #323232f5;

  h1 {
    text-align: center;
    color: #eee;
    opacity: 0.8;
    margin-bottom: 30px;
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const Image = styled(Link)`
  display: block;
  height: 100%; /* Adjust the height as needed */
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  /* &:hover {
    transform: scale(1.2); /* Adjust the scratch scale as needed */
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;

  h3 {
    position: absolute;
    bottom: -20px; /* Adjust the distance from the bottom as needed */
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 8px 16px;
    margin: 0;
    font-size: 16px;
    opacity: 0;
    transition: bottom 0.4s ease-in-out, opacity 0.4s ease-in-out;
    width: 100%;
  }

  &:hover {
    h3 {
      bottom: 0;
      opacity: 1;
    }
    ${Image} {
      transform: scale(1.1);
      transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
`;
