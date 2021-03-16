import { useConcent } from "concent";

export default function RenderI18nKeyToText(props) {
  const { i18nKey } = props;

  const { moduleComputed } = useConcent({ module: "I18n" });

  const { i18nMessage } = moduleComputed;

  if (i18nKey && i18nMessage[i18nKey]) {
    return i18nMessage[i18nKey];
  } else {
    return i18nKey;
  }
}
