import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

// const inlineStyles = {};

export function LayoutTopNav({className = '', children = undefined}) {

  const parentClass = classNames(
    className,
    'c-nav c-nav--inline c-nav--high'
  );

  return (
    <nav className={parentClass}>
      {children}
    </nav>
  );
}

export function LayoutTopNavLink({className = '', children = undefined,
  href = '/', isRight = false, isPrimary = false}) {

  const parentClass = classNames(className, 'c-nav__item', {
    'c-nav__item--primary': isPrimary,
    'c-nav__item--right': isRight
  });
  const parentActiveClass = classNames(
    'c-nav__item--active'
  );

  return (
    <Link to={href} className={parentClass} activeClassName={parentActiveClass}>
      {children}
    </Link>
  );
}
