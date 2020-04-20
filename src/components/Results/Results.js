import React from 'react';
import styled from 'styled-components';
import Image from '../Image/Image';
import SearchContext from '../SearchContext/SearchContext';
import ImageContext from '../ImageContext/ImageContext';
import Button from '../Button/Button';

const Container = styled.section`
  padding: 1.25rem 1.75rem;
  height: 60%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (max-width: 767px) {
    overflow: visible;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0 0 1.75rem;
  flex-basis: 100%;
  align-self: flex-start;
`;

const StyledButton = styled(Button)`
  flex-basis: 100%;
  height: 3.1rem;
`;

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

export default Results;
