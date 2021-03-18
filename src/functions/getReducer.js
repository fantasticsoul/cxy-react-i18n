import { reducer } from "concent";
import { MODEL_NAME } from "../configs/vars";

function setLang(langKey) {
  return reducer[MODEL_NAME].setLang(langKey);
}

function setMessage(messages) {
  return reducer[MODEL_NAME].setMessage(messages);
}

function addMessageItem(messageItems) {
  return reducer[MODEL_NAME].addMessageItem(messageItems);
}

function deleteMessageItem(messageKey) {
  return reducer[MODEL_NAME].deleteMessageItem(messageKey);
}

function addMessageText(mesageItems) {
  return reducer[MODEL_NAME].addMessageText(mesageItems);
}

function updateMessageText(mesageItems) {
  return reducer[MODEL_NAME].updateMessageText(mesageItems);
}

function deleteMessageText(messageTextKey) {
  return reducer[MODEL_NAME].deleteMessageText(messageTextKey);
}

export default {
  setLang,
  setMessage,
  addMessageItem,
  deleteMessageItem,
  addMessageText,
  updateMessageText,
  deleteMessageText,
};
