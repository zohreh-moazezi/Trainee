import styled from "styled-components";

export const TextField = styled.div`
  position: relative;
  padding: 1rem 0 0 0;
  
`;

export const InputFields = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 1.15rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid var(--border-color);
  &:focus {
    box-shadow: 0 0 0.31rem rgba(12, 122, 239, 0.5);
    outline: none;
  }
  &:focus ~ .label,
  &:not(:placeholder-shown) ~ .label {
    top: 0.4rem;
    transform: scale(0.75);
    left: -0.06rem;
  }

  ${({ hasError }) =>
    hasError &&
    `
  border-color: var(--error-color);
  
  `}
`;

export const HelperText = styled.span`
  color: var(--error-text);
  font-family: var(--main-font);
  font-size: 0.76rem;
`;
