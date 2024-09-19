import React from "react";
import * as Styled from "./styled";

interface LabelProps {
  labelKey: string;
}

const Label: React.FC<LabelProps> = ({ labelKey }) => {
  return (
    <>
      <Styled.Labels className="label">{labelKey}</Styled.Labels>
    </>
  );
};

export default Label;
