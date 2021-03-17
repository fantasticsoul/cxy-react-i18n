import React from "react";
import {
  reducer as ccReducer,
  getComputed as ccGetComputed,
  getState as ccGetState,
} from "concent";
import runStore from "../configs/runConcent";
import configureStore from "../configs/runConfigure";
import runModel from "../configs/runModel";
import RenderI18nKeyToText from "../views/index";
import { MODEL_NAME as MODEL_NAME_ } from "../configs/vars";

/**
 * 转换指定key的国际化文本
 * @param {string} i18nKey 国际化对应key
 * @returns string
 */
export const renderI18nKeyToText = (i18nKey) => {
  return <RenderI18nKeyToText i18nKey={i18nKey} />;
};

// 项目未使用concent时使用
export const i18nRun = runStore;

// 项目已使用concent时使用
export const i18nRunModel = configureStore;

// 项目已使用concent时采用自注册的方式时使用
export const i18nModel = { ...runModel };
export const MODEL_NAME = MODEL_NAME_;

// 设置采用的语言
export const setLang = (...args) => {
  return ccReducer[MODEL_NAME].setLang(...args);
};

// 获取当前采用的语言
export const getLang = () => {
  return ccGetState(MODEL_NAME).lang;
};

// 获取全部语言包对象
export const getMessage = () => {
  return ccGetState(MODEL_NAME).message;
};

// 设置整体语言包
export const setMessage = (...args) => {
  ccReducer[MODEL_NAME].setMessage(...args);
};

// 新增单个语言包
export const addMessageItem = (...args) => {
  return ccReducer[MODEL_NAME].addMessageItem(...args);
};

// 删除单个语言包
export const deleteMessageItem = (...args) => {
  return ccReducer[MODEL_NAME].deleteMessageItem(...args);
};

// 批量新增语言包转换内容
export const addMessageText = (...args) => {
  return ccReducer[MODEL_NAME].addMessageText(...args);
};

// 批量更新语言包转换内容
export const updateMessageText = (...args) => {
  return ccReducer[MODEL_NAME].updateMessageText(...args);
};

// 批量删除语言包转换内容
export const deleteMessageText = (...args) => {
  return ccReducer[MODEL_NAME].deleteMessageText(...args);
};

// 获取衍生数据
export const getComputed = (computedName) => {
  try {
    if (computedName) {
      return ccGetComputed(MODEL_NAME)[computedName];
    }
    return null;
  } catch (err) {
    return null;
  }
};

// 简写
export const im = {...runModel};
export const ir = i18nRun;
export const irm = i18nRunModel;
export const fr = renderI18nKeyToText;

export const gl = getLang;
export const sl = setLang;

export const gm = getMessage;
export const sm = setMessage;
export const ami = addMessageItem;
export const dmi = deleteMessageItem;

export const at = addMessageText;
export const ut = updateMessageText;
export const dt = deleteMessageText;

export const gc = getComputed;
