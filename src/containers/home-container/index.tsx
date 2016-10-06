import * as React from 'react';
import { PageSection } from '../../components/page-section';
import { PageHero } from '../../components/page-hero';

export function HomeContainer() {
  return (
    <article>
      <PageHero title="Welcome to" subtitle="React / Redux / TypeScript - starter-kit" />
      <PageSection className="o-container o-container--small">
        <p>
          Below you can find a few examples created using concepts of this starter-kit:
        </p>
        <ul>
          <li><a href="/#/currency-converter"> Currency Converter App</a> - (work in progress)</li>
          <li><a href="/#/about"> CSS Modules </a></li>
        </ul>
        <div className="c-alerts__alert c-alerts__alert--primary">
          Note: Open Redux DevTools Inspector
        </div>
      </PageSection>
      <br />
      <br />
    </article>
  );
};
