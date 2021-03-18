import { useConcent } from "concent";
import { MODEL_NAME } from "../configs/vars";

function useI18nState() {
  const { mr, moduleReducer } = useConcent({ module: MODEL_NAME });

  return mr || moduleReducer;
}

export default useI18nState;
