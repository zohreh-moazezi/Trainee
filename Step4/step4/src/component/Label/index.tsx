import React, { LabelHTMLAttributes, ReactNode } from 'react';
import * as Styled from './styled';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  isAuthError?: boolean;
  children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, isAuthError, ...props }) => {
  return (
    <Styled.Labels {...props} isAuthError={isAuthError} className="label">
      {children}
    </Styled.Labels>
  );
};

export default Label;
