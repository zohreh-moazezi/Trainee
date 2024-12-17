import React from 'react';
import * as Styled from './styled';
import Label from '@component/Label';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  hasError?: boolean;
  isAuthError?: boolean;
}

const Input: React.FC<InputProps> = ({
  error,
  hasError,
  isAuthError,
  ...props
}) => {
  return (
    <Styled.TextField>
      <Styled.InputFields {...props} hasError={hasError} />
      {error && <Styled.HelperText>{error}</Styled.HelperText>}
      <Label isAuthError={isAuthError}>{props.name}</Label>
    </Styled.TextField>
  );
};

export default Input;
