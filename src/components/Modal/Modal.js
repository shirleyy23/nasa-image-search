import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledModal,
  CloseButton,
  StyledFigure,
  Image,
  ImageTitle,
  Photographer,
  DescriptionContainer,
  DescriptionTitle,
  DescriptionContent,
  ImageLink,
  Link,
  Keywords,
} from './Styles/ModalStyled';

const Modal = props => {
  const {
    changeModal,
    displayModal,
    href,
    title,
    photographer,
    description,
    keywords,
  } = props;

  return (
    <StyledModal>
      <CloseButton onClick={() => changeModal(!displayModal)}>
        Close X
      </CloseButton>
      <StyledFigure>
        <Image src={href} alt={`${title} modal image`} />
      </StyledFigure>
      <ImageTitle>{title}</ImageTitle>
      <Photographer>Photo credit: {photographer || 'NASA'}</Photographer>
      <hr />
      <DescriptionContainer>
        <DescriptionTitle>About</DescriptionTitle>
        <DescriptionContent>{description}</DescriptionContent>
        <ImageLink>
          Photo Link: &nbsp;
          <Link href={href} target="_blank" rel="noreferrer noopener">
            {href}
          </Link>
        </ImageLink>
      </DescriptionContainer>
      <hr />
      <Keywords>
        Keywords: &nbsp;
        {keywords && keywords.length > 0
          ? keywords.map(keyword => keyword).join(', ')
          : ''}
      </Keywords>
    </StyledModal>
  );
};

Modal.propTypes = {
  changeModal: PropTypes.func.isRequired,
  displayModal: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  photographer: PropTypes.string,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Modal;
