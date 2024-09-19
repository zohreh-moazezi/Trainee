import React from "react";
import Form from "./components/Form";
import { useMutation } from "@tanstack/react-query";
import { authLoginPost } from "@api/auth.login";
import * as Styled from "./styled";
const LoginPage = () => {
  const { mutate: login } = useMutation({
    mutationFn: authLoginPost,
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <Styled.Login>
      <Form login={login} />
    </Styled.Login>
  );
};

export default LoginPage;
