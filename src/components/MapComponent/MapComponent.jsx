import React, { useState } from "react";
import LocationMarker from "../LocationMarker/LocationMarker";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = () => {
  // const [mapSettings, setMapSettings] = useState({
  //   lat: 55.405345,
  //   lng: 23.530685,
  //   zoom: 10,
  // });
  let center = [23.530685, 55.405345];
  return (
    <MapContainer
      className="h-dvh w-full z-0"
      zoom={10}
      center={center}
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
      <LocationMarker />
    </MapContainer>
  );
};

export default MapComponent;
