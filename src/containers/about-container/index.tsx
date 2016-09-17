import * as React from 'react';
import { PageSection } from '../../components/page-section';
import { PageHeader } from '../../components/page-header';
import { styles } from './about-styles';


export function AboutContainer() {
  return (
    <article>
      <PageHeader>About</PageHeader>
      <PageSection>
        <div className={styles.container}>
          <div className={styles.visibleWell}>
            <p className={styles.glowingText}>
              Shrink your window
            </p>
          </div>
          <div className={styles.supriseWell}>
            <p className={styles.glowingText}>
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
