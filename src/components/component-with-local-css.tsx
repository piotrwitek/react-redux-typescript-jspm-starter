import * as React from 'react';
import classNames from 'classnames';
import csjs from 'csjs';
import insertCss from 'insert-css';

const styles = csjs`
  .outerStyle {
    border-bottom: 1px solid #e7e7e7;
    background-color: #f7f7f7;
  }
  .innerStyle {
    color: 'green';
  }
`;
insertCss(csjs.getCss(styles));

export function PageHeader({className = '', children = undefined}) {

  const componentClass = classNames(
    className,
    styles.outerStyle.className
  );

  return (
    <div className={componentClass}>
      <h3 className={styles.innerStyle}>{children}</h3>
    </div>
  );
}
