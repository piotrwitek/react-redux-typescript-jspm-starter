import * as React from 'react';
import { PageHeader } from '../../components/page-header';
import { PageSection } from '../../components/page-section';
import styles from './container-styles';

export function CssModulesContainer() {
  return (
    <article>
      <PageHeader>Typed CSS-Modules</PageHeader>
      <PageSection>
        <p style={{ textAlign: 'justify' }}>
          Locally scoped CSS styles, encapsulated as ES6 Modules that can be imported in UI components,
          with capability to type-check CSS class-names in your components using interfaces
          and leverage TypeScript IntelliSense features in Editor/IDE
        </p>
        <ul>
          <li>
            Define available CSS classes as interfaces in CSS-Modules to get className property
            auto-completion, type-checking and easy refactoring in your entire codebase
          </li>
          <li>
            Auto-generate documentation for CSS styles leveraging JSDoc support in defined interfaces
          </li>
          <li>
            Full CSS support - including pseudo classes, media queries & more...
            (using <a href="https://github.com/rtsao/csjs#faq">csjs</a>)
          </li>
        </ul>
        <p>

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
        Source code: <a
          href="https://github.com/piotrwitek/react-redux-typescript-starter-kit/tree/master/src/containers/css-modules-container">
          Link to GitHub
        </a>
      </p>
      <br />
    </article>
  );
};
