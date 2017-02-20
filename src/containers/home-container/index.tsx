import * as React from 'react';
import { Link } from 'react-router';
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
          <li>
            <Link to="/currency-converter">Currency Converter App</Link>
          </li>
          <li>
            <Link to="/css-modules">CSS Modules Demo</Link>
          </li>
        </ul>
        <br />
        <div className="c-alert c-alert--info">
          Note: Open Redux DevTools Inspector
        </div>
      </PageSection>
      <br />
    </article>
  );
};
