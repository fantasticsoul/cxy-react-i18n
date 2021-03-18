import * as functions from "./utils/index";
// hooks
import useI18nState from "./hooks/useI18nState";
import useI18nReducer from "./hooks/useI18nReducer";
import useI18nComputed from "./hooks/useI18nComputed";
import useI18nKeyToText from "./hooks/useI18nKeyToText";

const xposeds = {
  ...functions,
  // hooks
  useI18nState,
  useI18nReducer,
  useI18nComputed,
  useI18nKeyToText,
};

export default xposeds;
