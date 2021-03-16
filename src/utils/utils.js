/**
 * 判断类型
 * @param {*} target
 */
export function getType(target) {
  let ret = typeof target;
  let template = {
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Number]": "number",
    "[object Boolean]": "boolean",
    "[object String]": "string",
  };

  if (target === null) {
    return "null";
  } else if (ret === "object") {
    let str = Object.prototype.toString.call(target);
    return template[str];
  } else {
    return ret;
  }
}

/**
 * 深拷贝
 * @param target 拷贝对象
 */
export function deepClone(target) {
  var result;
  if (typeof target === "object") {
    if (Array.isArray(target)) {
      result = [];
      for (var i in target) {
        result.push(deepClone(target[i]));
      }
    } else if (target === null) {
      result = null;
    } else if (target.constructor === RegExp) {
      result = target;
    } else {
      result = {};
      for (var l in target) {
        result[l] = deepClone(target[l]);
      }
    }
  } else {
    result = target;
  }
  return result;
}
