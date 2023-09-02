import './exp.scss';
import { Chip } from '../chip/chip';

type ExpProps = {
  readonly title: string;
  readonly duration: string;
  readonly subTitle: string;
  readonly location: string;
  readonly description: string;
  readonly skills: string[];
};

type ExpContentProps = {
  readonly experience: ExpProps;
};

export const Exp = ({ experience }: ExpContentProps) => {
  return (
    <div className="exp">
      <div className="exp-title">
        <h4>{experience.title}</h4>
        <h5>{experience.duration}</h5>
      </div>
      <div className="exp-sub-title">
        <h5>{experience.subTitle}</h5>
        <h5>{experience.location}</h5>
      </div>
      <div className="exp-description">
        <p>{experience.description}</p>
      </div>
      <div className="exp-skills">
        {experience.skills.map((skill) => (
          <Chip chipValue={skill} />
        ))}
      </div>
    </div>
  );
};
