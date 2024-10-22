import React, { useState } from "react";
import Form from "./components/Form";
import { useMutation } from "@tanstack/react-query";
import { authLoginPost } from "@api/auth.login";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [authError, setAuthError] = useState(false);
  const navigate = useNavigate();

  
  const { mutate: login } = useMutation({
    mutationFn: authLoginPost,
    onSuccess: (res) => {
      setAuthError(false);
      console.log("Access Token:", res.access_token);
      console.log("Refresh Token:", res.refresh_token);
      navigate("/overview");
    },
    onError: (err: any) => {
      if (err.response && err.response.status === 401) {
        setAuthError(true);
        console.error("Unauthorized!");
        
      } else {
        console.error("Error:", err.message);
      }
    },
    onSettled(data, error) {
      if (data) {
        console.log(data);
      } else {
        console.error(error);
      }
    },
  });
  return (
    <Styled.Login>
      <Form login={login} authError={authError} />
    </Styled.Login>
  );
};

export default LoginPage;
