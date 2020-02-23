import React from 'react';
import styled from 'styled-components';
import Image from '../Image/Image';
import SearchContext from '../SearchContext/SearchContext';

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
    <SearchContext.Consumer>
      {({ query }) => (
        <Container>
          {query ? <Title>Results for &quot;{query}&quot;</Title> : null}
          <Image />
        </Container>
      )}
    </SearchContext.Consumer>
  );
};

export default Results;
