import styled from "styled-components";

export const CardHeader = styled.div`
  height: 4.75rem;
  padding: 0.5rem 2.5rem;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  height: 3.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const FirstText = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  color: #000000de;
  font-family: var(--main-font);
  line-height: 2rem;
  text-align: left;
`;
export const SecondText = styled.p`
  font-size: 0.875rem;
  color: var(--text-color);
  font-family: var(--main-font);
  font-weight: 400;
  line-height: 1.25rem;
  text-align: left;
`;
