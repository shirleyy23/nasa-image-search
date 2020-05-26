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
      {query && <Title>{resultsStatus}</Title>}
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

export default Results;
