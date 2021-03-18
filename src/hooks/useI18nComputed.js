import { useConcent } from "concent";
import { MODEL_NAME } from "../configs/vars";

function useI18nState(computedKey) {
  const { moduleComputed } = useConcent({ module: MODEL_NAME });
  if (computedKey) {
    return moduleComputed[computedKey];
  }
  return moduleComputed;
}

export default useI18nState;
