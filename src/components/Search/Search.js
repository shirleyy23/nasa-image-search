import React, { useState } from 'react';
import Form from '../Form/Form';
import Results from '../Results/Results';
import { StyledSearch, Header, Title } from './Styles/SearchStyled';

const Search = () => {
  const [counter, setCounter] = useState(12);
  return (
    <StyledSearch>
      <Header>
        <Title>NASA Image Search</Title>
      </Header>
      <Form setCounter={setCounter} />
      <Results counter={counter} setCounter={setCounter} />
    </StyledSearch>
  );
};

export default Search;
