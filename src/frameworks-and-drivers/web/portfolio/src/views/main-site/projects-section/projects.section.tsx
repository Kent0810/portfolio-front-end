import { Project, SectionWrapper } from '@portfolio/frameworks-and-drivers/ui';
import './projects.section.scss';
import data from './project.json';
import img from '../../../assets/img/example-project.jpg';

export const ProjectsSection = () => {
  return (
    <SectionWrapper>
      <div className="project-header" id="projects">
        <h3>
          Projects<span>.</span>
        </h3>

        <div className="project-header-line"></div>
      </div>
      <div className="project-projects">
        {data.map((project) => {
          return (
            <Project
              img={img}
              title={project.title}
              subtitles={project.subtitle}
              description={project.description}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};
