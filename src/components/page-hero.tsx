import * as React from 'react';
import classNames from 'classnames';

// const inlineStyles = {};

export function PageHero({className = '', children = undefined,
  title = '', subtitle = ''}) {

  const mainClass = classNames(
    className.toString(),
    'u-centered',
    'u-letter-box--super',
  );

  return (
    <section className={mainClass}>
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
