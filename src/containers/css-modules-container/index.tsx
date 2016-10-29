import * as React from 'react';
import { PageHeader } from '../../components/page-header';
import { PageSection } from '../../components/page-section';
import { containerStyles } from './container-styles';

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
      <PageSection className={containerStyles.textCentered}>
        <div className={containerStyles.effect__hideOnTablet}>
          <div className={[containerStyles.darkBg, containerStyles.effect__elevate].join(' ')}>
            <p className={containerStyles.glowingText}>
              <br />
              Hover me!
              <br />
              <small><i>(narrow your window)</i></small>
            </p>
          </div>
        </div>
        <div className={containerStyles.effect__showOnTablet}>
          <div className={[containerStyles.darkBg, containerStyles.effect__elevate].join(' ')}>
            <p className={containerStyles.glowingText}>
              SUPRISE!!!
            </p>
          </div>
        </div>
      </PageSection>
      <br />
      <p className="u-centered">
        Source code: <a
          href="https://github.com/piotrwitek/react-redux-typescript-starter-kit/tree/master/src/containers/css-modules-container">
          Link to GitHub
        </a>
      </p>
      <br />
      <div className="u-centered">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/67pPYqom2a0" frameBorder="0" allowFullScreen></iframe>
      </div>
      <br />
    </article>
  );
};
