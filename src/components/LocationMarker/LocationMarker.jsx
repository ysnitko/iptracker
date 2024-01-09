import React from "react";
import { useSelector } from "react-redux";
import { Marker, Popup } from "react-leaflet";

function LocationMarker() {
  const position = useSelector(
    (store) => store?.currentCoordinatesReducer?.position
  );

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default LocationMarker;
