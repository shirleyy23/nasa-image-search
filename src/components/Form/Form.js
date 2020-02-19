import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 1.25rem 1.75rem;
  margin-bottom: 2rem;
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

  useEffect(() => {
    setSearchVal('');
    return () => setSearchVal('');
  }, []);

  return (
    <StyledForm onSubmit={e => e.preventDefault()}>
      <StyledFieldset>
        <StyledLabel htmlFor="search-images">Search images</StyledLabel>
        <StyledInput
          type="text"
          name="search-images"
          value={searchVal}
          onChange={e => setSearchVal(e.target.value)}
        />
      </StyledFieldset>
      <StyledButton>Search</StyledButton>
    </StyledForm>
  );
};

export default Form;
