import * as React from 'react';
import classNames from 'classnames';

// const inlineStyles = {};

export function LayoutHeader({className = '', children = undefined}) {

  const mainClass = classNames(
    className.toString(),
  );

  return (
    <header className={mainClass}>
      {children}
    </header>
  );
}
