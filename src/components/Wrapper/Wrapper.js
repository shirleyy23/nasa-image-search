import React, { useState, useEffect } from 'react';
import {
  StyledWrapper,
  BackgroundDetails,
  BackgroundTitle,
  BackgroundPhotographer,
} from './Styles/WrapperStyled';
import { getAPIData, getVideoID, apiURL } from '../../Utilities';
import Search from '../Search/Search';
import '../../../node_modules/css.escape/css.escape';

const Wrapper = () => {
  const [background, setBackground] = useState({});

  const { link, title, copyright } = background;

  const wrapperBackground = {
    backgroundImage: `url('${link}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: 'black',
  };

  const getBackgroundImage = data => {
    const { title, copyright } = data;

    // Check to see if a video or image is being returned from the API
    // If a video is  returned, then use the Youtube preview image as the background image for the app
    const mediaLink =
      data.media_type === 'video'
        ? CSS.escape(getVideoID(data.url))
        : CSS.escape(data.hdurl);

    setBackground({
      link: mediaLink,
      title,
      copyright,
    });
  };

  useEffect(() => {
    setBackground(background);
    getAPIData(apiURL, getBackgroundImage);
    return () => setBackground({});
  }, [link, title, copyright, setBackground]);

  return (
    <StyledWrapper style={wrapperBackground}>
      <div className="modal__root" />
      <Search />
      <BackgroundDetails>
        <BackgroundTitle>{title}</BackgroundTitle>
        <BackgroundPhotographer>
          Photo credit: {copyright || 'NASA'}
        </BackgroundPhotographer>
      </BackgroundDetails>
    </StyledWrapper>
  );
};

export default Wrapper;
