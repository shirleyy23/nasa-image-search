import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAPIData } from '../../Utilities';
import ImageContext from '../ImageContext/ImageContext';

const StyledForm = styled.form`
  padding: 1.25rem 1.75rem;
  display: flex;
  flex-wrap: wrap;
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
  background-color: #333333;
  padding: 0.5rem 0.6rem;
  border: none;
  color: white;
  @media screen and (max-width: 767px) {
    margin-bottom: 0.75rem;
  }
`;

const StyledButton = styled.button`
  background-color: #15418c;
  align-self: flex-end;
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
  @media screen and (max-width: 767px) {
    order: 3;
  }
`;

const MessageField = styled.p`
  margin-top: 0.75rem;
  font-weight: 700;
  color: #e60d2e;
  flex-basis: 100%;
  @media screen and (max-width: 767px) {
    order: 2;
  }
`;

const Form = () => {
  const [searchVal, setSearchVal] = useState('');
  const [formMessage, showFormMessage] = useState({
    status: false,
    message: '',
  });
  const { status, message } = formMessage;
  const imageQuery = `https://images-api.nasa.gov/search?q=${searchVal}&media_type=image`;

  const validateForm = query => {
    const specialCharsRegEx = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (!query || specialCharsRegEx.test(query) || query === ' ') {
      showFormMessage({
        ...formMessage,
        status: true,
        message: !query
          ? '* Please fill in the search field'
          : '* Please enter a valid search term (ex. moon landing)',
      });
      return false;
    }
    return true;
  };

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
            if (!validateForm(searchVal)) {
              return false;
            }
            // Resets formMessage state if valid input is submitted following invalid input(s)
            if (status) {
              showFormMessage({ ...formMessage, status: !status, message: '' });
            }
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
          {status ? <MessageField>{message}</MessageField> : null}
        </StyledForm>
      )}
    </ImageContext.Consumer>
  );
};

export default Form;
