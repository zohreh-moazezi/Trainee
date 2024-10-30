import React, { useState } from "react";
import Form from "./components/Form";
import { useMutation } from "@tanstack/react-query";
import { authLoginPost } from "@api/auth/login";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const [error, setError] = useState<{
    validation?: Record<string, string>;
    authentication?: string | null;
  }>({});
  const navigate = useNavigate();

  const { mutate: login } = useMutation({
    mutationFn: authLoginPost,
    onSuccess: (res) => {
      setError({});
      console.log("Access Token:", res.access_token);
      console.log("Refresh Token:", res.refresh_token);
      navigate("/overview");
    },
    onError: (err: any) => {
      if (err.response && err.response.status === 401) {
        setError({ authentication: err.message });
      }
    },
  });

  return (
    <Styled.Login>
      <Form onSubmit={login} error={error} setError={setError} />
    </Styled.Login>
  );
};
