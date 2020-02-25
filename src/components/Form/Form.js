import React, { useState } from 'react';
import styled from 'styled-components';
import { getAPIData } from '../../Utilities';
import ImageContext from '../ImageContext/ImageContext';
import SearchContext from '../SearchContext/SearchContext';
import Button from '../Button/Button';

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

const StyledButton = styled(Button)`
  align-self: flex-end;
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

const Form = props => {
  const [searchVal, setSearchVal] = useState('');
  const [formMessage, showFormMessage] = useState({
    status: false,
    message: '',
  });
  const { status, message } = formMessage;
  const imageQuery = `https://images-api.nasa.gov/search?q=${searchVal}&media_type=image`;

  const { setCounter } = props;

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

  return (
    <ImageContext.Consumer>
      {({
        changeResults,
        resultsLoading,
        setResultsLoading,
        setResultsLoadingText,
      }) => (
        <SearchContext.Consumer>
          {({ updateQuery }) => (
            <StyledForm
              onSubmit={e => {
                e.preventDefault();
                if (!validateForm(searchVal)) {
                  return false;
                }
                // Resets formMessage state if valid input is submitted following invalid input(s)
                if (status) {
                  showFormMessage({
                    ...formMessage,
                    status: !status,
                    message: '',
                  });
                }
                updateQuery(searchVal);
                setResultsLoadingText(`Searching images for ${searchVal}...`);
                getAPIData(imageQuery, setResultsLoading).then(data =>
                  changeResults(data.collection.items)
                );
                setCounter(12);
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
              <StyledButton primary type="submit">
                Search
              </StyledButton>
              {status ? <MessageField>{message}</MessageField> : null}
            </StyledForm>
          )}
        </SearchContext.Consumer>
      )}
    </ImageContext.Consumer>
  );
};

export default Form;
