import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import SearchContext from '../SearchContext/SearchContext';
import ImageContext from '../ImageContext/ImageContext';
import { Container, Title, StyledButton } from './Styles/ResultsStyled';

const Results = props => {
  const { counter, setCounter } = props;

  const findImages = (search, images) => {
    const initialCount = images.length >= 12 ? counter : images.length;
    if (images.length > 0) {
      return `Results for "${search}" (${initialCount}/${images.length} images)`;
    }
    return `No images found for "${search}"`;
  };

  return (
    <ImageContext.Consumer>
      {({ results, resultsLoading, resultsLoadingText }) => (
        <SearchContext.Consumer>
          {({ query }) => (
            <Container>
              {resultsLoading ? (
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
                      counter + 12 > results.length
                        ? results.length
                        : counter + 12
                    )
                  }
                >
                  More Images
                </StyledButton>
              ) : null}
            </Container>
          )}
        </SearchContext.Consumer>
      )}
    </ImageContext.Consumer>
  );
};

Results.propTypes = {
  counter: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
};

export default Results;
