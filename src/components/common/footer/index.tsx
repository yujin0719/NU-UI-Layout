import React from 'react';

import cn from 'classnames';

import styled from '@emotion/styled';
interface FooterProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Footer(props: FooterProps): React.ReactElement {
  return (
    <StyledFooter className={cn('footer', props.className)}>
      Footer
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  &.footer {
    width: 100%;
    height: 100%;
    background-color: pink;
    font-size: 30px;
    text-align: center;
  }
`;
