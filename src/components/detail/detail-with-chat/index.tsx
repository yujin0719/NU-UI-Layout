import React, { ReactNode } from 'react';

import cn from 'classnames';
import { DEFAULT_VIDEO_MODE, VideoMode } from '../../../hooks/useVideoMode';
import styled from '@emotion/styled';

interface DetailWithChatProp {
  id?: string;
  className?: string;
  children?: React.ReactNode;

  video: ReactNode;
  bottomPanel: ReactNode;
  sideNav: ReactNode;
  chat: ReactNode;

  videoMode: VideoMode;
}

const defaultProps: DetailWithChatProp = {
  video: <></>,
  bottomPanel: <></>,
  sideNav: <></>,
  chat: <></>,
  videoMode: DEFAULT_VIDEO_MODE,
};

export default function DetailWithChat(
  props: DetailWithChatProp = defaultProps
): React.ReactElement {
  return (
    <StyledDetail className={cn('detail', props.className)}>
      <div className={cn('top', props.videoMode)}>
        <section className={cn('video-wrapper', props.videoMode)}>
          {props.video}
        </section>
        <section className={cn('chat-wrapper', props.videoMode)}>
          {props.chat}
        </section>
      </div>
      <div className={cn('bottom ', props.videoMode)}>
        <section className={'bottom-panel-wrapper'}>
          {props.bottomPanel}
        </section>
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
    flex-direction: column;
    width: 100%;

    .top {
      display: flex;
      height: 480px;

      &.theater {
        // 동영상 1200 + 채팅 400을 최대로 구성 (화면이 작아지면 동일한 비율로 줄어들게 하기 위해 설정)
        width: 100vw;
        max-width: 1600px;
        // layout에서 main 영역을 1200px로 설정해서 화면 가운데 1200px로 자리잡아 왼쪽 마진이 발생
        margin-left: calc((-100vw + Min(1200px, 100vw)) / 2);
      }

      &.wide-theater {
        width: 100vw;
        margin-left: calc((-100vw + Min(1200px, 100vw)) / 2);
      }

      .video-wrapper {
        flex: 3;

        .video {
          width: 100%;
          height: 100%;
          background-color: skyblue;
          font-size: 20px;
          text-align: center;
        }
      }
      .chat-wrapper {
        flex: 1;
        max-width: 400px;

        .chat {
          width: 100%;
          height: 100%;
          background-color: violet;
          font-size: 20px;
          text-align: center;
        }
      }
    }

    .bottom {
      display: flex;
      position: relative;

      .bottom-panel-wrapper {
        flex: 3;
        max-width: 1200px;

        .bottom-panel {
          width: 100%;
          height: 100%;
          background-color: yellow;
          font-size: 20px;
          text-align: center;
        }
      }

      .side-nav-wrapper {
        flex: 1;
        height: 100%;
        max-height: 100vh;
        max-width: 400px;
        display: inline-block;
        overflow: auto;
        position: sticky;
        top: 0px;

        .side-nav {
          top: 0px;
          width: 100%;
          height: 100%;
          background-color: seagreen;
          font-size: 24px;
          text-align: center;
        }
      }
    }
  }
`;
