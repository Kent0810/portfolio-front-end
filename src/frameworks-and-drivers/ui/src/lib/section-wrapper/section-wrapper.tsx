import { PropsWithChildren } from 'react';
import './section-wrapper.scss';

export const SectionWrapper: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <section className="section-wrapper">{children}</section>;
};
