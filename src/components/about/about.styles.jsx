import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  height: 50vh;
  padding: 50px 12px 0;
  justify-content: space-between;
  background-color: #323232f5;
  @media (max-width: 770px) {
    flex-direction: column;
    height: 60vh;
  }
  @media (max-width: 511px) {
    height: 70vh;
  }
`;
export const Container = styled.div`
  border: solid 5px yellow;
  width: 210px;
  position: relative;
  height: 210px;
`;
export const ImageContainer = styled.div`
  width: 210px;
  height: 210px;
  position: absolute;
  top: -21px;
  right: -37px;
  border: solid 2px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Box shadow style */
  overflow: hidden; /* Hide any overflowing content */
  img {
    width: 100%;
  }
`;
export const AboutMe = styled.div`
  width: 60%;
  @media (max-width: 770px) {
    width: 100%;
  }
  h2 {
    color: #edc45b9e;
  }
  span {
    font-weight: 700;
    color: #0d9968;
  }
  p {
    color: #afa9a9;
  }
  button {
    padding: 5px 4px;
    width: 70px;
    cursor: pointer;
    font-weight: 800;
    color: white;
    background-color: #0d9968;
    border: none;
    border-radius: 7px;
    margin: 15px 0;
    &:hover {
      opacity: 0.8;
    }
  }
`;
