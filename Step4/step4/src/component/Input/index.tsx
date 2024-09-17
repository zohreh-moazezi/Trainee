import React from "react";
import * as Styled from "./styled";
import { Field, FormikErrors, FormikTouched, FieldProps } from "formik";
import Label from "@component/Label";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  labelKey: string;
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  errors,
  touched,
  labelKey,
}) => {
  return (
    <>
      <Styled.Inputs>
        <Styled.TextField>
          <Field
            render={({ field }: FieldProps) => (
              <Styled.InputFields
                {...field}
                name={name}
                placeholder={placeholder}
                type={type}
                value={placeholder}
                error={!!(errors[name] && touched[name])}
              />
            )}
          />
          {errors[name] && touched[name] ? (
            <Styled.HelperText>{errors[name] as string}</Styled.HelperText>
          ) : null}
          <Label labelKey={labelKey} />
          <Styled.FormHelperText>
            <Styled.HelperText />
          </Styled.FormHelperText>
        </Styled.TextField>
      </Styled.Inputs>
    </>
  );
};

export default Input;
