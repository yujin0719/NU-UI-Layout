import React, { ReactNode } from 'react';

import styled from '@emotion/styled';
import cn from 'classnames';
import { Link } from 'react-router-dom';

interface PagesProps {
  children?: ReactNode;
  className?: string;
}

export default function MainPage(props: PagesProps): React.ReactElement {
  return (
    <StyledPages className={cn(props.className)}>
      <Link to='/detail' className={cn('button')}>
        일반 코스로
      </Link>
      <Link to='/live-detail' className={cn('button')}>
        라이브 코스로
      </Link>
    </StyledPages>
  );
}
const StyledPages = styled.div`
  .button {
    width: 100px;
    height: 40px;
    padding: 6px;
    margin: 3px;
    text-align: center;
    background-color: orange;
    text-decoration: none;
    color: white;
  }
`;
