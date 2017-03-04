import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

// const inlineStyles = {};

export function LayoutTopNav({className = '', children = undefined}) {

  const mainClass = classNames(
    className.toString(),
    'c-nav c-nav--inline',
  );

  return (
    <nav className={mainClass}>
      {children}
    </nav>
  );
}

export function LayoutTopNavLink({className = '', children = undefined,
  href = '/', isRight = false, isPrimary = false}) {

  const mainClass = classNames(className, 'c-nav__item', {
    'c-nav__item--info': isPrimary,
    'c-nav__item--right': isRight,
  });
  const activeClass = classNames(
    'c-nav__item--active',
  );

  return (
    <Link to={href} className={mainClass} activeClassName={activeClass}>
      {children}
    </Link>
  );
}
