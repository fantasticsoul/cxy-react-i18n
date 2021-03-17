import { useConcent } from "concent";
import { MODEL_NAME } from "../configs/vars";

export default function RenderI18nKeyToText(props) {
  const { i18nKey } = props;

  const { moduleComputed } = useConcent({ module: MODEL_NAME });

  const { i18nMessage } = moduleComputed;

  if (i18nKey && i18nMessage[i18nKey]) {
    return i18nMessage[i18nKey];
  } else {
    return i18nKey;
  }
}
