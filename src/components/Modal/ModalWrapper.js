import React from 'react';

import { createPortal } from 'react-dom';

import styled from 'styled-components';

const StyledModalWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height 100vh;
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: rgba(0,0,0,.9); 
  z-index: 99;
  color: white;
`;
const ModalWrapper = ({ children }) => {
  const modalRoot = document.querySelector('.modal__root');
  return createPortal(
    <StyledModalWrapper>{children}</StyledModalWrapper>,
    modalRoot
  );
};

export default ModalWrapper;
