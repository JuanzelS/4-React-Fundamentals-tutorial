import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css'; // Import the CSS file for styling
import data from './sfpopos-data.json'; // Import the data from the JSON file

function POPOSList() {
  return (
    <div className="POPOSList">
      {data.map((space, index) => (
        <POPOSSpace
          key={index}
          name={space.name}
          address={space.address}
          image={space.image}
        />
      ))}
    </div>
  );
}

export default POPOSList;


