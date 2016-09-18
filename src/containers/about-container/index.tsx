import * as React from 'react';
import { PageSection } from '../../components/page-section';
import { PageHeader } from '../../components/page-header';
import { aboutStyles } from './about-styles';


export function AboutContainer() {
  return (
    <article>
      <PageHeader>About</PageHeader>
      <PageSection className={aboutStyles.textCentered}>
        <div className={aboutStyles.effect__hideOnMobile}>
          <div className={[aboutStyles.darkBg, aboutStyles.effect__elevate].join(' ')}>
            <p className={aboutStyles.glowingText}>
              Shrink your window
            </p>
          </div>
        </div>
        <div className={aboutStyles.effect__showOnMobile}>
          <div className={[aboutStyles.darkBg, aboutStyles.effect__elevate].join(' ')}>
            <p className={aboutStyles.glowingText}>
              SUPRISE!!!
            </p>
          </div>
        </div>
      </PageSection>
      <br />
      <br />
    </article>
  );
};
