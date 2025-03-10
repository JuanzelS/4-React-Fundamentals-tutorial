// src/POPOSSpace.js

import React from 'react';
import './POPOSSpace.css'; // Import the CSS for styling

function POPOSSpace(props) {
  const { name, image, address } = props;
  return (
    <div className="POPOSSpace">
      <h1>{name}</h1> {/* Name appears above the image */}
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          alt={name}
          className="space-image"
        />
      </div>
      <div className="address">{address}</div>
    </div>
  );
}

export default POPOSSpace;
