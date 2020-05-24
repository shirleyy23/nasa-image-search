import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getAPIData } from '../../Utilities';
import { useImage } from '../ImageContext/ImageContext';
import { useSearch } from '../SearchContext/SearchContext';
import {
  StyledForm,
  StyledFieldset,
  StyledLabel,
  StyledInput,
  StyledButton,
  MessageField,
} from './Styles/FormStyled';

const Form = props => {
  const [searchVal, setSearchVal] = useState('');
  const [formMessage, showFormMessage] = useState({
    status: false,
    message: '',
  });
  const { status, message } = formMessage;
  const imageQuery = `https://images-api.nasa.gov/search?q=${searchVal}&media_type=image`;

  const { setCounter } = props;

  const { search } = useSearch();

  const { updateQuery } = search;

  const { image } = useImage();

  const { changeResults, setResultsLoading, setResultsLoadingText } = image;

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
  );
};

Form.propTypes = {
  setCounter: PropTypes.func.isRequired,
};

export default Form;
