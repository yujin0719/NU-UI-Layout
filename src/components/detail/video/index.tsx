import React from 'react';

import cn from 'classnames';

interface VideoProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onChangeWideMode: () => void;
}

export default function Video(props: VideoProps): React.ReactElement {
  // className represents ComponentName as a kebab-case
  return (
    <div className={cn('video', props.className)}>
      <span>VIDEO</span>
      <button onClick={props.onChangeWideMode}>wide</button>
    </div>
  );
}
