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
    <h2 className={mainClass}>
      {children}
    </h2>
  );
}
