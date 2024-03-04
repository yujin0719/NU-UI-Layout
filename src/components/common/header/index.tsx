import React from 'react';

import cn from 'classnames';

import styles from './style.module.scss';

interface HeaderProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Header(props: HeaderProps): React.ReactElement {
  return <header className={cn(styles.header, props.className)}>HEADER</header>;
}
