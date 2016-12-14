import * as React from 'react';
import classNames from 'classnames';

const inlineStyles = {
  background: {
    backgroundColor: '#f7f7f7',
  },
};

export function LayoutMain({className = '', children = undefined}) {

  const mainClass = classNames(
    className.toString(),
  );
  const innerClass = classNames(
    'o-container o-container--medium',
  );

  return (
    <main className={mainClass} style={inlineStyles.background}>
      <div className={innerClass}>
        {children}
      </div>
    </main>
  );
}
