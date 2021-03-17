import { configure } from "concent";
import { MODEL_NAME } from "./vars";
import store from "../i18n/index";

const configureStore = () => {
  return configure(MODEL_NAME, store);
};

export default configureStore;
