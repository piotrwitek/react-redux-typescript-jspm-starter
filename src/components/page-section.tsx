import * as React from 'react';
import classNames from 'classnames';

// const inlineStyles = {};

export function PageSection({className = '', children = undefined}) {

  const parentClass = classNames(
    className.toString(),
    'o-grid'
  );
  const cellClass = classNames(
    'o-grid__cell'
  );

  return (
    <section className={parentClass}>
      <div className={cellClass}>{children}</div>
    </section>
  );
}
