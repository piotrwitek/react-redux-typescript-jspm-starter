import * as React from 'react';
import classNames from 'classnames';

const inlineStyles = {
  topBorder: {
    borderTop: '1px solid #ddd',
  },
};

export function LayoutFooter({className = '', children = undefined}) {

  const mainClass = classNames(
    className.toString(),
    'u-centered',
    'u-letter-box--medium',
  );

  return (
    <footer className={mainClass} style={inlineStyles.topBorder}>
      {children}
    </footer>
  );
}
