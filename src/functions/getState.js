import { getState } from "concent";
import { MODEL_NAME } from "../configs/vars";

function getLang() {
  return getState(MODEL_NAME).lang;
}

function getMessage() {
  return getState(MODEL_NAME).message;
}

export default {
  getLang,
  getMessage,
};
