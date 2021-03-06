import React, { useState, useEffect, useRef } from 'react';
import Image from '../Image/Image';
import { useSearchContext, useImageContext } from '../../state';
import { Container, Title, StyledButton } from './Styles/ResultsStyled';

const Results = () => {
  const [counter, setCounter] = useState(12);

  const { search } = useSearchContext();

  const { query } = search;

  const { image } = useImageContext();

  const { results, resultsStatus, setResultsStatus } = image;

  const prevQueryRef = useRef();

  const getResultsText = (term, images) => {
    const resultsText =
      images.length > 0
        ? `Results for "${term}" (${counter}/${images.length} images)`
        : `No images found for "${term}"`;

    return resultsText;
  };

  useEffect(() => {
    prevQueryRef.current = query;

    if (prevQuery !== query) {
      const updatedCounterValue = results.length >= 12 ? 12 : results.length;

      setCounter(updatedCounterValue);
    }

    const updatedTitle = getResultsText(query, results);

    setResultsStatus(updatedTitle);
  }, [results, counter]);

  const prevQuery = prevQueryRef.current;

  return (
    <Container>
      {query && <Title>{resultsStatus}</Title>}
      <Image counter={counter} />
      {results.length > 12 && counter < results.length ? (
        <StyledButton
          primary
          onClick={() =>
            setCounter(prevState =>
              prevState + 12 > results.length
                ? prevState + (results.length - prevState)
                : prevState + 12
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
