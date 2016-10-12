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
            <Link to="/currency-converter">Currency Converter App</Link> - (work in progress)
          </li>
          <li>
            <Link to="/css-modules">CSS Modules</Link> - <a href="https://youtu.be/67pPYqom2a0">Overview Video on Youtube</a>
          </li>
        </ul>
        <br />
        <div className="c-alerts__alert c-alerts__alert--primary">
          Note: Open Redux DevTools Inspector
        </div>
      </PageSection>
      <br />
    </article>
  );
};
