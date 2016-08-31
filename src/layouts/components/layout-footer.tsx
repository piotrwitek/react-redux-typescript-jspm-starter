import * as React from 'react';
import classNames from 'classnames';

const inlineStyles = {
  topBorder: {
    borderTop: '1px solid #ddd'
  }
};

export function LayoutFooter({className = '', children = undefined}) {

  const parentClass = classNames(
    className,
    'u-letter-box--medium u-centered'
  );

  return (
    <footer className={parentClass} style={inlineStyles.topBorder}>
      {children}
    </footer>
  );
}
