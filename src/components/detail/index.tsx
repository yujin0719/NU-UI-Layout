import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface DetailProp {
  video: ReactNode;
  bottomPanel: ReactNode;
  sideNav: ReactNode;
  isMovieMode?: boolean;
}

export default function Detail({
  video,
  bottomPanel,
  sideNav,
  isMovieMode = false,
}: DetailProp): React.ReactElement {
  return (
    <>
      <StyledVideoContainer
        className="video-container"
        isMovieMode={isMovieMode}
      >
        <section className={"video"}>{video}</section>
        <section className={"bottom-panel"}>{bottomPanel}</section>
      </StyledVideoContainer>
      <StyledAsideSection className={"aside-container"} isMovieMode={isMovieMode}>
        <section className={"side-nav"}>{sideNav}</section>
      </StyledAsideSection>
    </>
  );
}

interface StyledVideoContainerProps {
  isMovieMode: boolean;
}

const StyledVideoContainer = styled.article<StyledVideoContainerProps>`
  width: calc(100% - 400px);

  .video {
    height: 480px;
    // 영화관 모드일때는 StyledVideoContainer의 부모 width를 적용
    width: ${(props) => (props.isMovieMode && "1200px")};
  }

  .bottom-panel {
  }
`;

const StyledAsideSection = styled.aside<StyledVideoContainerProps>`
  position: sticky;
  // header + video height
  top: ${(props) => (props.isMovieMode ? "560px" : "0px")};
  right: 0px;
  overflow: auto;

  width: 400px;
  height: 100%;
  max-height: 100vh;

  .side-nav {
    overflow: auto;
  }
`;
