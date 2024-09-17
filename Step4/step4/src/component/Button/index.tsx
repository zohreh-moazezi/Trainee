import React from "react";
import * as Styled from "./styled";
interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <>
      <Styled.LoginButton>{label}</Styled.LoginButton>
    </>
  );
};

export default Button;
