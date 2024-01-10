import React from "react";
import { useSelector } from "react-redux";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconImage from "../../assets/images/icon-location.svg";

function LocationMarker() {
  const position = useSelector(
    (store) => store?.currentCoordinatesReducer?.position
  );

  const iconMarker = new L.icon({
    iconUrl: iconImage,
    iconSize: [46, 56],
  });

  return position === null ? null : (
    <Marker position={position} icon={iconMarker}>
      <Popup>it's here</Popup>
    </Marker>
  );
}

export default LocationMarker;
