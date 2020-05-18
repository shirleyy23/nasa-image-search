import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const BackgroundDetails = styled.section`
  position: absolute;
  height: auto;
  width: 25%;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 2;
  padding: 0.75rem;
  @media screen and (max-width: 767px) {
    width: 30%;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;

export const BackgroundTitle = styled.h5`
  margin: 0 0 0.3rem 0;
  font-size: 0.9rem;
`;

export const BackgroundPhotographer = styled.h6`
  margin: 0;
  font-size: 0.7rem;
`;
