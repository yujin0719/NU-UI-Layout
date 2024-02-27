import React, { useState, ReactNode } from "react";
import styled from "@emotion/styled";

interface DetailProp {
  id?: string
  className?: string
  children?: React.ReactNode
  video: ReactNode;
  bottomPanel: ReactNode;
  sideNav: ReactNode;
}

const defaultProps: DetailProp = {
  video: <></>,
  bottomPanel: <></>,
  sideNav: <></>,
}

export default function Detail(props: DetailProp = defaultProps): React.ReactElement {
  const [isMovieMode, setIsMovieMode] = useState<boolean>(false)

  return (
    <StyledDetail className={['detail', props.className].join(' ')} isMovieMode={isMovieMode}>
      <StyledVideoContainer className="video-container">
        <section className={"video-area"}>{props.video}</section>
        <section className={"bottom-panel"}>{props.bottomPanel}</section>
      </StyledVideoContainer>
      <div className={"aaa"}>
        <aside className={"aside-container"}>
          <section className={"side-nav-area"}>{props.sideNav}</section>
        </aside>
      </div>
    </StyledDetail>
  );
}

interface StyledVideoContainerProps {
  isMovieMode: boolean;
}

const StyledDetail = styled.div<StyledVideoContainerProps>`
  &.detail {
    display: flex;
    flex-direction: row;

    .video-container {
      width: calc(100% - 400px);

      .video-area {
        height: 480px;
        // 영화관 모드일때는 StyledVideoContainer의 부모 width를 적용
        width: ${(props) => (props.isMovieMode && "1200px")};
      }

      .bottom-panel {
      }
    }
    .aaa {
      
      width: calc(100% - 400px);

      .aside-container {
  
        position: sticky;
        // header + video height
        top: ${(props) => (props.isMovieMode ? "560px" : "0px")};
        
        overflow: auto;
      
        width: 400px;
        height: 100%;
        max-height: 100vh;
      
        display: inline-block;
  
        .side-nav-area {
          overflow: auto;
        }
      }
    }
  }
`

const StyledVideoContainer = styled.article``;
