import React from 'react';
import styled from 'styled-components';
import Image from '../Image/Image';

const Container = styled.section`
  padding: 1.25rem 1.75rem;
  height: 60%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Results = () => {
  return (
    <Container>
      <Image />
    </Container>
  );
};

export default Results;