import React from "react";
import * as Styled from "./styled";
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik";
import Label from "@component/Label";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  labelKey: string;
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
  authError: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <>
      <Styled.Inputs>
        <Styled.TextField>
          <Field name={props.name}>
            {({ field }: FieldProps) => (
              <Styled.InputFields
                {...field}
                placeholder={props.placeholder}
                type={props.type}
                $error={
                  !!(
                    (props.errors[props.name] && props.touched[props.name]) ||
                    props.authError
                  )
                }
              />
            )}
          </Field>

          {(props.errors[props.name] && props.touched[props.name]) ||
          props.authError ? (
            <Styled.HelperText>
              {props.errors[props.name] as string}
            </Styled.HelperText>
          ) : null}
          <Label
            labelKey={props.labelKey}
            $error={
              !!(
                (props.errors[props.name] && props.touched[props.name]) ||
                props.authError
              )
            }
          />
          <Styled.FormHelperText>
            <Styled.HelperText />
          </Styled.FormHelperText>
        </Styled.TextField>
      </Styled.Inputs>
    </>
  );
};

export default Input;
