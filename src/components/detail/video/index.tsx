import React from "react";
import styled from "@emotion/styled";

export default function Video(): React.ReactElement {
  return <StyledVideo>VIDEO</StyledVideo>;
}

const StyledVideo = styled.div`
  width: 100%;
  height: 100%;
  background-color: skyblue;
  font-size: 20px;
  text-align: center;
`;
