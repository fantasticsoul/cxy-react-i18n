import { getComputed } from "concent";
import { MODEL_NAME } from "../configs/vars";

function getComputeds(computedKey) {
  return getComputed(MODEL_NAME)[computedKey];
}

export default {
  getComputeds,
};
