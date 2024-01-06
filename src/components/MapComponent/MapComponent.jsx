import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const MapComponent = () => {
  const [mapSettings, setMapSettings] = useState({
    lat: 55.405345,
    lng: 23.530685,
    zoom: 10,
  });
  let center = [mapSettings.lat, mapSettings.lng];
  return (
    <MapContainer
      className="h-dvh w-full z-0"
      zoom={mapSettings.zoom}
      center={center}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapComponent;
