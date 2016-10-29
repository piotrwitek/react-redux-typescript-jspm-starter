import * as React from 'react';
import classNames from 'classnames';

// const inlineStyles = {};

export function PageHeader({className = '', children = undefined}) {

  const mainClass = classNames(
    className.toString(),
    'c-heading',
    'u-centered',
  );

  return (
    <header className={mainClass}>
      {children}
    </header>
  );
}
