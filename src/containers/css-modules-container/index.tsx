import * as React from 'react';
import { PageSection } from '../../components/page-section';
import { PageHeader } from '../../components/page-header';
import { containerStyles } from './container-styles';


export function CssModulesContainer() {
  return (
    <article>
      <PageHeader>CSS Modules</PageHeader>
      <p>
        Own concept to achieve locally scoped CSS styles
        using <a href="https://github.com/rtsao/csjs#faq">(csjs)</a> with
        statically typed CSS class-names using TypeScript.
      </p>
      <ul>
        <li>
          Full CSS support with pseudo-classes & media queries, encapsulated in
          ES6 Modules that can be nicely imported by your UI components.
        </li>
        <li>
          Define interfaces with your CSS classes and you get className property
          type-checking, solid auto-completion and easy refactoring.
          You can also add doc comments and auto-generate docs of your styles
          library for your team and utilize IntelliSense features of your IDE.
        </li>
      </ul>
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
    </article>
  );
};
