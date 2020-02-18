import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import ImageContext from './components/ImageContext/ImageContext';

function App() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    setResults([]);
    return () => setResults([]);
  }, []);
  return (
    <React.StrictMode>
      <ImageContext.Provider
        value={{
          results,
          changeResults: e => setResults(e),
        }}
      >
        <div className="App" />
      </ImageContext.Provider>
    </React.StrictMode>
  );
}

export default App;
