import React from 'react';

import cn from 'classnames';

import Header from '../../header';
import Footer from '../../footer';

import styles from './style.module.scss';

interface MobileLayoutProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function MobileLayout(
  props: MobileLayoutProps
): React.ReactElement {
  return (
    <div className={cn(styles.container, props.className)}>
      <section className={styles['header-wrapper']}>
        <Header />
      </section>
      <section className={styles['main-wrapper']}>{props.children}</section>
      <section className={styles['footer-wrapper']}>
        <Footer />
      </section>
    </div>
  );
}
