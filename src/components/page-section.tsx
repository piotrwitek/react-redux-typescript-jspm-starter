import * as React from 'react';
import classNames from 'classnames';

const inlineStyles = {
  minHeight: { minHeight: '200px' }
};

export function PageSection({className = '', children = undefined}) {

  const parentClass = classNames(
    className,
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
