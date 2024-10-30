import React from "react";
import * as Styled from "./styled";
import { Field, FieldProps } from "formik";
import Label from "@component/Label";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  placeholder: string;
  type: string;
  labelKey: string;
  error?: string;
  authenticationError: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  labelKey,
  error,
  authenticationError,
  ...rest
}) => {
  const hasError = !!error || authenticationError;
  return (
    <Styled.Inputs>
      <Styled.TextField>
        <Field name={name}>
          {({ field }: FieldProps) => (
            <Styled.InputFields
              {...field}
              {...rest}
              placeholder={placeholder}
              type={type}
              $error={hasError}
            />
          )}
        </Field>
        {error && <Styled.HelperText>{error}</Styled.HelperText>}
        <Label labelKey={labelKey} $error={hasError} />
      </Styled.TextField>
    </Styled.Inputs>
  );
};

export default Input;
