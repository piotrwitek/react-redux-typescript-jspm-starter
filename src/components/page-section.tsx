import * as React from 'react';
import classNames from 'classnames';

// const inlineStyles = {};

export function PageSection({className = '', children = undefined}) {

  const mainClass = classNames(
    className.toString(),
    'o-grid',
  );
  const innerClass = classNames(
    'o-grid__cell',
  );

  return (
    <section className={mainClass}>
      <div className={innerClass}>{children}</div>
    </section>
  );
}
