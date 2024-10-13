import styled from "styled-components";

export const Inputs = styled.div`
  width: 100%;
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
`;
export const TextField = styled.div`
  position: relative;
  width: 100%;
`;
export const InputFields = styled.input<{ $error?: boolean }>`
  width: 100%;
  height: 3.5rem;
  padding: 0 0.75rem;
  border-radius: 4px;
  border: 1px solid #0000003b;
  &:focus {
    border-color: rgba(86, 160, 238, 0.5);
    box-shadow: 0 0 5px rgba(12, 122, 239, 0.5);
    outline: none;
  }
  &:focus ~ .label,
  &:not(:placeholder-shown) ~ .label {
    top: -0.625rem;
    transform: scale(0.75);
    left: -0.06rem;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px var(--main-color) inset !important;
    box-shadow: 0 0 0 1000px var(--main-color) inset !important;
    -webkit-text-fill-color: #000;
  }

  ${({ $error }) =>
    $error &&
    `
  border-color: var(--error-color);
  
  `}
`;
export const FormHelperText = styled.div`
  display: none;
  width: 100%;
  height: 1.43rem;
  padding: 0.18rem 0.875rem 0 0.875rem;
`;
export const HelperText = styled.span`
  color: #d32f2f;
  font-family: var(--main-font);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.24rem;
  text-align: left;
`;
