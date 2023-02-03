import styled from 'styled-components';
import { HTMLAttributes } from 'react';

/* eslint-disable-next-line */
export type SharedUiProps = {} & HTMLAttributes<HTMLDivElement>;

const StyledSharedUi = styled.div`
  color: pink;
`;

export function SharedUi(props: SharedUiProps) {
  return (
    <StyledSharedUi>
      <h1>Welcome to SharedUi! Amazing right?</h1>
    </StyledSharedUi>
  );
}

export default SharedUi;
