import styled from "styled-components";
import { GlobalPadding } from "../standers/standers";

export const ContactContainer = styled.section`
  padding: ${GlobalPadding};
  background-color: #323232;
  h1 {
    text-align: center;
    color: #eee;
    opacity: 0.8;
    margin-bottom: 30px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    margin: 10px 0;

    &:hover {
      opacity: 0.8;
    }
  }
  textarea {
    outline: none;
    height: 30vh;
    width: 100%;
    resize: none;
    padding: 10px 5px;
    border-radius: 7px;
  }
`;

export const Input = styled.input`
  padding: 10px 5px;
  outline: none;
  margin-bottom: 10px;
  border-radius: 7px;
`;
