import React from "react";
import logo from "@assets/logo.png";
import * as Styled from "./styled";

const Logo = () => {
  return (
    <>
      <Styled.CardMedia>
        <Styled.Asset>
          <Styled.TypeMark>
            <Styled.Vector src={logo} />
          </Styled.TypeMark>
        </Styled.Asset>
      </Styled.CardMedia>
    </>
  );
};

export default Logo;
