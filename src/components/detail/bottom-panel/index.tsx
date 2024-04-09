import React from 'react';

import cn from 'classnames';

interface BottomPanelProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function BottomPanel(
  props: BottomPanelProps
): React.ReactElement {
  return (
    <div className={cn('bottom-panel', props.className)}>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
      <div>VIDEO INFO</div>
    </div>
  );
}
