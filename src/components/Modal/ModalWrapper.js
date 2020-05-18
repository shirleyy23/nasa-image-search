import React from 'react';
import { createPortal } from 'react-dom';
import { StyledModalWrapper } from './Styles/ModalStyled';

const ModalWrapper = ({ children }) => {
  const modalRoot = document.querySelector('.modal__root');
  return createPortal(
    <StyledModalWrapper>{children}</StyledModalWrapper>,
    modalRoot
  );
};

export default ModalWrapper;
