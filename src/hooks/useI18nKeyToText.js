import { useConcent } from "concent";
import { MODEL_NAME } from "../configs/vars";

function useI18nKeyToText(i18nKey) {
  const { moduleComputed } = useConcent({ module: MODEL_NAME });

  const { i18nMessage } = moduleComputed;

  if (i18nKey && i18nMessage[i18nKey]) {
    return i18nMessage[i18nKey];
  } else {
    return "";
  }
}

export default useI18nKeyToText;
