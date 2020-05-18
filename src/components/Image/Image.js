import React, { useState } from 'react';
import objectFitPolyfill from 'objectFitPolyfill';
import PropTypes from 'prop-types';
import ImageContext from '../ImageContext/ImageContext';
import ModalWrapper from '../Modal/ModalWrapper';
import Modal from '../Modal/Modal';
import {
  Overlay,
  Container,
  StyledImage,
  Title,
  OverlayButton,
} from './Styles/ImageStyled';

const Image = props => {
  const [displayModal, changeDisplayModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: null,
    href: null,
    description: null,
    photographer: null,
    keywords: [],
  });

  const { counter } = props;

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
          results.slice(0, counter).map((result, index) => {
            const {
              title,
              description,
              photographer,
              keywords,
            } = result.data[0];
            const { href } = result.links[0];
            return (
              <Container key={`results-image-${index + 1}`}>
                <Overlay>
                  <Title>{shortenTitle(title)}</Title>
                  <OverlayButton
                    primary
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
                <StyledImage
                  src={href}
                  alt={`${title} image`}
                  data-object-fit="cover"
                  data-object-position="top center"
                />
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

Image.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Image;
