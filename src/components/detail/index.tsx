import React, { ReactNode } from 'react';

import cn from 'classnames';

interface DetailProp {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  video: ReactNode;
  bottomPanel: ReactNode;
  sideNav: ReactNode;
  isWideMode: boolean;
}

const defaultProps: DetailProp = {
  video: <></>,
  bottomPanel: <></>,
  sideNav: <></>,
  isWideMode: false,
};

export default function Detail(
  props: DetailProp = defaultProps
): React.ReactElement {
  return (
    <main className={cn('detail', props.className)}>
      <div className={'main'}>
        <section
          className={cn('video-wrapper', props.isWideMode ? 'wide-mode' : '')}
        >
          {props.video}
        </section>
        <section className={'bottom-panel-wrapper'}>
          {props.bottomPanel}
        </section>
      </div>
      <div className={cn('aside ', props.isWideMode ? 'wide-mode' : '')}>
        <aside className={cn('side-nav-wrapper')}>
          <section className={'content'}>{props.sideNav}</section>
        </aside>
      </div>
    </main>
  );
}
