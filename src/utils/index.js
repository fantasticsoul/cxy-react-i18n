import runStore from "../configs/runConcent";
import runModel from "../configs/runModel";
import renderI18nKeyToText_ from "../views/index";
import { MODEL_NAME as MODEL_NAME_ } from "../configs/vars";
// function
import getI18nStates from "../functions/getState";
import getI18nReudcers from "../functions/getReducer";
import getI18nComputed from "../functions/getComputed";

// 转换文本
export const renderI18nKeyToText = renderI18nKeyToText_;

// 项目未使用concent时使用
export const i18nRun = runStore;

// 项目已使用concent时采用自注册的方式时使用
export const i18nModel = { ...runModel };
export const MODEL_NAME = MODEL_NAME_;

// 设置采用的语言
export const setLang = getI18nReudcers.setLang;

// 获取当前采用的语言
export const getLang = getI18nStates.getLang;

// 获取全部语言包对象
export const getMessage = getI18nStates.getMessage;

// 设置整体语言包
export const setMessage = getI18nReudcers.setMessage;

// 新增单个语言包
export const addMessageItem = getI18nReudcers.addMessageItem;

// 删除单个语言包
export const deleteMessageItem = getI18nReudcers.deleteMessageItem;

// 批量新增语言包转换内容
export const addMessageText = getI18nReudcers.addMessageText;

// 批量更新语言包转换内容
export const updateMessageText = getI18nReudcers.updateMessageText;

// 批量删除语言包转换内容
export const deleteMessageText = getI18nReudcers.deleteMessageText;

// 获取衍生数据
export const getComputed = getI18nComputed;

// 简写
export const im = runModel;
export const ir = i18nRun;
export const fr = renderI18nKeyToText_;

export const gl = getI18nStates.getLang;
export const sl = getI18nReudcers.setLang;

export const gm = getI18nStates.getMessage;
export const sm = getI18nReudcers.setMessage;
export const ami = getI18nReudcers.addMessageItem;
export const dmi = getI18nReudcers.deleteMessageItem;

export const at = getI18nReudcers.addMessageText;
export const ut = getI18nReudcers.updateMessageText;
export const dt = getI18nReudcers.deleteMessageText;

export const gc = getI18nComputed;
