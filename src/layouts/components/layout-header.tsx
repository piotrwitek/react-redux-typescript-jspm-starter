import * as React from 'react';
import classNames from 'classnames';

// const inlineStyles = {};

export function LayoutHeader({className = '', children = undefined}) {

  const parentClass = classNames(
    className
  );

  return (
    <header className={parentClass}>
      {children}
    </header>
  );
}
