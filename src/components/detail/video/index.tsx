import React from 'react';

import cn from 'classnames';

import { VideoMode } from '../../../hooks/useVideoMode';
interface VideoProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  videoMode: VideoMode;
  onChangeWideMode: (mode: VideoMode) => void;
}

export default function Video(props: VideoProps): React.ReactElement {
  return (
    <div className={cn('video', props.className)}>
      <span>VIDEO</span>
      <button onClick={() => props.onChangeWideMode('normal')}>
        {'일반모드로 변경'}
      </button>
      <button onClick={() => props.onChangeWideMode('wide')}>
        {'넓게보기로 변경'}
      </button>
      <button onClick={() => props.onChangeWideMode('theater')}>
        {'영화관모드로 변경'}
      </button>
    </div>
  );
}
