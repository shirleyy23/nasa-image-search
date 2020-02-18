import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAPIData, getVideoID, apiURL } from '../../Utilities';
import Search from '../Search/Search';

const Wrapper = () => {
  const [background, setBackground] = useState({});

  const { link, title, copyright } = background;

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
    background-image: url('${link}');
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
    margin: 0 0 0.3rem 0;
    font-size: 0.9rem;
  `;

  const BackgroundPhotographer = styled.h6`
    margin: 0;
    font-size: 0.7rem;
  `;

  useEffect(() => {
    setBackground(background);
    getAPIData(apiURL).then(data => {
      const { title, copyright } = data;

      // Check to see if a video or image is being returned from the API
      // If a video is  returned, then use the Youtube preview image as the background image for the app
      const mediaLink =
        data.media_type === 'video' ? getVideoID(data.url) : data.hdurl;

      setBackground(
        {
          link: mediaLink,
          title,
          copyright,
        } || {}
      );
    });
    return () => setBackground({});
  }, []);

  return (
    <StyledWrapper>
      <Search />
      <BackgroundDetails>
        <BackgroundTitle>{title}</BackgroundTitle>
        <BackgroundPhotographer>
          By; {copyright || 'NASA'}
        </BackgroundPhotographer>
      </BackgroundDetails>
    </StyledWrapper>
  );
};

export default Wrapper;
