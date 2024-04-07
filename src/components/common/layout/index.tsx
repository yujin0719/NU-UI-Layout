import React from 'react';

import cn from 'classnames';

import Header from '../header';
import Footer from '../footer';

import styled from '@emotion/styled';

interface LayoutProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps): React.ReactElement {
  return (
    <StyledLayout className={cn('container', props.className)}>
      <section className={cn('header-wrapper')}>
        <Header />
      </section>
      <section className={cn('main-wrapper')}>{props.children}</section>
      <section className={cn('footer-wrapper')}>
        <Footer />
      </section>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  &.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100%;

    background-color: #000;

    .header-wrapper {
      width: 100vw;
      height: 80px;
    }

    .footer-wrapper {
      width: 100vw;
      height: 80px;
    }

    .main-wrapper {
      display: flex;
      width: 1200px;
    }
  }
`;
