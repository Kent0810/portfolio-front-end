import React from 'react';
import { IntroductionSection } from './introduction-section/introduction.section';
import { AboutSection } from './about-section/about.section';
import { ProjectsSection } from './projects-section/projects.section';
import { ExpSection } from './exp-section/exp.section';
import { ContactSection } from './contact-section/contact.section';

export const MainSite: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <IntroductionSection />
      <AboutSection />
      <ProjectsSection />
      <ExpSection />
      <ContactSection />
    </React.Fragment>
  );
};
