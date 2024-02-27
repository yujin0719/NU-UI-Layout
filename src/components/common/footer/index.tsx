import React from "react";
import styled from "@emotion/styled";

interface FooterProps {
  id?: string
  className?: string
  children?: React.ReactNode
}

export default function Footer(props: FooterProps): React.ReactElement {
  return <StyledFooter className={['footer', props.className].join(' ')}>Footer</StyledFooter>;
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
