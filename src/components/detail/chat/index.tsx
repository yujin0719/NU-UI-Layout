import React from 'react';

import cn from 'classnames';

interface ChatProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Chat(props: ChatProps): React.ReactElement {
  return (
    <section className={cn('chat', props.className)}>
      <div>CHAT</div>
      <div>CHAT</div>
      <div>CHAT</div>
      <div>CHAT</div>
      <div>CHAT</div>
      <div>CHAT</div>
    </section>
  );
}
