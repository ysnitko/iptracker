import { REGION } from '../constants';

export const setCurrentRegionAC = (payload) => {
  return {
    type: REGION,
    payload: payload,
  };
};
