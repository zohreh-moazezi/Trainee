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

const Input: React.FC<InputProps> = (props) => {
  return (
    <>
      <Styled.Inputs>
        <Styled.TextField>
          <Field
            render={({ field }: FieldProps) => (
              <Styled.InputFields
                {...field}
                name={props.name}
                placeholder={props.placeholder}
                type={props.type}
                value={props.placeholder}
                error={
                  !!(props.errors[props.name] && props.touched[props.name])
                }
              />
            )}
          />
          {props.errors[props.name] && props.touched[props.name] ? (
            <Styled.HelperText>
              {props.errors[props.name] as string}
            </Styled.HelperText>
          ) : null}
          <Label labelKey={props.labelKey} />
          <Styled.FormHelperText>
            <Styled.HelperText />
          </Styled.FormHelperText>
        </Styled.TextField>
      </Styled.Inputs>
    </>
  );
};

export default Input;
