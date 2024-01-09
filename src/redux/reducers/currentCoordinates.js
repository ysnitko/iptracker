import { COORDINATES } from "../constants";

const currentCoordinatesReducer = (
  state = {
    position: {
      lat: "",
      lng: "",
    },
  },
  { type, payload }
) => {
  switch (type) {
    case COORDINATES:
      return { ...state, position: payload };
    default:
      return state;
  }
};

export default currentCoordinatesReducer;
