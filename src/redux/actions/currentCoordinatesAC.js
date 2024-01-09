import { COORDINATES } from "../constants";

export const currentCoordinatesAC = (payload) => {
  return {
    type: COORDINATES,
    payload: payload,
  };
};
