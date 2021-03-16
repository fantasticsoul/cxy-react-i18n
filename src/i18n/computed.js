/**
 * 当前使用的语言包
 */
export const i18nMessage = {
  fn: ({ lang, message }, o, fnCtx) => {
    try {
      return message[lang] ? message[lang] : {};
    } catch (error) {
      console.warn(`cxy-react-i18n error:`, error);
      return {};
    }
  },
  depKeys: ["lang", "message"],
  compare: true,
};

/**
 * 当前所有的语言包类型对象
 */
export function i18nLangObj({ message }) {
  try {
    const lang = {};
    for (let key in message) {
      lang[key] = key;
    }
    return lang;
  } catch (err) {
    return {};
  }
}

/**
 * 当前所有的语言包类型数组
 */
export function i18nLangKey({ message }) {
  try {
    return Object.keys(message);
  } catch (err) {
    return [];
  }
}

/**
 * 当前语言包内容的key值
 * @returns i18n message key to array
 */
export function I18nMessageKeys({ message }, o, f) {
  try {
    const { i18nLangKey } = f.cuVal;
    if (i18nLangKey[0]) {
      return Object.keys(message[i18nLangKey[0]]);
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
}
