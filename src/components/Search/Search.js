import React from 'react';
import styled from 'styled-components';

const Search = () => {
  const StyledSearch = styled.section`
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    flex-basis: 80%;
    height: 70vh;
    position: relative;
    border: 2px solid white;
    position: relative;
    margin: 0 auto;
    border-radius: 0.25rem;
    @media screen and (max-width: 575px) {
      height: 60vh;
    }
  `;
  const Header = styled.header`
    background-color: rgb(11, 61, 145);
    color: white;
    padding: 1.25rem 1.75rem;
    font-weight: 700;
  `;

  const Title = styled.h1`
    letter-spacing: -0.1px;
    font-size: 1.2rem;
    text-decoration: uppercase;
    margin: 0;
  `;
  return (
    <StyledSearch>
      <Header>
        <Title>NASA Image Search</Title>
      </Header>
    </StyledSearch>
  );
};

export default Search;