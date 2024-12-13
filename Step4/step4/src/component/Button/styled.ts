import styled from "styled-components";

export const LoginButton = styled.button`
  width: 100%;
  padding: 0.5rem 1.375rem;
  border-radius:0.25rem;
  background-color: var(--button-color);
  color: var(--main-color);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  box-shadow:
    0 3px 1px -2px var(--first-shadow),
    0 2px 2px 0px var(--second-shadow),
    0 1px 5px 0px var(--third-shadow);

  font-family: var(--main-font);
  font-size: 0.94rem;
  font-weight: 500;
  line-height: 1.625rem;
  margin-top: 1rem;
`;
