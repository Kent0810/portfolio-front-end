import './contact.section.scss';
import { SectionWrapper } from '@portfolio/frameworks-and-drivers/ui';

export const ContactSection = () => {
  return (
    <SectionWrapper>
      <div className="contact-content" id="contact">
        <div className="contact-title">
          <h1>
            Contact<span>.</span>
          </h1>
        </div>
        <div className="contact-description">
          <p>
            Shoot me an email if you want to connect! You can also find me on{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kentbui2002/"
            >
              Linkedin
            </a>{' '}
            or{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kentbui2002/"
            >
              Facebook
            </a>{' '}
            if that's more your speed.
          </p>
        </div>
        <div className="contact-email">
          <a href="mailto:kent.bui207ktmt@hcmut.edu.vn" className="link">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="2.4rem"
              width="2.4rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path>
            </svg>
            <span>kent.bui207ktmt@hcmut.edu.vn</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};
