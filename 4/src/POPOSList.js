// src/POPOSList.js

import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css'; // Import the CSS file for styling

function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />
      <POPOSSpace
        name="100 Pine Street"
        address="100 Pine St."
        image="100-pine.jpg"
      />
      <POPOSSpace
        name="101 Califorina Street"
        address="101 Califorina St."
        image="101-california.jpg"
      />
      <POPOSSpace
        name="343 sansome roof garden"
        address=" 343 Sansome St."
        image="343-sansome-roof-garden.jpg"
      />
      <POPOSSpace
        name="525 Market Street Plaza"
        address="525 Market St."
        image="525-market-street-plaza.jpg"
      />
      <POPOSSpace
        name="citigroup center"
        address="1 Sansome St."
        image="citigroup-center.jpg"
      />
    </div>
  );
}

export default POPOSList;
