import React from "react";
import * as Styled from "./styled";

interface ButtonProp {
  label: string;
  type: "button" | "reset" | "submit";
}

const Button: React.FC<ButtonProp> = ({ label, type = "button" }) => {
  return (
    <>
      <Styled.LoginButton type={type}>{label}</Styled.LoginButton>
    </>
  );
};

export default Button;
