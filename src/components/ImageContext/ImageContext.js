import React, { createContext, useContext } from 'react';

const ImageContext = createContext();

export const useImage = () => useContext(ImageContext);

export default ImageContext;
