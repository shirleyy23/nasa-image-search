import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageContext from '../ImageContext/ImageContext';
import ModalWrapper from '../Modal/ModalWrapper';
import Modal from '../Modal/Modal';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(49, 49, 49, 0.8);
  display: none;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  transition: 0.5s ease all;
  padding: 1.25rem 1.75rem;
`;
const Container = styled.article`
  flex-basis: 30%;
  height: auto;
  position: relative;
  margin-bottom: 1.5rem;
  margin-right: 3%;
  border: none;
  &:hover ${Overlay}, &:focus ${Overlay} {
    display: flex;
  }
  @media screen and (min-width: 576px) and (max-width: 991px) {
    flex-basis: 47.5%;
    margin-right: 2.5%;
  }
  @media screen and (max-width: 575px) {
    flex-basis: 100%;
    margin-right: 0;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: 200px;
`;
const Title = styled.h3`
  font-weight: bold;
  font-style: italic;
  color: white;
  flex-basis: 100%;
`;

const OverlayButton = styled.button`
  background-color: #15418c;
  transition: 0.3s ease background-color;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem 0.6rem;
  color: white;
  border: none;
  display: inline-block;
  cursor: pointer;
  font-size: 0.8rem;
  &:hover,
  &:focus {
    background-color: #5d7fb9;
  }
`;

const Image = () => {
  const [displayModal, changeDisplayModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: null,
    href: null,
    description: null,
    photographer: null,
    keywords: [],
  });

  const shortenTitle = str => {
    if (str.length > 50) {
      const newTitle = str.slice(0, 50).concat('', '...');
      return newTitle;
    }
    return str;
  };
  return (
    <>
      <ImageContext.Consumer>
        {({ results }) =>
          results.map((result, index) => {
            const {
              title,
              description,
              photographer,
              keywords,
            } = result.data[0];
            const { href } = result.links[0];
            return (
              <Container key={`results-image-${index}`}>
                <Overlay>
                  <Title>{shortenTitle(title)}</Title>
                  <OverlayButton
                    onClick={() => {
                      changeDisplayModal(!displayModal);
                      setModalInfo({
                        title,
                        href,
                        description,
                        photographer,
                        keywords,
                      });
                    }}
                  >
                    View Photo
                  </OverlayButton>
                </Overlay>
                <StyledImage src={href} alt={`${title} image`} />
              </Container>
            );
          })
        }
      </ImageContext.Consumer>
      {displayModal ? (
        <ModalWrapper>
          <Modal
            {...modalInfo}
            displayModal={displayModal}
            changeModal={changeDisplayModal}
          />
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Image;
