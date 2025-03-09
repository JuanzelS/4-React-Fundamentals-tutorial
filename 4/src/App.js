// src/App.js
import React from 'react';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList'; // Make sure to import POPOSList

function App() {
  return (
    <div className="App">
      <Title 
        title="SFPOPOS"
        subtitle="San Francisco's Privately Owned Public Spaces"
      />
      <POPOSList /> {/* Use the POPOSList component here */}
    </div>
  );
}

export default App;
