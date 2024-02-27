import React from "react";
import styled from "@emotion/styled";

interface SideNavProps {
  id?: string
  className?: string
  children?: React.ReactNode
}

export default function SideNav(props: SideNavProps): React.ReactElement {
  return (
    <StyledSideNav className={['side-nav', props.className].join(' ')}>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
    </StyledSideNav>
  );
}

const StyledSideNav = styled.nav`
  &.side-nav {
    width: 100%;
    height: 100%;
    background-color: seagreen;
    font-size: 24px;
    text-align: center;
  }
`;
