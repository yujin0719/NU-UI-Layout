import React from "react";
import styled from "@emotion/styled";

interface BottomPanelProps {
  id?: string
  className?: string
  children?: React.ReactNode
}

export default function BottomPanel(props: BottomPanelProps): React.ReactElement {
  return (
    <StyledBottomPanel className={['bottom-panel', props.className].join(' ')}>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
    </StyledBottomPanel>
  );
}

const StyledBottomPanel = styled.div`
  &.bottom-panel {
    width: 100%;
    height: 100%;
    background-color: yellow;
    font-size: 20px;
    text-align: center;
  }
`;
