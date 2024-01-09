import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currentCoordinatesAC } from '../../redux/actions/currentCoordinatesAC';
import LocationMarker from '../LocationMarker/LocationMarker';
import { MapContainer, TileLayer } from 'react-leaflet';
import RecenterComponent from '../RecenterComponent/RecenterComponent';

const MapComponent = () => {
  const position = useSelector(
    (store) => store.currentCoordinatesReducer.position
  );
  const dispatch = useDispatch();
  const info = useSelector((store) => store.currentRegionReducer.info);

  useEffect(() => {
    fetch(
      `http://api.positionstack.com/v1/forward?access_key=4fef2a2546a691d417d1b443c7a4d405&query=${info.location?.region}`
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch(
          currentCoordinatesAC({
            lat: data.data[0].latitude,
            lng: data.data[0].longitude,
          })
        )
      );
  }, [dispatch, info.location?.region]);

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
