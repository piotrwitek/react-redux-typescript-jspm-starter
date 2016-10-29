import * as React from 'react';
import classNames from 'classnames';

// const inlineStyles = {};

export function PageHero({className = '', children = undefined,
  title = '', subtitle = ''}) {

  const parentClass = classNames(
    className.toString(),
    'u-letter-box--super u-centered'
  );

  return (
    <section className={parentClass}>
      <h1 className="c-heading u-window-box--none">
        {title}
      </h1>
      <h3 className="c-heading u-window-box--none">
        {subtitle}
      </h3>
      <div>
        {children}
      </div>
    </section>
  );
}
