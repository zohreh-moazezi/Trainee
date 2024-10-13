import React from "react";
import * as Styled from "./styled";

interface LabelProps {
  labelKey: string;
  $error?: boolean;
}

const Label: React.FC<LabelProps> = ({ labelKey, $error }) => {
  return (
    <>
      <Styled.Labels className="label" $error={!!$error}>
        {labelKey}
      </Styled.Labels>
    </>
  );
};

export default Label;
