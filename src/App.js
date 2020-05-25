import React, { useState, useEffect } from 'react';
import 'normalize.css';
import './index.css';
import ImageProvider from './components/ImageContext/ImageContext';
import SearchProvider from './components/SearchContext/SearchContext';
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
      <ImageProvider
        image={{
          results,
          resultsLoading,
          setResultsLoading,
          backgroundLoading,
          setBackgroundLoading,
          resultsLoadingText,
          setResultsLoadingText,
          changeResults: e => setResults(e.collection.items),
        }}
      >
        <SearchProvider search={{ query, updateQuery: e => setQuery(e) }}>
          <div className="App">
            <Wrapper />
          </div>
        </SearchProvider>
      </ImageProvider>
    </React.StrictMode>
  );
}

export default App;
