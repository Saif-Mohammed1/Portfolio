import styled from "styled-components";
import { GlobalPadding } from "../standers/standers";

export const HeaderContainer = styled.header`
  display: flex;
  height: 60vh;
  padding: ${GlobalPadding};
  background-color: #323232;

  @media screen and (max-width: 771px) {
    height: 50vh;
  }
  /* &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #4527a0;
    width: 100%;
    height: 100%;
    z-index: 3;
  } */
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    /* color: #; */
    color: #afa9a9;
    margin: 6px 0;
  }
  h1 {
    color: #edc45b;
  }
`;

export const Contact = styled.div`
  background-color: #0d9968;
  width: fit-content;
  padding: 5px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  &:hover {
    opacity: 0.5;
  }
  a {
    color: white;
  }
`;
export const Details = styled.div`
  display: flex;
  margin-bottom: 10px;

  h3 {
    color: #c6c3c6;
  }
  div:first-child {
    padding-right: 10px;
  }
  div:not(:first-child) {
    padding: 0 10px;
  }
  .special {
    border: solid 2px;
    border-color: transparent coral;
  }
  @media (max-width: 490px) {
    flex-direction: column;
    div {
      margin-bottom: 10px;
    }
  }
`;
