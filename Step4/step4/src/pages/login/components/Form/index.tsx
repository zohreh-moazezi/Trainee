import React from "react";
import Button from "@component/Button";
import Logo from "../Logo";
import Texts from "../Texts";
import Input from "@component/Input";
import * as Styled from "./styled";
import { Formik, Form } from "formik";
import { loginSchema } from "./services/schema";

const LoginForm = () => {
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
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <Input
                name="username"
                type="text"
                placeholder=""
                errors={errors}
                touched={touched}
                labelKey="Username"
              />
              <Input
                name="password"
                type="password"
                placeholder=""
                errors={errors}
                touched={touched}
                labelKey="Password"
              />

              <Button label="LOGIN" />
            </Form>
          )}
        </Formik>
      </Styled.LoginForm>
    </>
  );
};

export default LoginForm;
