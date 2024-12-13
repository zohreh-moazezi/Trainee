import React, { ReactNode, ButtonHTMLAttributes } from "react";
import * as Styled from "./styled";

interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const Button: React.FC<ButtonProp> = ({ children, ...props }) => {
  return <Styled.LoginButton {...props}>{children}</Styled.LoginButton>;
};

export default Button;
