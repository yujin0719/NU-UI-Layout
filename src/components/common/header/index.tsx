import React from 'react';

import cn from 'classnames';

import styles from './style.module.scss';
import styled from '@emotion/styled';

interface HeaderProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Header(props: HeaderProps): React.ReactElement {
  return (
    <StyledHeader className={cn('header', props.className)}>
      HEADER
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  &.header {
    width: 100%;
    height: 100%;
    background-color: pink;
    font-size: 30px;
    text-align: center;
  }
`;
