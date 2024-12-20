import React, { LabelHTMLAttributes, ReactNode } from 'react';
import * as Styled from './styled';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  hasError?: boolean;
}

const Label: React.FC<LabelProps> = ({ children, hasError, ...props }) => {
  return (
    <Styled.Labels {...props} hasError={hasError} className="label">
      {children}
    </Styled.Labels>
  );
};

export default Label;
