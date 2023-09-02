import { SectionWrapper } from '@portfolio/frameworks-and-drivers/ui';
import './exp.section.scss';

export const ExpSection: React.FunctionComponent = () => {
  return (
    <SectionWrapper>
      <div className="exp-header">
        <h3>
          Experience<span>.</span>
        </h3>
        <div className="exp-header-line"></div>
      </div>
      <div className="exp-content"></div>
    </SectionWrapper>
  );
};
