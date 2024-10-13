import styled from "styled-components";

export const Labels = styled.label<{$error?:boolean}>`
color:var(text-color);
color: ${({ $error }) => ($error ? "var(--error-color)" : "var(--text-color)")};
line-height: 1.5rem;
  text-align: left;
  position: absolute;
  pointer-events: none;
  left: 0.75rem;
  top: 0.93rem;
  font-weight: 400;
  font-size: 1rem;
  font-family: var(--main-font);
  transition: all 0.3s ease;
  background-color: var(--main-color);
`;
