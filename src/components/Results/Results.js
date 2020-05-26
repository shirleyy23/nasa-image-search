import React, { useState } from 'react';
import Image from '../Image/Image';
import { useSearch } from '../SearchContext/SearchContext';
import { useImage } from '../ImageContext/ImageContext';
import { Container, Title, StyledButton } from './Styles/ResultsStyled';

const Results = () => {
  const [counter, setCounter] = useState(12);

  const { search } = useSearch();

  const { query } = search;

  const { image } = useImage();

  const { results, resultsStatus, setResultsStatus } = image;

  const getResultsText = (term, images) => {
    const resultsText =
      images.length > 0
        ? `Results for "${term}" (${counter}/${images.length} images)`
        : `No images found for "${term}"`;

    return resultsText;
  };

  return (
    <Container>
      {query && <Title>{resultsStatus}</Title>}
      <Image counter={counter} />
      {results.length > 0 && results.length > 12 ? (
        <StyledButton
          primary
          onClick={() =>
            setCounter(prevState =>
              prevState + 12 > results.length ? results.length : prevState + 12
            )
          }
        >
          More Images
        </StyledButton>
      ) : null}
    </Container>
  );
};

export default Results;
