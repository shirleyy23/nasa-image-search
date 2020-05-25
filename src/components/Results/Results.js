import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import { useSearch } from '../SearchContext/SearchContext';
import { useImage } from '../ImageContext/ImageContext';
import { Container, Title, StyledButton } from './Styles/ResultsStyled';

const Results = props => {
  const { counter, setCounter } = props;

  const { search } = useSearch();

  const { query } = search;

  const { image } = useImage();

  const { results, resultsLoadingText } = image;

  const findImages = (term, images) => {
    const initialCount = images.length >= 12 ? counter : images.length;
    if (images.length > 0) {
      return `Results for "${term}" (${initialCount}/${images.length} images)`;
    }
    return `No images found for "${term}"`;
  };

  return (
    <Container>
      {results.length >= 1 ? (
        <Title>{findImages(query, results)}</Title>
      ) : (
        <Title>{resultsLoadingText}</Title>
      )}
      <Image counter={counter} />
      {results.length > 0 && results.length > 12 ? (
        <StyledButton
          primary
          onClick={() =>
            setCounter(
              counter + 12 > results.length ? results.length : counter + 12
            )
          }
        >
          More Images
        </StyledButton>
      ) : null}
    </Container>
  );
};

Results.propTypes = {
  counter: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
};

export default Results;
