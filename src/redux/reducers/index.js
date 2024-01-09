import { combineReducers } from "redux";
import currentRegionReducer from "./currentRegion";
import currentCoordinatesReducer from "./currentCoordinates";

const reducer = combineReducers({
  currentRegionReducer,
  currentCoordinatesReducer,
});

export default reducer;
