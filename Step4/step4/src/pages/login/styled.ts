import styled from "styled-components";

export const Login = styled.div`
  min-width: 40%;
  background-color: var(--main-color);
  box-shadow:
    0px 1px 3px 0px #0000001f,
    0px 1px 1px 0px #00000024,
    0px 2px 1px -1px #00000033;
  flex-direction: column;
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
