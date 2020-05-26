import React, { useState, useEffect } from 'react';
import 'normalize.css';
import './index.css';
import ImageProvider from './components/ImageContext/ImageContext';
import SearchProvider from './components/SearchContext/SearchContext';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [resultsStatus, setResultsStatus] = useState('');
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
          backgroundLoading,
          setBackgroundLoading,
          resultsStatus,
          setResultsStatus,
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
