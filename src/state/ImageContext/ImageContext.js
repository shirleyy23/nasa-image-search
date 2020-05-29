import React, { createContext, useContext } from 'react';

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

const ImageProvider = ({ children, image }) => {
  return (
    <ImageContext.Provider value={{ image }}>{children}</ImageContext.Provider>
  );
};

export default ImageProvider;
