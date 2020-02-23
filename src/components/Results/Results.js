import React from 'react';
import styled from 'styled-components';
import Image from '../Image/Image';
import SearchContext from '../SearchContext/SearchContext';
import ImageContext from '../ImageContext/ImageContext';

const Container = styled.section`
  padding: 1.25rem 1.75rem;
  height: 60%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

const Results = () => {
  return (
    <ImageContext.Consumer>
      {({ results }) => (
        <SearchContext.Consumer>
          {({ query }) => (
            <Container>
              {query ? (
                <Title>
                  {results.length > 0
                    ? `Results for "${query}"`
                    : `No results found for "${query}"`}
                </Title>
              ) : null}
              <Image />
            </Container>
          )}
        </SearchContext.Consumer>
      )}
    </ImageContext.Consumer>
  );
};

export default Results;
