import React, { useState } from "react";
import Form from "./components/Form";
import { useMutation } from "@tanstack/react-query";
import { authLoginPost } from "@api/auth/login";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const [error, setError] = useState<{
    validation?: Record<string, string>;
    authentication?: string;
  }>({});

  const navigate = useNavigate();

  const { mutate: login } = useMutation({
    mutationFn: authLoginPost,
    onSuccess: () => {
      setError({});
      navigate("/overview");
    },
    onError: (err: any) => {
      if (err.status === 401) {
        setError({ authentication: err.data?.message });
      }
    },
  });

  return (
    <Styled.Login>
      <Form onSubmit={login} error={error} setError={setError} />
    </Styled.Login>
  );
};
