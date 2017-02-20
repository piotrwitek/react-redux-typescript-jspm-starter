import * as React from 'react';
import { PageHeader } from '../../components/page-header';
import { PageSection } from '../../components/page-section';

import styles from './styles';

export function CssModulesContainer() {
  return (
    <article>
      <PageHeader>Typed CSS-Modules</PageHeader>
      <PageSection>
        <p style={{ textAlign: 'justify' }}>
          Local CSS styles (using <a href="https://github.com/rtsao/csjs#faq">csjs</a>),
          with capability to leverage TypeScript IntelliSense features in Editor/IDE,
          for autocompletion and easy refactoring of available class-names.
        </p>
      </PageSection>
      <br />
      <PageSection className={styles.uCentered}>
        <div className={styles.uHideOnTablet}>
          <div className={[styles.uBordered, styles.eElevate].join(' ')}>
            <p className={styles.cText__glowing}>
              <br />
              Hover me!
              <br />
              <small><i>(narrow your window)</i></small>
            </p>
          </div>
        </div>
        <div className={styles.uShowOnTablet}>
          <div className={[styles.uBordered, styles.eElevate].join(' ')}>
            <p className={styles.cText__glowing}>
              SUPRISE!!!
            </p>
          </div>
        </div>
      </PageSection>
      <br />
      <p className={styles.uCentered}>
        Source: <a
          href="https://github.com/piotrwitek/react-redux-typescript-starter-kit/tree/master/src/containers/css-modules-container">
          Link to GitHub
        </a>
      </p>
      <br />
    </article>
  );
};
