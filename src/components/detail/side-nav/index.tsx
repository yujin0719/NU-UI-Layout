import React from 'react';

import cn from 'classnames';

interface SideNavProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function SideNav(props: SideNavProps): React.ReactElement {
  return (
    <nav className={cn('side-nav', props.className)}>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
      <div>OTHER VIDEO</div>
    </nav>
  );
}
