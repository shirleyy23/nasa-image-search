import styled from 'styled-components';
import Button from '../../Button/Button';

export const Container = styled.section`
  padding: 1.25rem 1.75rem;
  height: 60%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (max-width: 767px) {
    overflow: visible;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0 0 1.75rem;
  flex-basis: 100%;
  align-self: flex-start;
`;

export const StyledButton = styled(Button)`
  flex-basis: 100%;
  height: 3.1rem;
`;
