import './main-layout.css!';
import React from 'react';
import { LayoutTopNav, LayoutTopNavLink } from './components/layout-top-nav';
import { LayoutHeader } from './components/layout-header';
import { LayoutMain } from './components/layout-main';
import { LayoutFooter } from './components/layout-footer';

export class MainLayout extends React.Component<{}, {}> {
  render() {
    const { children } = this.props;

    return (
      <div className="c-text">
        <LayoutHeader>
          <LayoutTopNav>
            <LayoutTopNavLink href="/" isPrimary> Home </LayoutTopNavLink>
            <LayoutTopNavLink href="/currency-converter"> Currency Converter </LayoutTopNavLink>
            <LayoutTopNavLink href="/css-modules"> CSS Modules </LayoutTopNavLink>
          </LayoutTopNav>
        </LayoutHeader>

        <LayoutMain>
          {children}
        </LayoutMain>

        <LayoutFooter>
          2016 &copy; Piotr Witek<br />
          <a href="https://github.com/piotrwitek/react-redux-typescript-starter-kit">Back to GitHub Repo</a>
        </LayoutFooter>
      </div>
    );
  };
};
