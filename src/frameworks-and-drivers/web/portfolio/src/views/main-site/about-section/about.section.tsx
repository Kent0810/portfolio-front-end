import {
  Chip,
  SectionWrapper,
  SocialLogosList,
} from '@portfolio/frameworks-and-drivers/ui';
import React from 'react';
import './about.section.scss';
import { AT_WORK_SKILLS, FOR_FUN_SKILLS } from './skills.common';

export const AboutSection: React.FunctionComponent = () => {
  return (
    <SectionWrapper>
      <div className="about-header" id="about">
        <h3>
          About<span>.</span>
        </h3>

        <div className="about-header-line"></div>
      </div>
      <div className="about-content">
        <div className="about-content-left">
          <p className="about-content-text first-letter-hightlight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            expedita quia error doloribus excepturi quos animi necessitatibus
            corporis in, tenetur modi voluptate voluptates corrupti id dolores.
            Delectus sint iusto qui.
          </p>
          <p className="about-content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            expedita quia error doloribus excepturi quos animi necessitatibus
            corporis in, tenetur modi voluptate voluptates corrupti id dolores.
            Delectus sint iusto qui.
          </p>
          <p className="about-content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            expedita quia error doloribus excepturi quos animi necessitatibus
            corporis in, tenetur modi voluptate voluptates corrupti id dolores.
            Delectus sint iusto qui.
          </p>
          <p className="about-content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            expedita quia error doloribus excepturi quos animi necessitatibus
            corporis in, tenetur modi voluptate voluptates corrupti id dolores.
            Delectus sint iusto qui
            <span role="img" aria-label="emoji">
              🔗
            </span>
          </p>
          <div className="about-link">
            <div className="about-link-text">
              <span>My Socials</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
              </svg>
            </div>

            <SocialLogosList gap={1} />
          </div>
        </div>
        <div className="about-content-right">
          <div className="about-content-right-stats-1">
            <h4>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                color=""
                height="2.4rem"
                width="2.4rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"></path>
              </svg>
              <span>Use at work</span>
            </h4>
            <div className="stats">
              {AT_WORK_SKILLS.map((skill) => (
                <Chip chipValue={skill} />
              ))}
            </div>
          </div>
          <div className="about-content-right-stats-2">
            <h4>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                color=""
                height="2.4rem"
                width="2.4rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
              </svg>
              <span>Use for fun</span>
            </h4>
            <div className="stats">
              {FOR_FUN_SKILLS.map((skill) => (
                <Chip chipValue={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
