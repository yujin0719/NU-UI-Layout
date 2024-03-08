import React from 'react';

import cn from 'classnames';

import styles from './style.module.scss';
interface FooterProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Footer(props: FooterProps): React.ReactElement {
  return <footer className={cn(styles.footer, props.className)}>Footer</footer>;
}
