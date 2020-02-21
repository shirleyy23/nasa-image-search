import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAPIData } from '../../Utilities';
import ImageContext from '../ImageContext/ImageContext';

const StyledForm = styled.form`
  padding: 1.25rem 1.75rem;
`;

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 0;
  display: inline-block;
  height: auto;
  width: 50%;
  margin-right: 2rem;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const StyledLabel = styled.label`
  width: 100%;
  display: block;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  display: block;
  margin-bottom: 1.5rem;
  background-color: #333333;
  padding: 0.5rem 0.6rem;
  border: none;
  color: white;
`;

const StyledButton = styled.button`
  background-color: #15418c;
  transition: 0.3s ease background-color;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem 0.6rem;
  color: white;
  border: none;
  display: inline-block;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #5d7fb9;
  }
`;

const Form = () => {
  const [searchVal, setSearchVal] = useState('');
  const imageQuery = `https://images-api.nasa.gov/search?q=${searchVal}&media_type=image`;

  useEffect(() => {
    setSearchVal('');
    return () => setSearchVal('');
  }, []);

  return (
    <ImageContext.Consumer>
      {({ changeResults }) => (
        <StyledForm
          onSubmit={e => {
            e.preventDefault();
            getAPIData(imageQuery).then(data =>
              changeResults(data.collection.items)
            );
          }}
        >
          <StyledFieldset>
            <StyledLabel htmlFor="search-images">Search images</StyledLabel>
            <StyledInput
              type="text"
              name="search-images"
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
            />
          </StyledFieldset>
          <StyledButton type="submit">Search</StyledButton>
        </StyledForm>
      )}
    </ImageContext.Consumer>
  );
};

export default Form;
