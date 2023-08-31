import React from 'react';
import { SectionWrapper } from '@portfolio/frameworks-and-drivers/ui';
import './introduction.section.scss';
export const IntroductionSection: React.FunctionComponent = () => {
  return (
    <SectionWrapper>
      <div className="introduction_content">
        <div className="introduction_content_title">
          <h1>
            Hey, I'm Kent<span>.</span>
          </h1>
        </div>
        <div className="introduction_content_sub_title">
          <h2>
            I'm a <span>Full Stack Software Engineer</span>
          </h2>
        </div>
        <div className="introduction_content_description">
          <p>
            I'm a software engineer based in Ho Chi Minh City, Vietnam. I
            specialize in building exceptional websites, applications, and
            everything in between.
          </p>
        </div>
        <div className="introduction_content_button">
          <a className="introduction_content_button_link" href="#contact">
            Get In Touch
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};
