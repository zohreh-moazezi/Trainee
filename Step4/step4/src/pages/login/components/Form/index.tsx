import React from 'react';
import Button from '@component/Button';
import Logo from '../Logo';
import Texts from '../Texts';
import Input from '@component/Input';
import * as Styled from './styled';
import { Formik, Field, Form as LoginForm } from 'formik';
import { loginSchema } from './services/schema';

interface FormProp {
  onSubmit: (values: { username: string; password: string }) => void;
  error: {
    validation?: Record<string, string>;
    authentication?: string;
  };
  setError: React.Dispatch<
    React.SetStateAction<{
      validation?: Record<string, string>;
      authentication?: string;
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
            username: '',
            password: '',
          }}
          validate={handleValidate}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={handleValidate}
        >
          {({ handleSubmit }) => (
            <LoginForm onSubmit={handleSubmit}>
              <Field
                name="username"
                type="text"
                as={Input}
                id="username"
                placeholder=""
                error={error.validation?.username}
                hasError={
                  !!error.validation?.username || !!error.authentication
                }
                isAuthError={!!error.authentication}
              />

              <Field
                name="password"
                type="password"
                as={Input}
                id="password"
                placeholder=""
                error={error.validation?.password}
                hasError={
                  !!error.validation?.password || !!error.authentication
                }
                isAuthError={!!error.authentication}
              />

              <Button type="submit">login</Button>
            </LoginForm>
          )}
        </Formik>
      </Styled.LoginForm>
    </>
  );
};

export default Form;
