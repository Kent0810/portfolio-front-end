import './modal.scss';

import ReactDOM from 'react-dom';
import React, { PropsWithChildren } from 'react';
import { Modal } from './modal';

type ModalWrapperProps = {
  isModalClicked: boolean;
  toggleModal: () => void;
};

export const ModalWrapper = ({
  isModalClicked,
  toggleModal,
}: ModalWrapperProps) => {
  return (
    <div>
      {isModalClicked &&
        ReactDOM.createPortal(
          <Modal toggleModal={toggleModal} />,
          document.getElementById('modal-root') as HTMLElement
        )}
    </div>
  );
};
