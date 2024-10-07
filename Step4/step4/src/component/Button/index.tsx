import React from "react";
import * as Styled from "./styled";

interface ButtonProp {
  label: string;
}

const Button: React.FC<ButtonProp> = ({ label }) => {
  return (
    <>
      <Styled.LoginButton>{label}</Styled.LoginButton>
    </>
  );
};

export default Button;
