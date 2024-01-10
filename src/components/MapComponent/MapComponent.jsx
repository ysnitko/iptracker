import React from 'react';
import { useSelector } from 'react-redux';
import LocationMarker from '../LocationMarker/LocationMarker';
import { MapContainer, TileLayer } from 'react-leaflet';
import RecenterComponent from '../RecenterComponent/RecenterComponent';

const MapComponent = () => {
  const position = useSelector(
    (store) => store.currentCoordinatesReducer.position
  );

  return (
    <MapContainer
      className="h-dvh w-full z-0"
      center={[position.lat, position.lng]}
      zoom={10}
      scrollWheelZoom={true}
      dragging={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker />
      <RecenterComponent />
    </MapContainer>
  );
};

export default MapComponent;
