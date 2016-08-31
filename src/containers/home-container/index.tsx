import * as React from 'react';
import { PageSection } from '../../components/page-section';
import { PageHero } from '../../components/page-hero';

export function HomeContainer() {
  return (
    <article>
      <PageHero title="Welcome to" subtitle="React / Redux / TypeScript - starter-kit" />
      <PageSection>
        <p className="u-centered">
          Here you can find real world projects made using this starter-kit.
        </p>
      </PageSection>
      <br />
      <br />
    </article>
  );
};
