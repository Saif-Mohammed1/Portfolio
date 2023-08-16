import { styled } from "styled-components";

export const SectionContainer = styled.section`
  background-color: #323232;
  text-align: center;
  padding: 10px 5px;
  h1:first-child {
    color: #eee;
    opacity: 0.8;
    margin-bottom: 20px;
  }
`;
export const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  justify-content: center;
  div {
    margin: 10px;
    height: 100%;
    h3 {
      color: #ffffffbd;

      margin: 10px 0;
    }
    span {
      color: #c2c2c2;
      font-size: 23px;
      margin-bottom: 10px;
    }
    p {
      color: #cccccc;
      opacity: 0.8;
    }
  }
`;
