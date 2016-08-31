import * as React from 'react';
import { PageSection } from '../../components/page-section';
import { PageHeader } from '../../components/page-header';

export function AboutContainer() {
  return (
    <article>
      <PageHeader>About</PageHeader>
      <PageSection>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </PageSection>
      <br />
      <br />
    </article>
  );
};
