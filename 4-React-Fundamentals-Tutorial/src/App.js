import React from 'react';
import './App.css';
import Title from './Title'; // Ensure Title.js is in the same directory as App.js
import { Outlet } from 'react-router-dom'; // Make sure react-router-dom is installed

function App() {
  return (
    <div className="App">
      <Title 
        title="SFPOPOS" // Display the title for the page
        subtitle="San Francisco's Privately Owned Public Spaces" // Subtitle for additional context
      />
      <Outlet /> {/* This is where nested routes will be displayed */}
    </div>
  );
}

export default App;
