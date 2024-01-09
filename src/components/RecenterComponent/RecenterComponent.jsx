import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMap } from "react-leaflet";

const RecenterComponent = () => {
  const position = useSelector(
    (store) => store.currentCoordinatesReducer.position
  );
  const map = useMap();
  useEffect(() => {
    map.setView([position.lat, position.lng]);
  }, [map, position.lat, position.lng]);
  return null;
};

export default RecenterComponent;
