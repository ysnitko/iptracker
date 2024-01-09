import { REGION } from "../constants";

export const setCurrenRegiontAC = (payload) => {
  return {
    type: REGION,
    payload: payload,
  };
};
