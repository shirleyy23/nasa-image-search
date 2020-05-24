import React, { useState, useEffect } from 'react';
import 'normalize.css';
import './index.css';
import ImageContext from './components/ImageContext/ImageContext';
import SearchContext from './components/SearchContext/SearchContext';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [resultsLoading, setResultsLoading] = useState(false);
  const [resultsLoadingText, setResultsLoadingText] = useState('');
  const [backgroundLoading, setBackgroundLoading] = useState(false);
  useEffect(() => {
    setResults([]);
    return () => setResults([]);
  }, []);
  return (
    <React.StrictMode>
      <ImageContext.Provider
        value={{
          results,
          resultsLoading,
          setResultsLoading,
          backgroundLoading,
          setBackgroundLoading,
          resultsLoadingText,
          setResultsLoadingText,
          changeResults: e => setResults(e),
        }}
      >
        <SearchContext.Provider
          value={{ query, updateQuery: e => setQuery(e) }}
        >
          <div className="App">
            <Wrapper />
          </div>
        </SearchContext.Provider>
      </ImageContext.Provider>
    </React.StrictMode>
  );
}

export default App;
