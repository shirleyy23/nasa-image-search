import React, { useState } from 'react';
import Form from '../Form/Form';
import Results from '../Results/Results';
import { StyledSearch, Header, Title } from './Styles/SearchStyled';

const Search = () => {
  return (
    <StyledSearch>
      <Header>
        <Title>NASA Image Search</Title>
      </Header>
      <Form />
      <Results />
    </StyledSearch>
  );
};

export default Search;
