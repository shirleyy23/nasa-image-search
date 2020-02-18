import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = () => {
  const [background, setBackground] = useState({});
  const StyledWrapper = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  `;

  const BackgroundDetails = styled.section`
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
      width: 40%;
    }
  `;

  const BackgroundTitle = styled.h5`
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
  `;

  const BackgroundPhotographer = styled.h6`
    margin: 0;
    font-size: 0.7rem;
  `;

  useEffect(() => {
    setBackground(background);
    return () => setBackground({});
  }, []);

  return (
    <StyledWrapper>
      <BackgroundDetails>
        <BackgroundTitle />
        <BackgroundPhotographer />
      </BackgroundDetails>
    </StyledWrapper>
  );
};

export default Wrapper;
