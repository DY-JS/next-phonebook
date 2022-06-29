import React, { useContext } from "react";
import styled from "styled-components";

//import { ConverterContext } from "../../contexts/ConverterContext";

const StyledButton = styled.button`
  height: 35px;
  margin: 50px auto;
  color: #111827;
  background: #2563eb;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  &:active,
  :focus {
    box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.3);
  }
  &:hover {
    color: #fff;
    background: #2884f6;
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
