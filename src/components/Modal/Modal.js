import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const StyledModal = styled.div`
  padding: 1.75rem;
  border: 2px solid white;
  height: 70vh;
  width: 70%;
  overflow: auto;
  position: relative;
  background-color: #313131;
  color: white;
  @media screen and (max-width: 991px) {
    width: 80%;
    height: 80vh;
  }
  @media screen and (max-width: 575px) {
    width: 90%;
    height: 90vh;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: #555555;
  box-shadow: none;
`;

const StyledFigure = styled.figure`
  margin: 2rem 0;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: inline-block;
  margin-top: ;
`;

const ImageTitle = styled.h3`
  margin-bottom: 0.75rem;
  font-size: 1.75rem;
  font-weight: 700;
`;

const Photographer = styled.p`
  font-weight: 700;
`;

const DescriptionContainer = styled.div`
  margin-bottom: 2rem;
`;

const DescriptionTitle = styled.h4`
  font-weight: 700;
  margin-bottom: 1.25rem;
`;

const DescriptionContent = styled.p`
  line-height: 1.4;
`;

const ImageLink = styled.p`
  font-weight: 700;
`;
const Link = styled.a`
  color: #428bca;
  font-weight: 400;
  &:visited {
    color: #428bca;
  }
`;

const Keywords = styled.small`
  font-weight: 700;
`;

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
        {keywords.length > 0 ? keywords.map(keyword => keyword).join(', ') : ''}
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
