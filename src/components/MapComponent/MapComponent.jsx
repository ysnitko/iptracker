import React from 'react';
import LocationMarker from '../LocationMarker/LocationMarker';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapComponent = ({ position, setPosition }) => {
  return (
    <MapContainer
      className="h-dvh w-full z-0"
      zoom={10}
      center={position}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      <LocationMarker position={position} setPosition={setPosition} />
    </MapContainer>
  );
};

export default MapComponent;
