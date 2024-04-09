import React, { ReactNode } from 'react';

import cn from 'classnames';
import { DEFAULT_VIDEO_MODE, VideoMode } from '../../hooks/useVideoMode';
import styled from '@emotion/styled';

interface DetailProp {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  video: ReactNode;
  bottomPanel: ReactNode;
  sideNav: ReactNode;
  videoMode: VideoMode;
}

const defaultProps: DetailProp = {
  video: <></>,
  bottomPanel: <></>,
  sideNav: <></>,
  videoMode: DEFAULT_VIDEO_MODE,
};

export default function Detail(
  props: DetailProp = defaultProps
): React.ReactElement {
  // const { isMobile } = useMobile();

  return (
    <StyledDetail className={cn('detail', props.className)}>
      <div className={'main'}>
        <section className={cn('video-wrapper', props.videoMode)}>
          {props.video}
        </section>
        <section className={'bottom-panel-wrapper'}>
          {props.bottomPanel}
        </section>
      </div>
      <div className={cn('aside ', props.videoMode)}>
        <aside className={cn('side-nav-wrapper')}>
          <section className={'content'}>{props.sideNav}</section>
        </aside>
      </div>
    </StyledDetail>
  );
}

const StyledDetail = styled.main`
  &.detail {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: calc(100vh - 160px);

    .main {
      width: calc(100% - 400px);
      flex: 3;

      .video-wrapper {
        height: 480px;

        &.theater {
          width: 100vw;
          // layout에서 main 영역을 1200px로 설정해 부모가 화면 중앙에 1200px로 위치하면서 왼쪽에 마진이 발생
          margin-left: calc((-100vw + Min(1200px, 100vw)) / 2);
          text-align: center;
        }

        &.wide {
          width: 100vw;
          max-width: 1200px;
        }

        .video {
          width: 100%;
          height: 100%;
          background-color: skyblue;
          font-size: 20px;
          text-align: center;
        }
      }

      .bottom-panel-wrapper {
        .bottom-panel {
          width: 100%;
          height: 100%;
          background-color: yellow;
          font-size: 20px;
          text-align: center;
        }
      }
    }

    .aside {
      flex: 1;

      &.wide,
      &.theater {
        position: relative;
        top: 480px;
        height: calc(100% - 480px);
      }

      .side-nav-wrapper {
        display: inline-block;
        overflow: auto;
        position: sticky;
        top: 0px;

        width: 100%;
        max-width: 400px;
        height: 100%;
        max-height: 100vh;

        .content {
          overflow: auto;

          .side-nav {
            width: 100%;
            height: 100%;
            background-color: seagreen;
            font-size: 24px;
            text-align: center;
          }
        }
      }
    }
  }
`;
