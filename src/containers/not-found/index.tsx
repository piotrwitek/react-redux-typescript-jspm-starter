import * as React from 'react';
import { Link } from 'react-router';
import { PageSection } from '../../components/page-section';
import { PageHero } from '../../components/page-hero';

export default function () {
  return (
    <article>
      <PageHero title="404 Not Found" subtitle="Page not found" />
      <PageSection className="o-container o-container--small u-centered">
        <Link to="/">Back to Home</Link>
      </PageSection>
      <br />
    </article>
  );
};
