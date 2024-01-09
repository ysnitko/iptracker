import { REGION } from "../constants";

const currentRegionReducer = (state = { info: {} }, { type, payload }) => {
  switch (type) {
    case REGION:
      return { ...state, info: payload };
    default:
      return state;
  }
};

export default currentRegionReducer;
