import './header.scss';
import Pdf from '../../../assets/documents/Bui-Anh-Kent-CV2023.pdf';
import { SocialLogosList } from '@portfolio/frameworks-and-drivers/ui';

export const Header: React.FunctionComponent = () => {
  const OpenPdf = () => {
    window.open(Pdf);
  };

  return (
    <header className="heading">
      <SocialLogosList gap={1.8} />
      {/* TODO: Move pdf to the cloud (Firebase) to lower the loading */}
      <button onClick={OpenPdf} className="outline_button">
        My Resume
      </button>
    </header>
  );
};
