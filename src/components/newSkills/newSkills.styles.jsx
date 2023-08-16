import { keyframes, styled } from "styled-components";
import { FcSettings } from "react-icons/fc";
import { GlobalPadding } from "../standers/standers";
const Rotate = keyframes`
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform:rotate(360deg);
    }
`;
export const Container = styled.section`
  background-color: #3a3a3a;
  padding: ${GlobalPadding};

  h1 {
    color: #eee;
    opacity: 0.8;
    margin-bottom: 20px;
    text-align: center;
  }
  h3 {
    display: flex;
    justify-content: space-between;
    margin: 18px 0;
    color: #eee;
    svg {
      margin-left: 4px;
    }
  }
`;
export const ProgressDiv = styled.div`
  padding: 10px;
  background-color: #eee;
  border-radius: 8px;
  margin: 5px 0;
  position: relative;
  span {
    width: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #039be5;
    transition: 3s;
    border-radius: 8px;
  }
`;

export const Cycle = styled(FcSettings)`
  animation: ${Rotate} 4s linear 0s infinite;
`;
