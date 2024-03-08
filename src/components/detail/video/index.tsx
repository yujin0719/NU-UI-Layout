import React from 'react';

import cn from 'classnames';

interface VideoProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  isWideMode: boolean;
  onChangeWideMode: () => void;
}

export default function Video(props: VideoProps): React.ReactElement {
  // className represents ComponentName as a kebab-case
  return (
    <div className={cn('video', props.className)}>
      <span>VIDEO</span>
      <button onClick={props.onChangeWideMode}>
        {props.isWideMode ? '일반모드로 변경' : '영화관모드로 변경'}
      </button>
    </div>
  );
}
