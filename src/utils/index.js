import {
  reducer as ccReducer,
  getComputed as ccGetComputed,
  getState as ccGetState,
} from "concent";
import runStore from "../configs/runConcent";
import RenderI18nKeyToText from "../views/index";
import React from "react";
/**
 * 转换指定key的国际化文本
 * @param {string} i18nKey 国际化对应key
 * @returns string
 */

export const renderI18nKeyToText = (i18nKey) => {
  return <RenderI18nKeyToText i18nKey={i18nKey} />;
};
// 注册机
export const i18nRun = runStore;
// 语言
export const setLang = (...args) => {
  return ccReducer.I18n.setLang(...args);
};

// 语言包
export const setMessage = (...args) => {
  ccReducer.I18n.setMessage(...args);
};
export const addMessage = (...args) => {
  return ccReducer.I18n.addMessage(...args);
};
export const deleteMessage = (...args) => {
  return ccReducer.I18n.deleteMessage(...args);
};

// 语言包文本内容
export const addMessageText = (...args) => {
  return ccReducer.I18n.addMessageText(...args);
};
export const updateMessageText = (...args) => {
  return ccReducer.I18n.updateMessageText(...args);
};
export const deleteMessageItemText = (...args) => {
  return ccReducer.I18n.deleteMessageItemText(...args);
};

// 获取数据
export const getLang = () => {
  return ccGetState("I18n").lang;
};
export const getMessage = () => {
  return ccGetState("I18n").message;
};
export const getComputed = (computedName) => {
  try {
    if (computedName) {
      return ccGetComputed("I18n")[computedName];
    }
    return null;
  } catch (err) {
    return null;
  }
};

// 简写
export const ir = i18nRun;
export const fr = renderI18nKeyToText;

export const gl = getLang;
export const sl = setLang;

export const gm = getMessage;
export const sm = setMessage;
export const am = addMessage;
export const dm = deleteMessage;

export const at = addMessageText;
export const ud = updateMessageText;
export const dt = deleteMessageItemText;

export const gc = getComputed;
