import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  padding: 1.75rem;
  border: 2px solid white;
  height: 70vh;
  width: 60%;
  overflow: auto;
  position: relative;
  background-color: #313131;
  color: white;
  @media screen and (max-width: 575px) {
    height: 60vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: white;
  background-color: #555555;
  padding: 0.5rem 0.6rem;
  cursor: pointer;
  border: none;
  box-shadow: none;
  font-weight: 700;
  transition: 0.3s ease all;
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

  console.log(title);
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
      <Keywords>Keywords: {keywords}</Keywords>
    </StyledModal>
  );
};

export default Modal;
