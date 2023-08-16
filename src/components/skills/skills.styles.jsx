import styled from "styled-components";
import { GlobalPadding } from "../standers/standers";
export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #323232;
  /* padding: ${GlobalPadding}; */
  padding: 10px 12px;
  h1 {
    text-align: center;
    color: #eee;
    opacity: 0.8;
  }
`;
export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(100% / 2), 1fr));
`;

export const Skill = styled.div`
  margin: 10px 0;
  text-align: center;
  color: white;
  font-size: 80px;
  opacity: 0.7;

  h3 {
    font-size: 18px;
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
  } /* 
  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    color: white;
  } */
`;
// export const Name = styled.div;
export const Progress = styled.div`
  height: 30px;
  background-color: #eee;
  position: relative;
  border-radius: 10px;
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: rgb(144, 202, 249);
    border-radius: 10px;
    width: ${(props) => (props ? props.width + "%" : 0)};
    transition: width 0.6s ease;
    animation: pulse 1.5s infinite;
  }
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(144, 202, 249, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(144, 202, 249, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(144, 202, 249, 0);
    }
  }
`;
