import React from "react";
import Button from "@component/Button";
import Logo from "../Logo";
import Texts from "../Texts";
import Input from "@component/Input";
import * as Styled from "./styled";
import { Formik, Form as LoginForm } from "formik";
import { loginSchema } from "./services/schema";

interface FormProp {
  login: (values: { username: string; password: string }) => void;
  authError: boolean;
}

const Form: React.FC<FormProp> = ({ login, authError }) => {
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
          validationSchema={loginSchema}
          onSubmit={(values) => login(values)}
        >
          {({ errors, touched }) => (
            <LoginForm>
              <Input
                name="username"
                type="text"
                placeholder=""
                errors={errors}
                touched={touched}
                labelKey="Username"
                authError={authError}
              />
              <Input
                name="password"
                type="password"
                placeholder=""
                errors={errors}
                touched={touched}
                labelKey="Password"
                authError={authError}
              />

              <Button label="LOGIN" type="submit" />
            </LoginForm>
          )}
        </Formik>
      </Styled.LoginForm>
    </>
  );
};

export default Form;
