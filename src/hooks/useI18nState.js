import { useConcent } from "concent";
import { MODEL_NAME } from "../configs/vars";

function useI18nState(i18nStateKey) {
  const { moduleState } = useConcent({ module: MODEL_NAME });

  if (i18nStateKey) {
    return moduleState[i18nStateKey];
  }
  return moduleState;
}

export default useI18nState;
