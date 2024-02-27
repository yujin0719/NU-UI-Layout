import React from "react";
import styled from "@emotion/styled";

interface VideoProps {
  id?: string
  className?: string
  children?: React.ReactNode
}

export default function Video(props: VideoProps): React.ReactElement {
  const onWideModeClicked = () => {
    console.log('wide mode button clicked.')
  }

  // className represents ComponentName as a kebab-case
  return <StyledVideo className={['video', props.className].join(' ')}>
    <span>VIDEO</span>
    <button onClick={onWideModeClicked}>wide</button>
  </StyledVideo>;
}

const StyledVideo = styled.div`
  &.video {
    width: 100%;
    height: 100%;
  
    background-color: skyblue;
    
    font-size: 20px;
    text-align: center;
  }
`;
