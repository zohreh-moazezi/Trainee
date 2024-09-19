import React from "react";
import * as Styled from "./styled";

const Texts = () => {
  return (
    <>
      <Styled.CardHeader>
        <Styled.Content>
          <Styled.FirstText>
            <p>Express Back Office</p>
          </Styled.FirstText>
          <Styled.SecondText>
            <p>Enter your username and password</p>
          </Styled.SecondText>
        </Styled.Content>
      </Styled.CardHeader>
    </>
  );
};

export default Texts;
