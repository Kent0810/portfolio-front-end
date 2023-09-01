import React from 'react';
import { IntroductionSection } from './introduction-section/introduction.section';
import { AboutSection } from './about-section/about.section';

export const MainSite: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <IntroductionSection />
      <AboutSection />
    </React.Fragment>
  );
};
