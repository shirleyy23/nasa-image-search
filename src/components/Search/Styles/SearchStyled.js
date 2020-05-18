import styled from 'styled-components';

export const StyledSearch = styled.section`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  flex-basis: 80%;
  height: 70vh;
  overflow: hidden;
  position: relative;
  border: 2px solid white;
  position: relative;
  border-radius: 0.25rem;
  @media screen and (max-width: 767px) {
    overflow-y: auto;
  }
  @media screen and (max-width: 575px) {
    height: 60vh;
  }
`;
export const Header = styled.header`
  background-color: rgb(11, 61, 145);
  color: white;
  padding: 1.25rem 1.75rem;
  font-weight: 700;
`;

export const Title = styled.h1`
  letter-spacing: -0.1px;
  font-size: 1.2rem;
  text-decoration: uppercase;
  margin: 0;
`;
