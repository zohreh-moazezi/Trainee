import React from "react";
import Button from "@component/Button";
import Logo from "../Logo";
import Texts from "../Texts";
import Input from "@component/Input";
import * as Styled from "./styled";
import { Formik, Form as LoginForm } from "formik";
import { loginSchema } from "./services/schema";

interface FormProp {
  onSubmit: (values: { username: string; password: string }) => void;
  error: {
    validation?: Record<string, string>;
    authentication?: string | null;
  };
  setError: React.Dispatch<
    React.SetStateAction<{
      validation?: Record<string, string>;
      authentication?: string | null;
    }>
  >;
}

const Form: React.FC<FormProp> = ({ onSubmit, error, setError }) => {
  const handleValidate = async (values: {
    username: string;
    password: string;
  }) => {
    setError((prevError) => ({ ...prevError, validation: {} }));
    try {
      await loginSchema.validate(values, { abortEarly: false });
      onSubmit(values);
    } catch (validationError: any) {
      const newErrors: Record<string, string> = {};
      validationError.inner.forEach((err: any) => {
        if (err.path) newErrors[err.path] = err.message;
      });
      setError((prevError) => ({ ...prevError, validation: newErrors }));
    }
  };
  return (
    <>
      <Logo />
      <Texts />
      <Styled.LoginForm>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validate={handleValidate}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values) => {
            setError((prev) => ({ ...prev, authentication: null }));
            onSubmit(values);
          }}
        >
          <LoginForm>
            {error.authentication && (
              <Styled.FormHelperText>
                <Styled.HelperText>{error.authentication}</Styled.HelperText>
              </Styled.FormHelperText>
            )}
            <Input
              name="username"
              type="text"
              placeholder=""
              labelKey="Username"
              error={error.validation?.username}
              authenticationError={!!error.authentication}
            />
            <Input
              name="password"
              type="password"
              placeholder=""
              labelKey="Password"
              error={error.validation?.password}
              authenticationError={!!error.authentication}
            />

            <Button label="LOGIN" type="submit" />
          </LoginForm>
        </Formik>
      </Styled.LoginForm>
    </>
  );
};

export default Form;
