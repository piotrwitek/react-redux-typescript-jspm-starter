import * as React from 'react';
import classNames from 'classnames';

// const inlineStyles = {};

export function PageHeader({className = '', children = undefined}) {

  const parentClass = classNames(
    className,
    'c-heading c-heading--medium',
    'u-centered'
  );

  return (
    <header className={parentClass}>{children}</header>
  );
}
