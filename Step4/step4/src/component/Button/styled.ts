import styled from "styled-components";

export const LoginButton = styled.button`
  width: 100%;
  height: 2.625rem;
  padding: 0.5rem 1.375rem;
  border-radius: 4px;
  background-color: #2196f3;
  color: var(--main-color);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  box-shadow:
    0px 3px 1px -2px #00000033,
    0px 2px 2px 0px #00000024,
    0px 1px 5px 0px #0000001f;

  font-family: var(--main-font);
  font-size: 0.93rem;
  font-weight: 500;
  line-height: 1.625rem;
  text-align: left;
  margin-top: 1rem;
`;
