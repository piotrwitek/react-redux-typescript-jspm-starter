import * as React from 'react';
import classNames from 'classnames';

// const inlineStyles = {};

export function PageHero({className = '', children = undefined,
  title = '', subtitle = ''}) {

  const parentClass = classNames(
    className,
    'c-hero',
    'u-letter-box--super u-centered'
  );

  return (
    <section className={parentClass}>
      <header className="c-heading c-heading--xlarge u-window-box--none">
        {title}
      </header>
      <header className="c-heading c-heading--small u-window-box--none">
        {subtitle}
      </header>
      <div>
        {children}
      </div>
    </section>
  );
}
