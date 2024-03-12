import React, { ReactNode } from 'react';

import cn from 'classnames';
import { DEFAULT_VIDEO_MODE, VideoMode } from '../../hooks/useVideoMode';

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
  return (
    <main className={cn('detail', props.className)}>
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
    </main>
  );
}
