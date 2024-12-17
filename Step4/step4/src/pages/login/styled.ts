import styled from 'styled-components';

export const Login = styled.div`
  min-width: 40%;
  background-color: var(--main-color);
  box-shadow:
    0 1px 3px 0 var(--third-shadow),
    0 1px 1px 0 var(--second-shadow),
    0 2px 1px -1px var(--first-shadow);
  border-radius: 0.25rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
