import React, { useState } from 'react';
import Header from './components/Header/Header';
import MapComponent from './components/MapComponent/MapComponent';

function App() {
  const [position, setPosition] = useState({
    lat: '55.405223',
    lng: '23.530685',
  });

  return (
    <div className="font-['Rubik', sans-serif]">
      <Header position={position} setPosition={setPosition} />
      <MapComponent setPosition={setPosition} position={position} />
    </div>
  );
}

export default App;
