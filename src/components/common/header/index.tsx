import React from "react";
import styled from "@emotion/styled";

export default function Header(): React.ReactElement {
  return <StyledHeader>HEADER</StyledHeader>;
}

const StyledHeader = styled.header`
  width: 100%;
  height: 100%;
  background-color: pink;
  font-size: 30px;
  text-align: center;
`;
