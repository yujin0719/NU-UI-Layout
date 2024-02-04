import React from "react";
import styled from "@emotion/styled";

export default function Footer(): React.ReactElement {
  return <StyledFooter>Footer</StyledFooter>;
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 100%;
  background-color: pink;
  font-size: 30px;
  text-align: center;
`;
