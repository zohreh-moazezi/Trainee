import styled from 'styled-components';

export const Labels = styled.label<{ hasError?: boolean }>`
  color: ${({ hasError }) =>
    hasError ? 'var(--error-color)' : 'var(--second-text)'};
  line-height: 1.5rem;
  position: absolute;
  pointer-events: none;
  left: 0.75rem;
  top: 2rem;
  font-family: var(--main-font);
  transition: all 0.3s ease;
  background-color: var(--main-color);
`;
