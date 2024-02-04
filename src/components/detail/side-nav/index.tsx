import React from "react";
import styled from "@emotion/styled";

export default function SideNav(): React.ReactElement {
  return (
    <StyledSideNav>
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
  width: 100%;
  height: 100%;
  background-color: seagreen;
  font-size: 24px;
  text-align: center;
`;
