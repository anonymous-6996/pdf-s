import React, { useState } from 'react';

function GeoLocation() {
  const [coordinates, setCoordinates] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setCoordinates("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    setCoordinates(`${position.coords.latitude}, ${position.coords.longitude}`);
  };

  return (
    <div>
      <h1>HTML Geolocation</h1>
      <p>Click the button to get your coordinates.</p>
      <button onClick={getLocation}>Try It</button>
      <p>{coordinates}</p>
    </div>
  );
}

export default GeoLocation;
