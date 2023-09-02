import { Exp, SectionWrapper } from '@portfolio/frameworks-and-drivers/ui';
import './exp.section.scss';
import experiences from './experiences.json';

export const ExpSection: React.FunctionComponent = () => {
  return (
    <SectionWrapper>
      <div className="exp-header">
        <h3>
          Experience<span>.</span>
        </h3>
        <div className="exp-header-line"></div>
      </div>
      <div className="exp-content">
        {experiences.map((experience) => (
          <Exp experience={experience} />
        ))}
      </div>
    </SectionWrapper>
  );
};
