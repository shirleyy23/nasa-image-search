import React, { createContext, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

const SearchProvider = ({ children, search }) => {
  return (
    <SearchContext.Provider value={{ search }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
