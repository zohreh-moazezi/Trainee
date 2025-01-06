import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1.5rem;
`;

export const TableHeaders = styled.th`
  padding: 1rem 0.5rem 0.25rem 0.5rem;
  font-family: var(--main-font);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--first-text);
  border-bottom: 1px solid var(--third-shadow);
`;
export const Tablecell = styled.td`
  width: 43.5rem;
  height: 2.25rem;
  padding: 0.5rem;
  border-left: 1px solid var(--third-shadow);
  border-bottom: 1px solid var(--third-shadow);
  font-family: var(--main-font);
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--first-text);
`;
export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: var(--main-color);
  }
  &:nth-child(even) {
    background-color: var(--background-color);
  }
`;
