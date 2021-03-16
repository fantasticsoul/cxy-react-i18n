'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

const MODULE_GLOBAL = '$$global';
const MODULE_DEFAULT = '$$default';
const MODULE_CC = '$$cc'; // do not consider symbol as MODULE_VOID

const MODULE_VOID = '$$concent_void_module_624313307';
const MODULE_CC_ROUTER = '$$CONCENT_ROUTER'; // component type

const CC_CLASS = '$$CcClass';
const CC_HOOK = '$$CcHook'; // component ins type

/** use CcFragment initialize a component instance in jsx directly */

const CC_FRAGMENT = '$$CcFrag';
/** use Ob to initialize a component instance in jsx directly */

const CC_OB = '$$CcOb';
/**
 * use api register、useConcent to create component firstly, 
 * then use the customized component to initialize a component instance in jsx
 */

const CC_CUSTOMIZE = '$$CcCust';
const CC_PREFIX = '$$Cc';
const CC_DISPATCHER = '$$Dispatcher';
const CCSYNC_KEY = Symbol('__for_sync_param_ccsync__');
const SIG_FN_START = 10;
const SIG_FN_END = 11;
const SIG_FN_QUIT = 12;
const SIG_FN_ERR = 13;
const SIG_MODULE_CONFIGURED = 14;
const SIG_STATE_CHANGED$1 = 15;
const SIG_ASYNC_COMPUTED_START = 30;
const SIG_ASYNC_COMPUTED_END = 31;
const SIG_ASYNC_COMPUTED_ERR = 32;
const SIG_ASYNC_COMPUTED_BATCH_START = 33;
const SIG_ASYNC_COMPUTED_BATCH_END = 34;
const RENDER_NO_OP$1 = 1;
const RENDER_BY_KEY$1 = 2;
const RENDER_BY_STATE$1 = 3;
const FOR_CUR_MOD$1 = 1;
const FOR_ANOTHER_MOD$1 = 2; // 暂时用不到
// export const EFFECT_AVAILABLE = 1;
// export const EFFECT_STOPPED = 0;

const DISPATCH = 'dispatch';
const SET_STATE$1 = 'setState';
const SET_MODULE_STATE = 'setModuleState';
const FORCE_UPDATE$1 = 'forceUpdate';
const INVOKE = 'invoke';
const SYNC = 'sync';
const CATE_MODULE = 'module';
const CATE_REF = 'ref';
const FN_CU = 'computed';
const FN_WATCH = 'watch';
const ERR = {
  CC_MODULE_NAME_DUPLICATE: 1002,
  CC_MODULE_NOT_FOUND: 1012,
  CC_DISPATCH_STRING_INVALID: 1013,
  CC_DISPATCH_PARAM_INVALID: 1014,
  CC_MODULE_NOT_CONNECTED: 1015,
  CC_CLASS_KEY_DUPLICATE: 1100,
  CC_CLASS_INSTANCE_KEY_DUPLICATE: 1200,
  CC_STORED_KEYS_NEED_CCKEY: 1207,
  CC_REDUCER_NOT_A_FUNCTION: 1503
};
const ERR_MESSAGE = {
  [ERR.CC_MODULE_NAME_DUPLICATE]: 'module name duplicate!',
  [ERR.CC_MODULE_NOT_FOUND]: `module not found!`,
  [ERR.CC_DISPATCH_STRING_INVALID]: `when type param is string, it must be one of these format: (fnName)、(moduleName)/(fnName)`,
  [ERR.CC_DISPATCH_PARAM_INVALID]: `dispatch param type is invalid, it must be string or object`,
  [ERR.CC_MODULE_NOT_CONNECTED]: `module not been connected by ref`,
  [ERR.CC_CLASS_INSTANCE_KEY_DUPLICATE]: `props.ccKey duplicate`,
  [ERR.CC_STORED_KEYS_NEED_CCKEY]: 'you must explicitly specify a ccKey for ccInstance when set storedKeys!',
  [ERR.CC_CLASS_KEY_DUPLICATE]: 'ccClassKey duplicate!',
  [ERR.CC_REDUCER_NOT_A_FUNCTION]: `reducer must be a function!`
};
const NOT_MOUNT = 1;
const MOUNTED$1 = 2; // 已挂载未卸载

const UNMOUNTED$1 = 3;

var _cst = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MODULE_GLOBAL: MODULE_GLOBAL,
  MODULE_DEFAULT: MODULE_DEFAULT,
  MODULE_CC: MODULE_CC,
  MODULE_VOID: MODULE_VOID,
  MODULE_CC_ROUTER: MODULE_CC_ROUTER,
  CC_CLASS: CC_CLASS,
  CC_HOOK: CC_HOOK,
  CC_FRAGMENT: CC_FRAGMENT,
  CC_OB: CC_OB,
  CC_CUSTOMIZE: CC_CUSTOMIZE,
  CC_PREFIX: CC_PREFIX,
  CC_DISPATCHER: CC_DISPATCHER,
  CCSYNC_KEY: CCSYNC_KEY,
  SIG_FN_START: SIG_FN_START,
  SIG_FN_END: SIG_FN_END,
  SIG_FN_QUIT: SIG_FN_QUIT,
  SIG_FN_ERR: SIG_FN_ERR,
  SIG_MODULE_CONFIGURED: SIG_MODULE_CONFIGURED,
  SIG_STATE_CHANGED: SIG_STATE_CHANGED$1,
  SIG_ASYNC_COMPUTED_START: SIG_ASYNC_COMPUTED_START,
  SIG_ASYNC_COMPUTED_END: SIG_ASYNC_COMPUTED_END,
  SIG_ASYNC_COMPUTED_ERR: SIG_ASYNC_COMPUTED_ERR,
  SIG_ASYNC_COMPUTED_BATCH_START: SIG_ASYNC_COMPUTED_BATCH_START,
  SIG_ASYNC_COMPUTED_BATCH_END: SIG_ASYNC_COMPUTED_BATCH_END,
  RENDER_NO_OP: RENDER_NO_OP$1,
  RENDER_BY_KEY: RENDER_BY_KEY$1,
  RENDER_BY_STATE: RENDER_BY_STATE$1,
  FOR_CUR_MOD: FOR_CUR_MOD$1,
  FOR_ANOTHER_MOD: FOR_ANOTHER_MOD$1,
  DISPATCH: DISPATCH,
  SET_STATE: SET_STATE$1,
  SET_MODULE_STATE: SET_MODULE_STATE,
  FORCE_UPDATE: FORCE_UPDATE$1,
  INVOKE: INVOKE,
  SYNC: SYNC,
  CATE_MODULE: CATE_MODULE,
  CATE_REF: CATE_REF,
  FN_CU: FN_CU,
  FN_WATCH: FN_WATCH,
  ERR: ERR,
  ERR_MESSAGE: ERR_MESSAGE,
  NOT_MOUNT: NOT_MOUNT,
  MOUNTED: MOUNTED$1,
  UNMOUNTED: UNMOUNTED$1
});

/**
 * 为避免cc-context文件里调用的方法和自身产生循环引用，将moduleName_stateKeys_单独拆开放置到此文件
 * 如果还有别的类似循环引用产生，都可以像moduleName_stateKeys_一样单独拆出来放置为一个文件
 */

const moduleName2stateKeys$2 = {
  [MODULE_DEFAULT]: []
}; // 映射好模块的状态所有key并缓存住，用于提高性能

const _computedValues$5 = {
  // 辅助暴露给用户使用来获取计算结果的容器
  [MODULE_GLOBAL]: {},
  [MODULE_DEFAULT]: {},
  [MODULE_CC]: {},
  [MODULE_VOID]: {}
};
const _computedRawValues$1 = {
  // 辅助存储计算结果的容器
  [MODULE_GLOBAL]: {},
  [MODULE_DEFAULT]: {},
  [MODULE_CC]: {},
  [MODULE_VOID]: {}
};
const _computedDep$1 = {};
const _computedRaw$1 = {};
var computed$1 = {
  _computedRawValues: _computedRawValues$1,
  // 在 init-module-computed 时，会将key对应的值赋为经defineProperty处理过的对象
  _computedValues: _computedValues$5,
  _computedRaw: _computedRaw$1,
  _computedDep: _computedDep$1,
  getRootComputedValue: () => _computedValues$5,
  getRootComputedDep: () => _computedDep$1,
  getRootComputedRaw: () => _computedRaw$1
};

/** watch section */
const _watchDep = {};
const _watchRaw = {};
const watch$1 = {
  _watchRaw,
  _watchDep,
  getRootWatchDep: () => _watchDep,
  getRootWatchRaw: () => _watchRaw
};

// 后续在逐步迁移其他的
var runtimeVar$6 = {
  asyncCuKeys: [],
  // if isStrict is true, every error will be throw out instead of console.error, 
  // but this may crash your app, make sure you have a nice error handling way,
  // like componentDidCatch in react 16.*
  isStrict: false,
  isDebug: false,
  log: true,
  alwaysRenderCaller: true,
  computedCompare: false,
  // 针对object值的比较规则
  watchCompare: false,
  // 针对object值的比较规则
  watchImmediate: false,
  bindCtxToMethod: false,
  extractModuleChangedState: true,
  extractRefChangedState: false,
  // 对于triggerReactSetState调用，当judgeStateChangedForRef为true时，触发__$$ccSetState 前，提取真正发生变化的值
  // 对于saveSharedState调用，提取真正发生变化的值作为sharedState，透传给其他实例
  // object类型值的比较规则默认是 false
  // false: 不比较，只要set了就提取出来
  // true: 比较，只有和前一刻的值不一样就提取出来
  objectValueCompare: false,
  // 非object类型值的比较规则默认是 true，
  // false: 不比较，只要set了就提取出来
  // true: 只有和前一刻的值不一样就提取出来
  nonObjectValueCompare: true
};

const CU_KEY = Symbol('cuk');
const UNSTART = '0';
const START = '1';
const END = '2';
const FN = 'function';
const OBJ = 'object';
const INAF = `is not a ${FN}`;
const INAJ = 'is not a plain json object!';
const STR_ARR_OR_STAR = 'should be an string array or *!';

/* eslint-disable */

const cer = (...args) => runtimeVar$6.log && console.error(...args);

const protoToString = Object.prototype.toString;
function noop$2() {}
function isValueNotNull$1(value) {
  return !(value === null || value === undefined);
}
function isObjectNotNull(object) {
  if (object === null || object === undefined) {
    return false;
  }

  if (okeys$e(object).length > 0) {
    return true;
  }

  return false;
}
function isObjectNull$3(object) {
  return !isObjectNotNull(object);
}
function isBool$1(val) {
  return typeof val === 'boolean';
}
function isObject$2(obj) {
  if (!obj) return false; // undefined null etc...

  const str = protoToString.call(obj); // !!!编译后的对象可能重写了toStringTag Symbol(Symbol.toStringTag): "Module"

  return str === '[object Object]' || str === '[object Module]';
}
function isArray(obj) {
  return Array.isArray(obj);
} // isPJO is short of isPlainJsonObject

function isPJO$7(obj, canBeArray = false) {
  const isArr = isArray(obj);
  const isObj = isObject$2(obj);
  return canBeArray ? isArr || isObj : isObj;
}
function isFn$4(maybeFn) {
  return typeof maybeFn === FN;
}
function isAsyncFn(fn, asyncKey) {
  if (!fn) return false; // @see https://github.com/tj/co/blob/master/index.js
  // obj.constructor.name === 'AsyncFunction'

  let isAsync = protoToString.call(fn) === '[object AsyncFunction]' || isFn$4(fn.then);

  if (isAsync === true) {
    return true;
  } // 有可能成降级编译成 __awaiter格式的了 或者 _regenerator


  const fnStr = fn.toString();

  if (fnStr.indexOf('_awaiter') >= 0 || fnStr.indexOf('_regenerator') >= 0) {
    return true;
  }
  /**
   * 上面的判定过程目前对这种编译结果是无效的，
   * function asyncFn(_x, _x2, _x3) {
   *     return _asyncFn.apply(this, arguments);
   *  }
   * 所以要求用户传入相应的asyncKeys来辅助判断，由runOptins里传入
   */


  if (asyncKey && runtimeVar$6.asyncCuKeys.includes(asyncKey)) {
    return true;
  }

  return false;
} // 0 算有效值, undefined null ''算空值

function isEmptyVal$1(val) {
  return !val && val !== 0;
}
function isKeyValid(obj, key) {
  return typeof key !== "symbol" && Object.prototype.hasOwnProperty.call(obj, key);
} // renderKey 可能是 IDispatchOptions

function extractRenderKey(renderKey) {
  const getRkey = key => {
    if (!key && key !== 0) return [];
    if (isArray(key)) return key;
    return null;
  };

  let targetRenderKey = getRkey(renderKey);
  if (targetRenderKey) return targetRenderKey;
  if (typeof renderKey === 'object') targetRenderKey = getRkey(renderKey.renderKey);
  if (targetRenderKey) return targetRenderKey;
  return [renderKey]; // 是一个具体的string 或 number
}
function makeError$2(code, extraMessage) {
  let message = '';
  if (typeof code === 'string') message = code;else {
    message = ERR_MESSAGE[code] || '';
  }
  if (extraMessage) message += extraMessage;
  if (!message) message = `undefined message for code:${code}`;
  const error = new Error(message);
  error.code = code;
  return error;
}
function makeCuPackedValue(isLazy, result, needCompute, fn, newState, oldState, fnCtx) {
  return {
    [CU_KEY]: 1,
    needCompute,
    fn,
    newState,
    oldState,
    fnCtx,
    isLazy,
    result
  };
}
function makeCuDepDesc$1() {
  return {
    retKey2fn: {},
    retKey2lazy: {},
    stateKey2retKeys: {},
    // 用于辅助依赖收集系统更新依赖之用，render逻辑书写 refCompute.*** moduleCompted.*** connectedCompute.yy.** 时触发
    retKey2stateKeys: {},
    fnCount: 0
  };
}
/** make ccClassContext */

function makeCcClassContext(module, ccClassKey, renderKeyClasses) {
  return {
    module,
    ccClassKey,
    renderKeyClasses
  };
} // !!! different ccClass enable own a same key

function makeUniqueCcKey$2(ccClassKey, featureStr) {
  return `${ccClassKey}$${featureStr}`;
}
function makeHandlerKey$1(ccUniqueKey, eventName, identity) {
  return `${ccUniqueKey}$${eventName}$${identity}`;
}
function isModuleNameValid$1(moduleName) {
  if (!moduleName) return false;
  return /^[\$\#\&a-zA-Z0-9_-]+$/.test(moduleName);
}
function isModuleNameCcLike$1(moduleName) {
  const name = moduleName.toLowerCase();
  return name.startsWith(MODULE_CC);
}
function verboseInfo$1(info) {
  return info ? ` --verbose-info: ${info}` : '';
}
function ccClassDisplayName$1(className) {
  return `CC(${className})`;
}
function verifyKeys$1(keys1, keys2) {
  let duplicate = false,
      notArray = false,
      keyElementNotString = false;
  if (!isArray(keys1)) return {
    duplicate,
    notArray: true,
    keyElementNotString
  };
  if (!isArray(keys2)) return {
    duplicate,
    notArray: true,
    keyElementNotString
  };
  const len1 = keys1.length;
  const len2 = keys2.length;

  outLoop: for (let i = 0; i < len1; i++) {
    const tmpKey = keys1[i];

    if (typeof tmpKey !== 'string') {
      keyElementNotString = true;
      break outLoop;
    }

    for (let j = 0; j < len2; j++) {
      const tmpKey2 = keys2[j];

      if (typeof tmpKey2 !== 'string') {
        keyElementNotString = true;
        break outLoop;
      }

      if (tmpKey2 === tmpKey) {
        duplicate = true;
        break outLoop;
      }
    }
  }

  return {
    duplicate,
    notArray,
    keyElementNotString
  };
}
function color(color = 'green') {
  return `color:${color};border:1px solid ${color}`;
}
function styleStr(str) {
  return `%c${str}`;
}

const tipStart = str => `------------ CC ${str} ------------`;

function justWarning$6(err) {
  cer(tipStart('WARNING'));

  if (err instanceof Error) {
    cer(err.message);
    cer(err.stack);
  } else cer(err);
}
function justTip$1(msg, tipColor = 'green') {
  if (!runtimeVar$6.log) return;
  console.log(tipStart('TIP'));
  console.log(`%c${msg}`, `color:${tipColor};border:1px solid ${tipColor};`);
}
function strictWarning(err) {
  cer(tipStart('WARNING'));
  cer(err);

  if (runtimeVar$6.isStrict) {
    throw err;
  }
}
function safeAdd(object, key, toAdd) {
  try {
    object[key] += toAdd;
  } catch (err) {
    object[key] = toAdd;
  }
}
function safeMinus(object, key, toMinus) {
  try {
    object[key] -= toMinus;
  } catch (err) {
    object[key] = 0;
  }
}
function safeGet$2(object, key, defaultVal = {}) {
  let childrenObject = object[key];

  if (!childrenObject) {
    childrenObject = object[key] = defaultVal;
  }

  return childrenObject;
}
function safeGetArray$1(object, key, defaultVal = []) {
  return safeGet$2(object, key, defaultVal);
}
function noDupPush$1(arr, strItem) {
  if (!arr.includes(strItem)) arr.push(strItem);
}
function safeGetThenNoDupPush(object, key, strItem) {
  const arr = safeGetArray$1(object, key);
  noDupPush$1(arr, strItem);
}
function safeAssignObjectValue(assignTo, assignFrom) {
  okeys$e(assignFrom).forEach(key => {
    assignTo[key] = assignFrom[key];
  });
}
/**
 * 把某个object赋值到container[key]的map下，map存在就直接赋值，map不存在则先创建再赋值，确保map引用无变化
 * @param {*} container 对象容器
 * @param {*} key 字段名
 * @param {*} objectToBeenAssign 等待赋值的object
 */

function safeAssignToMap$1(container, key, objectToBeenAssign) {
  let map = container[key];
  if (!map) map = container[key] = {};
  safeAssignObjectValue(map, objectToBeenAssign);
}
function computeFeature$1(ccUniqueKey, state) {
  const stateKeys = okeys$e(state);
  const stateKeysStr = stateKeys.sort().join('|');
  return `${ccUniqueKey}/${stateKeysStr}`;
}
function randomNumber(lessThan = 52) {
  const seed = Math.random();
  return parseInt(seed * lessThan);
} // 在 object[key]存在且deepClear为true时，传入的reset会被忽略
// 传入deepClear是为了保持引用不变

function clearObject(object, excludeKeys = [], reset, deepClear = false) {
  if (isArray(object)) {
    const retainKeys = [];
    excludeKeys.forEach(key => {
      if (object.includes(key)) retainKeys.push(key);
    });
    object.length = 0;
    retainKeys.forEach(key => object.push(key));
    return;
  }

  okeys$e(object).forEach(key => {
    if (excludeKeys.includes(key)) {
      // do nothing
      return;
    }

    const subMap = object[key];

    if (deepClear && subMap) {
      okeys$e(subMap).forEach(key => delete subMap[key]);
    } else {
      if (reset) object[key] = reset;else delete object[key];
    }
  });
}
function okeys$e(obj) {
  return Object.keys(obj);
}
function excludeArrStringItem(arr, toExcludeStr) {
  const idx = arr.indexOf(toExcludeStr);

  if (idx > -1) {
    const arrCopy = arr.slice();
    arrCopy.splice(idx, 1);
    return arrCopy;
  } else {
    return arr;
  }
}
function convertToStandardEvent(e) {
  let ret = null; // avoid Warning: This synthetic event is reused for performance reasons. If you're seeing this...
  // call e.persist() @see https://reactjs.org/docs/events.html#event-pooling

  if (e) {
    if (e.persist) e.persist();

    if (e.currentTarget && e.type) {
      ret = e;
    } else if (e.nativeEvent && e.target) {
      e.currentTarget = e.target;
      ret = e;
    }
  }

  return ret;
} //防止有些在线IDE，绑定失败

function bindToWindow$1(key, toBindObj, targetObj) {
  const attachToTarget = targetObj => {
    if (!window) return;
    if (targetObj) targetObj[key] = toBindObj;else window[key] = toBindObj;
  };

  if (window) {
    attachToTarget(targetObj);
  } else {
    setTimeout(() => {
      attachToTarget(targetObj);
    }, 3000);
  }
}
/**
 * 浅比较两个对象
 * come from : https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
 */

function shallowDiffers$2(a, b) {
  for (let i in a) if (!(i in b)) return true;

  for (let i in b) if (a[i] !== b[i]) return true;

  return false;
}
function shallowCopy(oriVal) {
  let newVal = oriVal;

  if (isObject$2(oriVal)) {
    newVal = { ...oriVal
    };
  } else if (isArray(oriVal)) {
    newVal = [...oriVal];
  }

  return newVal;
}
function extractChangedState$1(oldState, partialNewState, moduleOpt, force) {
  let changedState = {};
  let setted = false;
  const {
    extractRefChangedState,
    extractModuleChangedState,
    nonObjectValueCompare,
    objectValueCompare
  } = runtimeVar$6;
  const needExtractChangedState = moduleOpt ? extractModuleChangedState : extractRefChangedState; // 非模块调用

  if (!moduleOpt) {
    if (!needExtractChangedState) return partialNewState;
    if (!nonObjectValueCompare && !objectValueCompare) return partialNewState;
  }

  if (partialNewState) {
    okeys$e(partialNewState).forEach(key => {
      const oldVal = oldState[key];
      const newVal = partialNewState[key];
      const valType = typeof newVal;
      let isNotEqual = true;

      if (force === true) ; else {
        if (valType !== 'object') {
          // 比较非object类型的值
          if (nonObjectValueCompare) isNotEqual = oldVal !== newVal;
        } else {
          // 比较object类型的值
          if (objectValueCompare) isNotEqual = oldVal !== newVal;
        }
      }

      if (isNotEqual) {
        if (moduleOpt) {
          moduleOpt.prevStateContainer[key] = oldVal;
          moduleOpt.incStateVer(key);
          oldState[key] = newVal;
        }

        changedState[key] = newVal;
        setted = true;
      }
    });
  }

  return setted ? changedState : null;
}
function differStateKeys(oldState, newState) {
  const changed = [],
        setted = []; // const unchanged=[];

  okeys$e(newState).forEach(k => {
    const newVal = newState[k];

    if (newVal !== undefined) {
      setted.push(k);
      if (newVal !== oldState[k]) changed.push(k); // else unchanged.push(k);
    }
  });
  return {
    changed,
    setted
  };
}
function removeArrElements(arr, toRemoveArr) {
  const newArr = [];
  arr.forEach(item => {
    if (!toRemoveArr.includes(item)) newArr.push(item);
  });
  return newArr;
}
function getRegisterOptions$1(options = {}) {
  if (typeof options === 'string') {
    return {
      module: options
    };
  }

  if (options) {
    if (options.module) return Object.assign({
      module: MODULE_DEFAULT
    }, options);
    return Object.assign(options, {
      module: MODULE_DEFAULT
    });
  }

  return {
    module: MODULE_DEFAULT
  };
}
let ccns = '';
function setCcNamespace(name) {
  ccns = name;
}
function getCcNamespace() {
  return ccns;
}
function getWinCc() {
  if (ccns) return window.mcc[ccns];
  return window.cc;
}
function makeCommitHandler() {
  let state = null;

  const commit = partialState => {
    if (!state) state = {};
    Object.assign(state, partialState);
  };

  const clear = () => state = null;

  const getFnCommittedState = () => state;

  return {
    commit,
    clear,
    getFnCommittedState
  };
}
function isOnlineEditor() {
  let result = false;

  if (window) {
    if (window.name === 'previewFrame' //for stackblitz
    || window.__SANDBOX_DATA__ // for codesandbox
    || window.BrowserFS // for codesandbox
    ) {
        result = true;
      }
  }

  return result;
}
function makeCallInfo(module) {
  return {
    payload: null,
    renderKey: [],
    delay: -1,
    module,
    fnName: ''
  };
}
function evalState$4(state = {}) {
  const ret = isFn$4(state) ? state() : state;

  if (!isPJO$7(ret)) {
    throw new Error(`state ${INAJ}`);
  }

  return ret;
}

function _getValue(obj, keys, lastKeyIndex, keyIndex) {
  const key = keys[keyIndex];

  if (lastKeyIndex === keyIndex) {
    return obj[key];
  } else {
    return _getValue(obj[key], keys, lastKeyIndex, ++keyIndex);
  }
}

function getValueByKeyPath(obj, keyPath) {
  const keys = keyPath.split('.');
  return _getValue(obj, keys, keys.length - 1, 0);
}
function isDepKeysValid(depKeys) {
  return isFn$4(depKeys) || isArray(depKeys) || depKeys === '-' || depKeys === '*';
}
function checkDepKeys(depKeys) {
  if (depKeys && !isDepKeysValid(depKeys)) {
    throw new Error(`depKeys must be one of them(array,'*','-',fn)`);
  }
}
function makeFnDesc(fn, depKeysOrOpt, check = true) {
  // 防止显式的传递null
  const _depKeysOrOpt = depKeysOrOpt || {};

  const desc = {
    fn
  };
  const assignFrom = isDepKeysValid(_depKeysOrOpt) ? {
    depKeys: _depKeysOrOpt
  } : _depKeysOrOpt;
  check && checkDepKeys(assignFrom.depKeys);
  return Object.assign(desc, assignFrom);
}
const symbolTag = "[object Symbol]";

function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}

function isSymbol(value) {
  return typeof value === "symbol" || isObjectLike(value) && Object.prototype.toString.call(value) === symbolTag;
}
function delay(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function getErrStackKeywordLoc$1(err, keyword, offset = 0) {
  const errStack = err.stack;
  const arr = errStack.split('\n');
  const len = arr.length;
  let curLocation = '';

  for (let i = 0; i < len; i++) {
    if (arr[i].includes(keyword)) {
      curLocation = arr[i + offset];
      break;
    }
  }

  return curLocation;
}
function getVal(val, defaultVal) {
  if (val !== undefined) return val;
  return defaultVal;
}

var util = /*#__PURE__*/Object.freeze({
  __proto__: null,
  noop: noop$2,
  isValueNotNull: isValueNotNull$1,
  isObjectNotNull: isObjectNotNull,
  isObjectNull: isObjectNull$3,
  isBool: isBool$1,
  isObject: isObject$2,
  isArray: isArray,
  isPJO: isPJO$7,
  isFn: isFn$4,
  isAsyncFn: isAsyncFn,
  isEmptyVal: isEmptyVal$1,
  isKeyValid: isKeyValid,
  extractRenderKey: extractRenderKey,
  makeError: makeError$2,
  makeCuPackedValue: makeCuPackedValue,
  makeCuDepDesc: makeCuDepDesc$1,
  makeCcClassContext: makeCcClassContext,
  makeUniqueCcKey: makeUniqueCcKey$2,
  makeHandlerKey: makeHandlerKey$1,
  isModuleNameValid: isModuleNameValid$1,
  isModuleNameCcLike: isModuleNameCcLike$1,
  verboseInfo: verboseInfo$1,
  ccClassDisplayName: ccClassDisplayName$1,
  verifyKeys: verifyKeys$1,
  color: color,
  styleStr: styleStr,
  justWarning: justWarning$6,
  justTip: justTip$1,
  strictWarning: strictWarning,
  safeAdd: safeAdd,
  safeMinus: safeMinus,
  safeGet: safeGet$2,
  safeGetArray: safeGetArray$1,
  noDupPush: noDupPush$1,
  safeGetThenNoDupPush: safeGetThenNoDupPush,
  safeAssignObjectValue: safeAssignObjectValue,
  safeAssignToMap: safeAssignToMap$1,
  computeFeature: computeFeature$1,
  randomNumber: randomNumber,
  clearObject: clearObject,
  okeys: okeys$e,
  excludeArrStringItem: excludeArrStringItem,
  convertToStandardEvent: convertToStandardEvent,
  bindToWindow: bindToWindow$1,
  shallowDiffers: shallowDiffers$2,
  shallowCopy: shallowCopy,
  extractChangedState: extractChangedState$1,
  differStateKeys: differStateKeys,
  removeArrElements: removeArrElements,
  getRegisterOptions: getRegisterOptions$1,
  setCcNamespace: setCcNamespace,
  getCcNamespace: getCcNamespace,
  getWinCc: getWinCc,
  makeCommitHandler: makeCommitHandler,
  isOnlineEditor: isOnlineEditor,
  makeCallInfo: makeCallInfo,
  evalState: evalState$4,
  getValueByKeyPath: getValueByKeyPath,
  isDepKeysValid: isDepKeysValid,
  checkDepKeys: checkDepKeys,
  makeFnDesc: makeFnDesc,
  isSymbol: isSymbol,
  delay: delay,
  getErrStackKeywordLoc: getErrStackKeywordLoc$1,
  getVal: getVal
});

const defaultErrorHandler = (err, silent = false) => {
  console.error('found uncaught err, suggest config an errorHandler in run options');
  console.error(err);
  if (!silent) throw err;
};

const rh = {
  act: null,
  errorHandler: null,
  warningHandler: null,
  tryHandleError: (err, silent) => rh.errorHandler ? rh.errorHandler(err) : defaultErrorHandler(err, silent),
  tryHandleWarning: err => {
    // this kind of error will not lead to app crash, but should let developer know it
    justWarning$6(err);
    rh.warningHandler && rh.warningHandler(err);
  }
};

/* eslint-disable camelcase */
// 依赖收集写入的映射
const waKey2uKeyMap$2 = {}; // 依赖标记写入的映射，是一个实例化完成就会固化的依赖
// 不采取一开始映射好全部waKey的形式，而是采用safeGet动态添加map映射

const waKey2staticUKeyMap$2 = {};

function _mapIns$1(mapContainer, waKey, ccUniqueKey) {
  try {
    mapContainer[waKey][ccUniqueKey] = 1; //处于依赖状态
  } catch (err) {
    const map = {};
    map[ccUniqueKey] = 1;
    mapContainer[waKey] = map;
  }
}

function makeWaKey(module, stateKey) {
  return `${module}/${stateKey}`;
}
function mapIns(module, stateKey, ccUniqueKey) {
  _mapIns$1(waKey2uKeyMap$2, makeWaKey(module, stateKey), ccUniqueKey);
}
function mapInsM(modStateKey, ccUniqueKey) {
  _mapIns$1(waKey2uKeyMap$2, modStateKey, ccUniqueKey);
}
function delIns(module, stateKey, ccUniqueKey) {
  delInsM(makeWaKey(module, stateKey), ccUniqueKey);
}
function delInsM(modStateKey, ccUniqueKey) {
  try {
    delete waKey2uKeyMap$2[modStateKey][ccUniqueKey];
  } catch (err) {// do nothing
  }
}
function mapStaticIns(module, stateKey, ccUniqueKey) {
  _mapIns$1(waKey2staticUKeyMap$2, makeWaKey(module, stateKey), ccUniqueKey);
}
function mapStaticInsM(modStateKey, ccUniqueKey) {
  _mapIns$1(waKey2staticUKeyMap$2, modStateKey, ccUniqueKey);
}
function delStaticInsM(modStateKey, ccUniqueKey) {
  try {
    delete waKey2staticUKeyMap$2[modStateKey][ccUniqueKey];
  } catch (err) {// do nothing
  }
}

var waKeyMap = /*#__PURE__*/Object.freeze({
  __proto__: null,
  waKey2uKeyMap: waKey2uKeyMap$2,
  waKey2staticUKeyMap: waKey2staticUKeyMap$2,
  makeWaKey: makeWaKey,
  mapIns: mapIns,
  mapInsM: mapInsM,
  delIns: delIns,
  delInsM: delInsM,
  mapStaticIns: mapStaticIns,
  mapStaticInsM: mapStaticInsM,
  delStaticInsM: delStaticInsM
});

var module2insCount = {
  [MODULE_DEFAULT]: 0,
  [MODULE_GLOBAL]: 0
};

var lifecycle = {
  _lifecycle: {
    [MODULE_DEFAULT]: {},
    [MODULE_GLOBAL]: {}
  },
  _mountedOnce: {},
  _willUnmountOnce: {}
};

const refs = {};

/* eslint-disable camelcase */

function getCacheDataContainer() {
  return {
    module: {
      computed: {},
      watch: {}
    },
    ref: {
      computed: {},
      watch: {},
      effect: {}
    }
  };
}

let cacheArea_pickedRetKeys_ = getCacheDataContainer();

function _wrapFn(retKey, retKey2fn, isLazy) {
  const {
    fn,
    depKeys,
    sort
  } = retKey2fn[retKey];
  return {
    retKey,
    fn,
    depKeys,
    isLazy,
    sort
  };
} // asc sort


const sortCb = (o1, o2) => o1.sort - o2.sort;

function clearCachedData() {
  cacheArea_pickedRetKeys_ = getCacheDataContainer();
} // cate module | ref
// type computed | watch

function pickDepFns (isBeforeMount, cate, type, depDesc, stateModule, oldState, committedState, cUkey) {
  const moduleDep = depDesc[stateModule]; // it can be refModuleDep or moduleDep

  const pickedFns = []; // 针对type module， init-module-state时，已对_computedValueOri赋值了默认cuDesc，
  // 所以此时可以安全的直接判断非关系，而不用担心 {}对象存在

  if (isObjectNull$3(moduleDep)) return {
    pickedFns,
    setted: [],
    changed: [],
    retKey2stateKeys: {}
  };
  const {
    retKey2fn,
    retKey2lazy,
    stateKey2retKeys,
    retKey2stateKeys,
    fnCount
  } = moduleDep;
  /** 首次调用 */

  if (isBeforeMount) {
    const retKeys = okeys$e(retKey2fn);
    const setted = okeys$e(committedState);
    const changed = setted;

    if (type === 'computed') {
      return {
        pickedFns: retKeys.map(retKey => _wrapFn(retKey, retKey2fn, retKey2lazy[retKey])).sort(sortCb),
        setted,
        changed,
        retKey2stateKeys
      };
    } // for watch


    retKeys.forEach(retKey => {
      const {
        fn,
        immediate,
        depKeys,
        sort
      } = retKey2fn[retKey];
      if (immediate) pickedFns.push({
        retKey,
        fn,
        depKeys,
        sort
      });
    });
    pickedFns.sort(sortCb);
    return {
      pickedFns,
      setted,
      changed,
      retKey2stateKeys
    };
  } // 这些目标stateKey的值发生了变化


  const {
    setted,
    changed
  } = differStateKeys(oldState, committedState);

  if (setted.length === 0) {
    return {
      pickedFns,
      setted: [],
      changed: [],
      retKey2stateKeys: {}
    };
  } //用setted + changed + module 作为键，缓存对应的pickedFns，这样相同形状的committedState再次进入此函数时，方便快速直接命中pickedFns


  const cacheKey = `${setted.join(',')}|${changed.join(',')}|${stateModule}`; // 要求用户必须在setup里静态的定义完computed & watch，动态的调用computed & watch的回调因为缓存原因不会被触发

  const tmpNode = cacheArea_pickedRetKeys_[cate][type];
  const cachePool = cUkey ? safeGet$2(tmpNode, cUkey) : tmpNode;
  const cachedPickedRetKeys = cachePool[cacheKey];

  if (cachedPickedRetKeys) {
    // todo, for 2.5, call checkFnByDepPath with variable depKey_pathDepKeys_
    return {
      pickedFns: cachedPickedRetKeys.map(retKey => _wrapFn(retKey, retKey2fn, retKey2lazy[retKey])),
      setted,
      changed,
      retKey2stateKeys
    };
  }

  _pickFn(pickedFns, setted, changed, retKey2fn, stateKey2retKeys, retKey2lazy, fnCount);

  cachePool[cacheKey] = pickedFns.map(v => v.retKey); // todo, for 2.5, call checkFnByDepPath with variable depKey_pathDepKeys_

  return {
    pickedFns,
    setted,
    changed,
    retKey2stateKeys
  };
}

function _pickFn(pickedFns, settedStateKeys, changedStateKeys, retKey2fn, stateKey2retKeys, retKey2lazy, fnCount) {
  if (settedStateKeys.length === 0) return; // 把*的函数先全部挑出来, 有key的值发生变化了或者有设值行为

  const starRetKeys = stateKey2retKeys['*'];

  if (starRetKeys) {
    const isKeyValChanged = changedStateKeys.length > 0;
    starRetKeys.forEach(retKey => {
      const {
        fn,
        compare,
        depKeys,
        sort
      } = retKey2fn[retKey];
      const toPush = {
        retKey,
        fn,
        depKeys,
        isLazy: retKey2lazy[retKey],
        sort
      };

      if (compare) {
        if (isKeyValChanged) pickedFns.push(toPush);
        return;
      }

      pickedFns.push(toPush);
    });
  } // 继续遍历settedStateKeys, 挑选出剩余的目标fn（非*相关的）


  if (pickedFns.length < fnCount) {
    const retKey_picked_ = {};
    const len = settedStateKeys.length;

    for (let i = 0; i < len; i++) {
      const stateKey = settedStateKeys[i];
      const retKeys = stateKey2retKeys[stateKey]; //发生变化了的stateKey不一定在依赖列表里

      if (!retKeys) continue;
      retKeys.forEach(retKey => {
        //没有挑过的方法才挑出来
        if (!retKey_picked_[retKey]) {
          const {
            fn,
            compare,
            depKeys,
            sort
          } = retKey2fn[retKey];
          let canPick;
          const isValChanged = changedStateKeys.includes(stateKey); // 检测出发生了变化，就一定pick

          if (isValChanged) {
            canPick = true;
          } else {
            // 对于未采用 immutable写法的object是检测不出是否改变的，
            // 因为指向同一个引用，isValChanged一定是false
            // 所以如果compare 为true，则要求用户严格采用immutable写法
            // 为false的话，进入到这里，是已经set的key，canPick一定为true
            canPick = compare ? isValChanged : true;
          }

          if (canPick) {
            retKey_picked_[retKey] = true;
            pickedFns.push({
              retKey,
              fn,
              depKeys,
              isLazy: retKey2lazy[retKey],
              sort
            });
          }
        }
      });
      if (pickedFns.length === fnCount) break;
    }
  }

  pickedFns.sort(sortCb);
}

function setPartialState(partialState, state, key) {
  const value = state[key];

  if (value !== undefined) {
    partialState[key] = value;
    return true;
  }

  return false;
} // missKeyInState: true代表state含有stateKeys里不包含的key， false则不含


function extractStateByKeys (state, stateKeys = [], returnNullIfEmpty = false, needIgnored = false) {
  let partialState = {},
      ignoredStateKeys = [],
      missKeyInState = false;

  if (!isPJO$7(state)) {
    return {
      partialState: returnNullIfEmpty ? null : partialState,
      isStateEmpty: true,
      ignoredStateKeys,
      missKeyInState
    };
  }

  let isStateEmpty = true;
  const committedStateKeys = okeys$e(state);
  const cLen = committedStateKeys.length;
  const sLen = stateKeys.length;

  if (cLen >= sLen) {
    missKeyInState = cLen > sLen;
    stateKeys.forEach(key => {
      if (setPartialState(partialState, state, key)) isStateEmpty = false;
    });
    if (needIgnored) ignoredStateKeys = removeArrElements(committedStateKeys, stateKeys);
  } else {
    committedStateKeys.forEach(key => {
      if (stateKeys.includes(key)) {
        if (setPartialState(partialState, state, key)) isStateEmpty = false;
      } else {
        missKeyInState = true;
        if (needIgnored) ignoredStateKeys.push(key);
      }
    });
  }

  if (isStateEmpty && returnNullIfEmpty) partialState = null;
  return {
    partialState,
    isStateEmpty,
    ignoredStateKeys,
    missKeyInState
  };
}

/**
 * 用于传递给 computed 回调收集相关依赖
 * defComputed((newState, oldState)=>{
 *   // 此处的newState oldState即cuObState
 * })
 * @param {{[key:string]:any}} state 
 * @param {string[]} depKeys 
 */

function makeCuObState (state, depKeys) {
  return new Proxy(state, {
    get: function (target, key) {
      /**
       * 第一个isKeyValid判断，是为了防止误使用state算computed value，而触发了其他的key收集
       *   ctx.computed('count', n => {
       *     return n * 2;// 正确写法本应该是 return n.count * 2
       *    })
       *   // 本应该是 n.count * 2, 写为 n * 2 后，触发的key分别为
       *   // valueOf, toString, Symbol(...)
       */
      if (isKeyValid(target, key) && !depKeys.includes(key)) depKeys.push(key);
      return target[key];
    },
    // set: function (target, key) {
    set: function () {
      // do nothing，拒绝用户在computed回调里修改state的值
      return true;
    }
  });
}

const sigs = [SIG_FN_START, SIG_FN_END, SIG_FN_QUIT, SIG_FN_ERR, SIG_MODULE_CONFIGURED, SIG_STATE_CHANGED$1, SIG_ASYNC_COMPUTED_START, SIG_ASYNC_COMPUTED_END, SIG_ASYNC_COMPUTED_ERR, SIG_ASYNC_COMPUTED_BATCH_START, SIG_ASYNC_COMPUTED_BATCH_END];
const sig2cbs = {};
sigs.forEach(sig => sig2cbs[sig] = []);

function _pushSigCb(sigMap, sigOrSigs, cb) {
  function pushCb(sig, cb) {
    const cbs = sigMap[sig];

    if (cb) {
      cbs.push(cb);
    } else {
      console.warn(`invalid sig[${sig}]`);
    }
  }

  if (Array.isArray(sigOrSigs)) {
    sigOrSigs.forEach(sig => {
      pushCb(sig, cb);
    });
  } else {
    pushCb(sigOrSigs, cb);
  }
}

function clearCbs() {
  sigs.forEach(sig => sig2cbs[sig].length = 0);
}
function send(sig, payload) {
  const cbs = sig2cbs[sig];
  cbs.forEach(cb => {
    try {
      cb({
        sig,
        payload
      });
    } catch (err) {
      // plugin error should not abort dispatch process
      // for letting plugin error be isolate, I have to put try catch block in forEach loop
      rh.tryHandleError(err, true);
    }
  });
}
function on(sigOrSigs, cb) {
  _pushSigCb(sig2cbs, sigOrSigs, cb);
}

/* eslint-disable */
const {
  waKey2uKeyMap: waKey2uKeyMap$1,
  waKey2staticUKeyMap: waKey2staticUKeyMap$1
} = waKeyMap;

function triggerReRender(ref) {
  if (!ref) return; // 对于挂载好了还未卸载的实例，才有必要触发重渲染

  if (ref.__$$ms === MOUNTED$1) {
    const refCtx = ref.ctx;

    refCtx.__$$ccForceUpdate();
  }
}

async function executeCuInfo(cuInfo) {
  try {
    const fns = cuInfo.fns;
    const len = fns.length;
    if (len === 0) return;
    await delay();
    const {
      sourceType,
      ref,
      module,
      fnAsync,
      fnRetKeys,
      cuRetContainer,
      retKey2stateKeys
    } = cuInfo;
    const isModule = sourceType !== CATE_REF;
    let stateKeys = [];
    let curRetKey = '';

    try {
      send(SIG_ASYNC_COMPUTED_BATCH_START, {
        module
      });

      for (let i = 0; i < len; i++) {
        const fn = fns[i];
        const isAsync = fnAsync[i];
        const retKey = fnRetKeys[i];
        curRetKey = retKey;
        let ret;
        send(SIG_ASYNC_COMPUTED_START, {
          module,
          retKey
        });

        if (isAsync) {
          ret = await fn();
        } else {
          ret = fn();
        }

        cuRetContainer[retKey] = makeCuPackedValue(false, ret);
        send(SIG_ASYNC_COMPUTED_END, {
          module,
          retKey
        });
        if (isModule) stateKeys = stateKeys.concat(retKey2stateKeys[retKey]);
      }

      send(SIG_ASYNC_COMPUTED_BATCH_END, {
        module
      });
    } catch (err) {
      if (isModule) {
        const toSend = {
          module,
          err,
          retKey: curRetKey
        };
        send(SIG_ASYNC_COMPUTED_ERR, toSend);
        send(SIG_ASYNC_COMPUTED_BATCH_END, toSend);
      }

      rh.tryHandleError(err);
    }

    if (isModule) {
      //  让所有正确执行完毕的计算函数关联到的实例能够被触发重渲染
      stateKeys = Array.from(new Set(stateKeys));
      const uKeyMap = {};
      stateKeys.forEach(stateKey => {
        const waKey = `${module}/${stateKey}`; // 利用assign不停的去重

        Object.assign(uKeyMap, waKey2uKeyMap$1[waKey], waKey2staticUKeyMap$1[waKey]);
      });
      const uKeys = okeys$e(uKeyMap);
      uKeys.forEach(refKey => {
        triggerReRender(refs[refKey]);
      });
    } else {
      triggerReRender(ref);
    }
  } catch (err) {
    rh.tryHandleError(err);
  }
}

/** @typedef {import('../../types-inner').IRefCtx} IRefCtx */
//  cur: {} compare: {a:2, b:2, c:2} compareCount=3 nextCompare:{}
//
//  receive cur in rendering period as below
//  cur: {a:'val', c:'val', d:'val'}
//
//  after render
//  cur: {a:1, c:1, d:1} compare: {a:1, b:2, c:1, d:1} compareCount=4 nextCompare:{a:2, c:2, d:2}
//
//  then concent know 'b' should delete from dep because its value is 2, 
//  if compare key count become bigger than previous render(4>3) or compare key values include 2, 
//  then cache will be expired
//
//  before next render, assign nextCompare to compare, clear cur and nextCompare
//  cur: {} compare: {a:2, c:2, d:2} compareCount=3 nextCompare:{}

function updateDep (ref, module, key, isForModule) {
  // 这个key不是模块的stateKey，则忽略依赖记录
  if (!moduleName2stateKeys$2[module].includes(key)) {
    return;
  }
  /** @type IRefCtx */


  const refCtx = ref.ctx;

  if (refCtx.__$$inBM === true // 还处于beforeMount步骤
  || refCtx.__$$renderStatus === START) {
    const ccUniqueKey = refCtx.ccUniqueKey;
    const waKey = makeWaKey(module, key); // 未挂载时，是refWatch 或者 refComputed 函数里读取了moduleComputed的值间接推导出来的依赖stateKey
    // 则写到static块里，防止依赖丢失

    if (refCtx.__$$inBM === true) {
      refCtx.__$$staticWaKeys[waKey] = 1;
      return;
    }

    if (!isForModule) {
      // for ref connect
      // 处于非自动收集状态则忽略，依赖在buildRefCtx时已记录
      if (refCtx.connect[module] !== '-') return;
      const {
        __$$curConnWaKeys,
        __$$compareConnWaKeys,
        __$$nextCompareConnWaKeys,
        __$$nextCompareConnWaKeyCount
      } = refCtx; // TODO: 考虑用 waKey 写在map里

      mapInsM(waKey, ccUniqueKey);
      __$$curConnWaKeys[module][key] = 1;
      __$$compareConnWaKeys[module][key] = 1;
      const tmpMap = __$$nextCompareConnWaKeys[module];

      if (!tmpMap[key]) {
        tmpMap[key] = 2;
        __$$nextCompareConnWaKeyCount[module]++;
      }
    } else {
      // for ref module
      // 处于非自动收集状态则忽略
      if (refCtx.watchedKeys !== '-') return;
      const {
        __$$curWaKeys,
        __$$compareWaKeys,
        __$$nextCompareWaKeys
      } = refCtx;
      mapInsM(waKey, ccUniqueKey);
      __$$curWaKeys[key] = 1;
      __$$compareWaKeys[key] = 1;

      if (!__$$nextCompareWaKeys[key]) {
        __$$nextCompareWaKeys[key] = 2;
        refCtx.__$$nextCompareWaKeyCount++;
      }
    }
  }
}

/**
 * 为每一个实例单独建立了一个获取计算结果的观察容器，方便写入依赖
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;
const {
  _computedRawValues,
  _computedValues: _computedValues$4,
  _computedRaw,
  _computedDep
} = computed$1; // refModuleCuDep 来自 ref.ctx.computedDep

function writeRetKeyDep(refModuleCuDep, ref, module, retKey, isForModule) {
  // 所有组件都自动连接到$$global模块，但是未必有对$$global模块的retKey依赖
  const retKey2stateKeys = refModuleCuDep.retKey2stateKeys || {};
  const stateKeys = retKey2stateKeys[retKey] || [];
  stateKeys.forEach(stateKey => {
    updateDep(ref, module, stateKey, isForModule);
  }); // TODO: retKey_otherModStateKeys_  ---> updateDep(ref, module, stateKey, false);
}
/** 
  此函数被以下两种场景调用，
  1 模块首次运行computed&watch时
  2 实例首次运行computed&watch时
  用于生成cuVal透传给计算函数fnCtx.cuVal,
  用户读取cuVal的结果时，收集到当前计算函对其他计算函数的依赖关系
  
    module:
    function fullName(n, o, f){
        return n.firstName + n.lastName;
    }
    
    // 此时funnyName依赖是 firstName lastName age
    function funnyName(n, o, f){
      const { fullName } = f.cuVal;
      return fullName + n.age;
    }
    
    ref:
    ctx.computed('fullName',(n, o, f)=>{
      return n.firstName + n.lastName;
    })
    
    // 此时funnyName依赖是 firstName lastName age
    ctx.computed('funnyName',(n, o, f)=>{
      const { fullName } = f.cuVal;
      return fullName + n.age;
    })
 */


function getSimpleObContainer(retKey, sourceType, fnType, module,
/**@type ICtx*/
refCtx, retKeys, referInfo) {
  let oriCuContainer, oriCuObContainer, computedRaw;

  if (CATE_MODULE === sourceType) {
    oriCuContainer = _computedRawValues[module];
    oriCuObContainer = _computedValues$4[module];
    computedRaw = _computedRaw[module];
  } else {
    oriCuContainer = refCtx.refComputedRawValues;
    oriCuObContainer = refCtx.refComputedValues;
    computedRaw = refCtx.computedRetKeyFns;
  } // create cuVal


  return new Proxy(oriCuContainer, {
    get: function (target, otherRetKey) {
      const fnInfo = `${sourceType} ${fnType} retKey[${retKey}]`; // 1 防止用户从 cuVal读取不存在的key
      // 2 首次按序执行所有的computed函数时，前面的计算函数取取不到后面的计算结果，收集不到依赖，所以这里强制用户要注意计算函数的书写顺序

      if (hasOwnProperty.call(oriCuContainer, otherRetKey)) {
        if (isAsyncFn(computedRaw[otherRetKey], `${module}/${otherRetKey}`)) {
          referInfo.hasAsyncCuRefer = true; // 不允许读取异步计算函数结果做二次计算，隔离一切副作用，确保依赖关系简单和纯粹
          // throw new Error(`${fnInfo},  get an async retKey[${otherRetKey}] from cuVal is not allowed`);
        }

        retKeys.push(otherRetKey);
      } else {
        justWarning$6(`${fnInfo} get cuVal invalid retKey[${otherRetKey}]`);
      } // 从已定义 defineProperty 的计算结果容器里获取结果


      return oriCuObContainer[otherRetKey];
    },
    set: function () {
      return true;
    }
  });
}
/**
 * 创建一个具有依赖收集行为的计算结果获取容器
 * @param {IRef} ref 
 * @param {string} module - 模块名称
 * @param {boolean} isForModule - true: belong to one module, false: connect other modules
 * @param {boolean} isRefCu - 为ref创建
 */

function makeCuRefObContainer (ref, module, isForModule = true, isRefCu = false) {
  const ctx = ref.ctx;
  const moduleCuRetContainer = _computedValues$4[module]; // 注意isRefCu为true时，beforeMount时做了相关的赋值操作，保证了读取ref.ctx下目标属性是安全的

  const oriCuContainer = isRefCu ? ctx.refComputedRawValues : _computedRawValues[module];
  if (!oriCuContainer) return {}; // refComputed 的 cuRetWrapper 是在setup执行完毕后会被替换成填充满属性的新引用 refComputedValues
  // 见 before-mount里: ctx.refComputedValues =....
  // 所以需要在get时现取，而不能在闭包作用域内提前缓存起来反复使用

  const getCuRetContainer = () => {
    return isRefCu ? ctx.refComputedValues : moduleCuRetContainer;
  }; // 为普通的计算结果容器建立代理对象


  return new Proxy(oriCuContainer, {
    get: function (target, retKey) {
      // 防止用户从 cuVal读取不存在的key
      if (hasOwnProperty.call(oriCuContainer, retKey)) {
        // 由refComputed.{keyName}取值触发
        if (isRefCu) {
          const computedDep = ref.ctx.computedDep;
          okeys$e(computedDep).forEach(m => {
            writeRetKeyDep(computedDep[m], ref, m, retKey, isForModule);
          });
        } else {
          // 由moduleComputed.{keyName} 或者 connectedComputed.{moduleName}.{keyName} 取值触发
          writeRetKeyDep(_computedDep[module], ref, module, retKey, isForModule);
        }
      } // 从已定义defineProperty的计算结果容器里获取结果


      const cuRetWrapper = getCuRetContainer();
      return cuRetWrapper[retKey];
    },
    set: function (target, retKey, value) {
      target[retKey] = value;
      return true;
    }
  });
}

/* eslint-disable camelcase */

const noCommit = (tip, asIs) => justWarning$6(`${tip} call commit or commitCu as it is ${asIs}`); // 记录某个cuRetKey引用过哪些staticCuRetKeys
// 直接引用或者间接引用过staticCuRetKey都会记录在列表内


let modCuRetKey_referStaticCuRetKeys_ = {};
let refCuRetKey_referStaticCuRetKeys_ = {};

function getCuRetKeyRSListMap(sourceType, module, ccUniqueKey) {
  if (sourceType == CATE_MODULE) {
    return safeGet$2(modCuRetKey_referStaticCuRetKeys_, module);
  } else {
    return safeGet$2(refCuRetKey_referStaticCuRetKeys_, ccUniqueKey);
  }
}

function getCuRetKeyRSList(cuRetKey, sourceType, module, ccUniqueKey) {
  const map = getCuRetKeyRSListMap(sourceType, module, ccUniqueKey);
  return safeGetArray$1(map, cuRetKey);
}

function clearCuRefer() {
  modCuRetKey_referStaticCuRetKeys_ = {};
  refCuRetKey_referStaticCuRetKeys_ = {};
}

function getCuDep(refCtx, sourceType) {
  return sourceType === CATE_REF ? refCtx.computedDep : computed$1._computedDep;
}

function setStateKeyRetKeysMap(refCtx, sourceType, fnType, stateModule, retKey, keys, isKeysDep = true) {
  if (keys.length === 0) return;
  let modDep, cuModDep;

  if (sourceType === CATE_REF) {
    // 由ref发起调用，refCtx是肯定有值的
    const computedDep = refCtx.computedDep;
    const depDesc = fnType === FN_CU ? computedDep : refCtx.watchDep;
    cuModDep = safeGet$2(computedDep, stateModule);
    modDep = safeGet$2(depDesc, stateModule);
  } else {
    const cuDep = computed$1._computedDep;
    const depDesc = fnType === FN_CU ? cuDep : watch$1._watchDep;
    cuModDep = safeGet$2(cuDep, stateModule);
    modDep = safeGet$2(depDesc, stateModule);
  }

  const stateKey2retKeys = safeGet$2(modDep, 'stateKey2retKeys');
  const retKey2stateKeys = safeGet$2(modDep, 'retKey2stateKeys');

  const updateRelationship = depKeys => {
    const stateKeys = safeGetArray$1(retKey2stateKeys, retKey);
    depKeys.forEach(sKey => {
      const retKeys = safeGetArray$1(stateKey2retKeys, sKey); // 此处判断一下retKeys，谨防用户直接在computed里操作obState, 这里拿到的sKey是一堆原型链上key，如`valueOf`等

      if (Array.isArray(retKeys) && !retKeys.includes(retKey)) retKeys.push(retKey);
      if (!stateKeys.includes(sKey)) stateKeys.push(sKey);
    });
  };

  if (isKeysDep) {
    // keys is depKeys
    updateRelationship(keys);
  } else {
    // keys is retKeys, 将retKeys里各自retKey的stateKeys转移给目标retKey
    keys.forEach(sourceRetKey => {
      // 这里取的是cu模块的retKey_stateKeys_
      const retKey2stateKeys = safeGet$2(cuModDep, 'retKey2stateKeys');
      const sourceStateKeys = retKey2stateKeys[sourceRetKey] || [];
      updateRelationship(sourceStateKeys);
    });
  }
}

function getRetKeyFnMap(refCtx, sourceType, stateModule) {
  // 始终从_computedDep 取retKey_fn_，来判断commitCu提交的retKey是否合法
  if (sourceType === CATE_REF) {
    return refCtx.computedRetKeyFns;
  } else {
    const moduleDep = computed$1._computedDep[stateModule] || {};
    return moduleDep.retKey2fn || {};
  }
}

function mapRSList(cuRetKey, referCuRetKeys, refCtx, ccUniqueKey, sourceType, stateModule) {
  const cuRetKey_referStaticCuRetKeys_ = getCuRetKeyRSListMap(cuRetKey, sourceType, stateModule);
  const retKey2fn = getRetKeyFnMap(refCtx, sourceType, stateModule);
  const referStaticCuRetKeys = safeGetArray$1(cuRetKey_referStaticCuRetKeys_, cuRetKey);
  referCuRetKeys.forEach(referCuRetKey => {
    const fnDesc = retKey2fn[referCuRetKey]; // 直接引用

    if (fnDesc.isStatic) {
      referStaticCuRetKeys.push(referCuRetKey);
    } else {
      const tmpRSList = safeGetArray$1(cuRetKey_referStaticCuRetKeys_, referCuRetKey); // 把引用的referCuRetKey对应的staticCuRetKey列表记录到当前cuRetKey的staticCuRetKey列表记录上
      // 因为computed函数是严格按需执行的，所以此逻辑能够成立

      tmpRSList.forEach(staticCuRetKey => noDupPush$1(referStaticCuRetKeys, staticCuRetKey));
    }
  });
}

const STOP_FN = Symbol('sf'); // fnType: computed watch
// sourceType: module ref
// initialDeltaCommittedState 会在整个过程里收集所有的提交状态

function executeDepFns(ref = {}, stateModule, refModule, oldState, finder, committedState, initialNewState, initialDeltaCommittedState, callInfo, isFirstCall, fnType, sourceType, computedContainer, mergeToDelta = true) {
  const refCtx = ref.ctx;
  const ccUniqueKey = refCtx ? refCtx.ccUniqueKey : ''; // while循环结束后，收集到的所有的新增或更新state

  const committedStateInWhile = {};
  const nextTickCuInfo = {
    sourceType,
    ref,
    module: stateModule,
    fns: [],
    fnAsync: [],
    fnRetKeys: [],
    cuRetContainer: computedContainer
  };
  let whileCount = 0;
  let curStateForComputeFn = committedState;
  let hasDelta = false;

  while (curStateForComputeFn) {
    whileCount++; // 因为beforeMountFlag为true的情况下，finder里调用的pickDepFns会挑出所有函数，
    // 这里必需保证只有第一次循环的时候取isFirstCall的实际值，否则一定取false，（要不然就陷入无限死循环，每一次都是true，每一次都挑出所有dep函数执行）

    const beforeMountFlag = whileCount === 1 ? isFirstCall : false;
    const {
      pickedFns,
      setted,
      changed,
      retKey2stateKeys
    } = finder(curStateForComputeFn, beforeMountFlag);
    nextTickCuInfo.retKey2stateKeys = retKey2stateKeys;
    if (!pickedFns.length) break;
    const {
      commit,
      getFnCommittedState
    } = makeCommitHandler();
    const {
      commit: commitCu,
      getFnCommittedState: getRetKeyCu,
      clear: clearCu
    } = makeCommitHandler();
    pickedFns.forEach(({
      retKey,
      fn,
      depKeys,
      isLazy
    }) => {
      const keyInfo = `${sourceType} ${fnType} retKey[${retKey}]`;
      const tip = `${keyInfo} can't`; // 异步计算的初始值

      let initialVal = '';
      let isInitialValSetted = false;
      const fnCtx = {
        retKey,
        callInfo,
        isFirstCall,
        commit,
        commitCu,
        setted,
        changed,
        // 在sourceType为module时, 如果非首次计算
        // computedContainer只是一个携带defineProperty的计算结果收集容器，没有收集依赖行为
        cuVal: computedContainer,
        committedState: curStateForComputeFn,
        deltaCommittedState: initialDeltaCommittedState,
        stateModule,
        refModule,
        oldState,
        refCtx,
        setInitialVal: () => {
          beforeMountFlag && justWarning$6(`non async ${keyInfo} call setInitialVal is unnecessary`);
        }
      }; // 循环里的首次计算且是自动收集状态，注入代理对象，收集计算&观察依赖

      const needCollectDep = beforeMountFlag && depKeys === '-'; // 用户通过cuVal读取其他计算结果时，记录cuRetKeys，用于辅助下面计算依赖

      const collectedCuRetKeys = []; // 读取newState时，记录stateKeys，用于辅助下面计算依赖

      const collectedDepKeys = []; // 对于computed，首次计算时会替换为obContainer用于收集依赖
      // !!!对于watch，immediate为true才有机会替换为obContainer收集到依赖

      const referInfo = {
        hasAsyncCuRefer: false
      };

      if (needCollectDep) {
        // 替换cuVal，以便动态的收集到computed&watch函数里读取cuVal时计算相关依赖
        fnCtx.cuVal = getSimpleObContainer(retKey, sourceType, fnType, stateModule, refCtx, collectedCuRetKeys, referInfo);
      }

      if (fnType === FN_CU) {
        const isCuFnAsync = isAsyncFn(fn, `${stateModule}/${retKey}`);

        if (isLazy || isCuFnAsync) {
          // lazyComputed 和 asyncComputed 不能调用commit commitCu，以隔绝副作用
          const asIs = isLazy ? 'lazy' : 'async computed';

          fnCtx.commit = () => noCommit(tip, asIs);

          fnCtx.commitCu = fnCtx.commit;
          if (isCuFnAsync) fnCtx.setInitialVal = val => {
            initialVal = val;
            isInitialValSetted = true; // 这里阻止异步计算函数的首次执行，交给executeAsyncCuInfo去触发

            if (beforeMountFlag) throw STOP_FN;
          };
        }

        if (isLazy) {
          computedContainer[retKey] = makeCuPackedValue(isLazy, null, true, fn, initialNewState, oldState, fnCtx);
        } else {
          let newStateArg = initialNewState,
              oldStateArg = oldState; // 首次计算时，new 和 old是同一个对象，方便用于收集depKeys

          if (needCollectDep) {
            oldStateArg = makeCuObState(initialNewState, collectedDepKeys);
            newStateArg = oldStateArg;
          } // TODO: fnCtx.connectedState 转为代理对象，用于收集到连接模块的依赖
          // 让示例 https://codesandbox.io/s/ref-watch-read-connected-state-prb4v?file=/src/App.js 正常工作
          // 不同的sourceType，创建的connectedState不一样
          // for module: fnCtx.getComputed, fnCtx.getState，
          // 此处会检查模块加载顺序，然后appendState创建一个隐含的key，然后在目标模块创建一个watch函数
          // for ref: fnCtx.connectedState, fnCtx.connectedComputed
          // 确保 (n,o,f)里的n o总是实例的state


          let computedRet; // 异步函数首次执行时才去调用它，仅为了收集依赖

          if (isCuFnAsync) {
            if (beforeMountFlag) {
              fn(newStateArg, oldStateArg, fnCtx).catch(err => {
                if (err !== STOP_FN) throw err;
              });
            }
          } else {
            computedRet = fn(newStateArg, oldStateArg, fnCtx);
          }

          if (isCuFnAsync || referInfo.hasAsyncCuRefer) {
            // 首次计算时需要赋初始化值
            if (beforeMountFlag) {
              if (!isInitialValSetted) {
                throw new Error(`async ${keyInfo} forget call setInitialVal`);
              }

              computedRet = initialVal;
            } else {
              // 不做任何新的计算，还是赋值原来的结果
              // 新的结果等待 asyncComputedMgr 来计算并触发相关实例重渲染
              computedRet = computedContainer[retKey];
            } // 替换掉setInitialVal，使其失效


            fnCtx.setInitialVal = noop$2;

            fnCtx.commit = () => noCommit(tip, 'async computed or it refers async computed ret');

            fnCtx.commitCu = fnCtx.commit; // 安排到nextTickCuInfo里，while结束后单独触发它们挨个按需计算

            nextTickCuInfo.fns.push(() => fn(newStateArg, oldStateArg, fnCtx));
            nextTickCuInfo.fnAsync.push(isCuFnAsync);
            nextTickCuInfo.fnRetKeys.push(retKey);
          } // 记录计算结果


          computedContainer[retKey] = makeCuPackedValue(false, computedRet);

          if (needCollectDep) {
            // 在computed函数里读取了newState的stateKey，需要将其记录到当前retKey的依赖列表上
            // 以便能够在相应stateKey值改变时，能够正确命中该computed函数
            setStateKeyRetKeysMap(refCtx, sourceType, FN_CU, stateModule, retKey, collectedDepKeys); // 在computed里读取cuVal里的其他retKey结果, 要将其他retKey对应的stateKeys写到当前retKey的依赖列表上，
            // 以便能够在相应stateKey值改变时，能够正确命中该computed函数

            setStateKeyRetKeysMap(refCtx, sourceType, FN_CU, stateModule, retKey, collectedCuRetKeys, false);
            mapRSList(retKey, collectedCuRetKeys, refCtx, ccUniqueKey, sourceType, stateModule);
          }
        }
      } else {
        // watch
        let tmpInitialNewState = initialNewState;
        let tmpOldState = oldState; // 首次触发watch时，才传递ob对象，用于收集依赖

        if (needCollectDep) {
          tmpInitialNewState = makeCuObState(initialNewState, collectedDepKeys); // new 和 old是同一个对象，方便用于收集depKeys

          tmpOldState = tmpInitialNewState;
        }

        fn(tmpInitialNewState, tmpOldState, fnCtx); // 首次触发watch时, 才记录依赖

        if (needCollectDep) {
          // 在watch函数里读取了newState的stateKey，需要将其记录到当前watch retKey的依赖列表上
          // 以便能够在相应stateKey值改变时，能够正确命中该watch函数
          setStateKeyRetKeysMap(refCtx, sourceType, FN_WATCH, stateModule, retKey, collectedDepKeys); // 在watch里读取了cuVal里的retKey结果，要将这些retKey对应的stateKey依赖附加到当前watch retKey的依赖列表上，
          // 以便能够在相应stateKey值改变时，能够正确命中该watch函数

          setStateKeyRetKeysMap(refCtx, sourceType, FN_WATCH, stateModule, retKey, collectedCuRetKeys, false);
        }
      } // refCompute&refWatch 里获取state、moduleState、connectedState的值收集到的depKeys要记录为ref的静态依赖


      if (needCollectDep && sourceType === CATE_REF) {
        collectedDepKeys.forEach(key => refCtx.__$$staticWaKeys[makeWaKey(stateModule, key)] = 1); // 注：refWatch直接读取了moduleComputed 或者 connectedComputed的值时也收集到了依赖
        // 逻辑在updateDep里判断__$$isBM来确定是不是首次触发
      } // 对于模块计算过程，fn里调用committedCu，computedContainer是moduleComputed结果容器，
      // 对于实例计算过程，fn里调用committedCu来说，computedContainer是refComputed结果容器
      // 每一个retKey返回的committedCu都及时处理掉，因为下面setStateKeyRetKeysMap需要对此时的retKey写依赖


      const committedCuRet = getRetKeyCu();

      if (committedCuRet) {
        const retKey2fn = getRetKeyFnMap(refCtx, sourceType, stateModule);
        okeys$e(committedCuRet).forEach(cuRetKey => {
          // 模块计算函数里调用commitCu只能修改模块计算retKey
          // 实例计算函数里调用commitCu只能修改实例计算retKey
          const fnDesc = retKey2fn[cuRetKey];
          if (!fnDesc) justWarning$6(`commitCu:${tip} commit [${cuRetKey}], it is not defined`); // 由committedCu提交的值，可以统一当作非lazy值set回去，方便取的时候直接取
          else {
              // 检查提交目标只能是静态的cuRetKey
              if (fnDesc.isStatic) {
                const RSList = getCuRetKeyRSList(cuRetKey, sourceType, stateModule, ccUniqueKey);

                if (RSList.includes(cuRetKey)) {
                  // 直接或间接引用了这个cuRetKey，就不能去改变它，以避免死循环
                  justWarning$6(`commitCu:${tip} change [${cuRetKey}], [${retKey}] referred [${cuRetKey}]`);
                } else {
                  computedContainer[cuRetKey] = makeCuPackedValue(false, committedCuRet[cuRetKey]);
                }
              } else {
                justWarning$6(`commitCu:${tip} change [${cuRetKey}], it must have zero dep keys`);
              }
            }
        });
        clearCu();
      }
    }); // 这里一次性处理所有computed or watch函数提交了然后合并后的state

    curStateForComputeFn = getFnCommittedState();

    if (curStateForComputeFn) {
      // toAssign may be null
      const assignCuState = (toAssign, mergeAssign = false) => {
        // 确保finder函数只针对这一部分新提交的状态去触发computed or watch
        if (mergeAssign) Object.assign(curStateForComputeFn, toAssign);else curStateForComputeFn = toAssign;
        if (!curStateForComputeFn) return;
        Object.assign(committedStateInWhile, curStateForComputeFn);

        if (mergeToDelta) {
          Object.assign(initialNewState, curStateForComputeFn);
          Object.assign(initialDeltaCommittedState, curStateForComputeFn);
        } else {
          // 强行置为null，结束while循环  
          // mergeToDelta为false表示这是来自connectedRefs触发的 cu 或者 wa 函数
          // 此时传入的 initialDeltaCommittedState 是模块state
          // 但是实例里 cu 或 wa 函数只能commit private state
          // 收集到 committedStateInWhile 后，在外面单独触发新的 computedForRef watchForRef过程
          curStateForComputeFn = null;
        }

        hasDelta = true;
      };

      const ensureCommittedState = fnCommittedState => {
        // !!! 确保实例里调用commit只能提交privState片段，模块里调用commit只能提交moduleState片段
        // !!! 同时确保privState里的key是事先声明过的，而不是动态添加的
        const stateKeys = sourceType === 'ref' ? refCtx.privStateKeys : moduleName2stateKeys$2[stateModule];
        const {
          partialState,
          ignoredStateKeys
        } = extractStateByKeys(fnCommittedState, stateKeys, true);

        if (ignoredStateKeys.length) {
          const reason = `they are not ${sourceType === CATE_REF ? 'private' : 'module'}, fn is ${sourceType} ${fnType}`;
          justWarning$6(`these state keys[${ignoredStateKeys.join(',')}] are invalid, ${reason}`);
        }

        return partialState; // 返回合法的提交状态
      };

      const partialState = ensureCommittedState(curStateForComputeFn);

      if (partialState) {
        assignCuState(partialState); // watch里提交了新的片段state，再次过一遍computed、watch函数

        if (fnType === FN_WATCH) {
          // const stateKey2retKeys = getStateKeyRetKeysMap(refCtx, sourceType, stateModule);
          const computedDep = getCuDep(refCtx, sourceType);

          const finder = (committedState, isBeforeMount) => pickDepFns(isBeforeMount, sourceType, FN_CU, computedDep, stateModule, oldState, committedState, ccUniqueKey); // 一轮watch函数执行结束，去触发对应的computed计算


          const {
            hasDelta,
            newCommittedState
          } = executeDepFns(ref, stateModule, refModule, oldState, finder, partialState, initialNewState, initialDeltaCommittedState, callInfo, false, // 再次由watch发起的computed函数查找调用，irFirstCall，一定是false
          FN_CU, sourceType, computedContainer);

          if (hasDelta) {
            // see https://codesandbox.io/s/complex-cu-watch-chain-s9wzt, 
            // 输入 cc.setState('test', {k1:Date.now()})，确保k4 watch被触发
            const validCommittedState = ensureCommittedState(newCommittedState); // 让validCommittedState合并到curStateForComputeFn里，确保下一轮循环相关watch能被computed里提交的状态触发

            assignCuState(validCommittedState, true);
          }
        }
      }
    }

    if (whileCount > 2) {
      justWarning$6('fnCtx.commit may goes endless loop, please check your code');
      justWarning$6(callInfo); // 清空，确保不再触发while循环

      curStateForComputeFn = null;
    }
  }

  executeCuInfo(nextTickCuInfo);
  return {
    hasDelta,
    newCommittedState: committedStateInWhile
  };
}

/* eslint-disable camelcase */
const {
  _computedValues: _computedValues$3
} = computed$1;
const {
  okeys: okeys$d,
  extractChangedState
} = util;

const getDispatcher = () => ccContext$1.permanentDispatcher;

const setStateByModule = (module, committedState, opts = {}) => {
  const {
    ref = null,
    callInfo = {},
    noSave = false,
    force
  } = opts;
  const moduleState = getState$8(module);
  const moduleComputedValue = _computedValues$3[module];
  const rootComputedDep = computed$1.getRootComputedDep();

  const curDepComputedFns = (committedState, isFirstCall) => pickDepFns(isFirstCall, CATE_MODULE, 'computed', rootComputedDep, module, moduleState, committedState);

  const rootWatchDep = watch$1.getRootWatchDep();

  const curDepWatchFns = (committedState, isFirstCall) => pickDepFns(isFirstCall, CATE_MODULE, 'watch', rootWatchDep, module, moduleState, committedState);

  const callerRef = ref || getDispatcher();
  const refModule = callerRef.module;
  const newState = Object.assign({}, moduleState, committedState);
  const deltaCommittedState = Object.assign({}, committedState);
  const {
    hasDelta: hasDeltaInCu
  } = executeDepFns(callerRef, module, refModule, moduleState, curDepComputedFns, deltaCommittedState, newState, deltaCommittedState, callInfo, false, FN_CU, CATE_MODULE, moduleComputedValue);
  const {
    hasDelta: hasDeltaInWa
  } = executeDepFns(callerRef, module, refModule, moduleState, curDepWatchFns, deltaCommittedState, newState, deltaCommittedState, callInfo, false, FN_WATCH, CATE_MODULE, moduleComputedValue);

  if (!noSave) {
    saveSharedState$1(module, deltaCommittedState, null, force);
  }

  return {
    hasDelta: hasDeltaInCu || hasDeltaInWa,
    deltaCommittedState
  };
};

const saveSharedState$1 = (module, toSave, needExtract = false, force) => {
  let target = toSave;

  if (needExtract) {
    const {
      partialState
    } = extractStateByKeys(toSave, moduleName2stateKeys$2[module], true);
    target = partialState;
  }

  const moduleState = getState$8(module);
  const prevModuleState = getPrevState$2(module);
  incModuleVer(module); // 调用 extractChangedState 时会更新 moduleState

  return extractChangedState(moduleState, target, {
    prevStateContainer: prevModuleState,
    incStateVer: key => incStateVer(module, key)
  }, force);
};

const getState$8 = module => {
  return _state[module];
};

const getPrevState$2 = module => {
  return _prevState[module];
};

const getModuleVer$3 = function (module) {
  if (!module) return _moduleVer;
  return _moduleVer[module];
};

const incModuleVer = function (module, val = 1) {
  try {
    _moduleVer[module] += val;
  } catch (err) {
    _moduleVer[module] = val;
  }
};

function replaceMV(mv) {
  _moduleVer = mv;
}

const getStateVer$1 = function (module) {
  if (!module) return _stateVer;
  return _stateVer[module];
};

const incStateVer = function (module, key) {
  _stateVer[module][key]++;
};

const getRootState = () => ({
  [MODULE_CC]: {},
  [MODULE_VOID]: {},
  [MODULE_GLOBAL]: {},
  [MODULE_DEFAULT]: {}
});
/** ccContext section */


const _state = getRootState();

const _prevState = getRootState(); // record state version, to let ref effect avoid endless execute
// 1 effect里的函数再次出发当前实例渲染，渲染完后检查prevModuleState curModuleState, 对应的key值还是不一样，又再次出发effect，造成死循环
// 2 确保引用型值是基于原有引用修改某个属性的值时，也能触发effect


const _stateVer = {}; // 优化before-render里无意义的merge mstate导致冗余的set（太多的set会导致 Maximum call stack size exceeded）
// https://codesandbox.io/s/happy-bird-rc1t7?file=/src/App.js concent below 2.4.18会触发

let _moduleVer = {};
const ccContext$1 = {
  getDispatcher,
  isHotReloadMode: function () {
    if (ccContext$1.isHot) return true;
    return window && (window.webpackHotUpdate || isOnlineEditor());
  },
  runtimeVar: runtimeVar$6,
  runtimeHandler: rh,
  isHot: false,
  reComputed: true,
  isStartup: false,
  moduleName2stateFn: {},
  // 映射好模块的状态所有key并缓存住，用于提高性能
  moduleName2stateKeys: moduleName2stateKeys$2,
  // 记录模块是不是通过configure配置的
  moduleName2isConfigured: {},

  /**
   * ccClassContext:{
   *   module,
   *   ccClassKey,
   *   // renderKey机制影响的类范围，默认只影响调用者所属的类，如果有别的类观察了同一个模块的某个key，这个类的实例是否触发渲染不受renderKey影响
   *   // 为 * 表示影响所有的类，即其他类实例都受renderKey机制影响。
   *   renderKeyClasses, 
   * }
  */
  ccClassKey2Context: {},

  /**
   * globalStateKeys is maintained by cc automatically,
   * when user call cc.setGlobalState, or ccInstance.setGlobalState,
   * committedState will be checked strictly by cc with globalStateKeys,
   * committedState keys must been included in globalStateKeys
   */
  globalStateKeys: [],
  // store里的setState行为会自动触发模块级别的computed、watch函数
  store: {
    appendState: function (module, state) {
      if (!moduleName2stateKeys$2[module]) throw new Error(`module[${module}] not configured`);
      const stateKeys = safeGetArray$1(moduleName2stateKeys$2, module);
      okeys$d(state).forEach(k => {
        if (!stateKeys.includes(k)) {
          stateKeys.push(k);
        }
      });
      ccContext$1.store.setState(module, state);
    },
    _state,
    _prevState,
    // 辅助effect逻辑用
    _stateVer,
    // 触发时，比较state版本，防止死循环
    getState: function (module) {
      if (module) return getState$8(module);else return _state;
    },
    getPrevState: function (module) {
      if (module) return getPrevState$2(module);else return _prevState;
    },
    getStateVer: getStateVer$1,
    getModuleVer: getModuleVer$3,
    incModuleVer,
    replaceMV,
    setState: function (module, partialSharedState, options) {
      return setStateByModule(module, partialSharedState, options);
    },
    setGlobalState: function (partialGlobalState) {
      return setStateByModule(MODULE_GLOBAL, partialGlobalState);
    },
    saveSharedState: saveSharedState$1,
    getGlobalState: function () {
      return _state[MODULE_GLOBAL];
    }
  },
  reducer: {
    _reducer: {
      [MODULE_GLOBAL]: {},
      [MODULE_CC]: {}
    },
    _caller: {},
    // _reducerRefCaller: {},//为实例准备的reducer caller
    _fnName2fullFnNames: {},
    _module2fnNames: {},
    _module2Ghosts: {}
  },
  computed: computed$1,
  watch: watch$1,
  refStore: {
    _state: {},
    setState: function (ccUniqueKey, partialStoredState) {
      const _state = ccContext$1.refStore._state;
      const fullStoredState = _state[ccUniqueKey];
      const mergedState = Object.assign({}, fullStoredState, partialStoredState);
      _state[ccUniqueKey] = mergedState;
    }
  },
  lifecycle,
  ccUKey2ref: refs,

  /**
   * key:eventName,  value: Array<{ccKey, identity,  handlerKey}>
   */
  event2handlers: {},
  ccUKey2handlerKeys: {},

  /**
   * to avoid memory leak, the handlerItem of event2handlers just store handlerKey, 
   * it is a ref that towards ccUniqueKeyEvent_handler_'s key
   * when component unmounted, its handler will been removed
   */
  handlerKey2handler: {},
  waKey2uKeyMap: waKey2uKeyMap$2,
  waKey2staticUKeyMap: waKey2staticUKeyMap$2,
  module2insCount,
  refs,
  info: {
    packageLoadTime: Date.now(),
    firstStartupTime: '',
    latestStartupTime: '',
    version: '2.14.10',
    author: 'fantasticsoul',
    emails: ['624313307@qq.com', 'zhongzhengkai@gmail.com'],
    tag: 'glory'
  },
  featureStr2classKey: {},
  userClassKey2featureStr: {},
  middlewares: [],
  plugins: [],
  pluginNameMap: {},
  permanentDispatcher: null,
  localStorage: null,
  recoverRefState: noop$2,
  getModuleStateKeys: m => ccContext$1.moduleName2stateKeys[m]
};

ccContext$1.recoverRefState = function () {
  const localStorage = ccContext$1.localStorage;
  if (!localStorage) return;
  const lsLen = localStorage.length;
  const _refStoreState = ccContext$1.refStore._state;

  try {
    for (let i = 0; i < lsLen; i++) {
      const lsKey = localStorage.key(i);
      if (!lsKey.startsWith('CCSS_')) return;
      _refStoreState[lsKey.substr(5)] = JSON.parse(localStorage.getItem(lsKey));
    }
  } catch (err) {
    console.error(err);
  }
};

/**
 * when user call configure bofore run,
 * target module will be pushed to pending modules array,
 * later they all will been configured by run api in startup process
 */
var pendingModules = [];

const {
  isModuleNameCcLike,
  isModuleNameValid,
  verboseInfo: vbi$4,
  makeError: makeError$1,
  okeys: okeys$c
} = util;
const {
  store: store$1,
  getModuleStateKeys: getModuleStateKeys$3
} = ccContext$1;
/** 检查模块名，名字合法，就算检查通过 */

function checkModuleNameBasically(moduleName) {
  if (!isModuleNameValid(moduleName)) {
    throw new Error(`module[${moduleName}] writing is invalid!`);
  }

  if (isModuleNameCcLike(moduleName)) {
    throw new Error(`'$$cc' is a built-in module name`);
  }
}
/**
 * 检查模块名, moduleMustNotExisted 默认为true，
 * true表示【module名字合法】且【对应的moduleState不存在】，才算检查通过  
 * false表示【module名字合法】且【对应的moduleState存在】，才算检查通过
 * @param {string} moduleName 
 * @param {boolean} [moduleMustNotExisted=true] - true 要求模块应该不存在 ,false 要求模块状态应该已存在
 */

function checkModuleName(moduleName, moduleMustNotExisted = true, vbiMsg = '') {
  const _vbiMsg = vbiMsg || `module[${moduleName}]`;

  const _state = store$1._state;
  checkModuleNameBasically(moduleName);

  if (moduleName !== MODULE_GLOBAL) {
    if (moduleMustNotExisted) {
      if (isObjectNotNull(_state[moduleName])) {
        // 但是却存在了
        throw makeError$1(ERR.CC_MODULE_NAME_DUPLICATE, vbi$4(_vbiMsg));
      }
    } else {
      if (!_state[moduleName]) {
        // 实际上却不存在
        throw makeError$1(ERR.CC_MODULE_NOT_FOUND, vbi$4(_vbiMsg));
      }
    }
  }
}
function checkModuleNameAndState(moduleName, moduleState, moduleMustNotExisted) {
  checkModuleName(moduleName, moduleMustNotExisted);

  if (!isPJO$7(moduleState)) {
    throw new Error(`module[${moduleName}]'s state ${INAJ}`);
  }
}
function checkStoredKeys(belongModule, storedKeys) {
  if (storedKeys === '*') {
    return;
  }

  if (Array.isArray(storedKeys)) {
    checkKeys(belongModule, storedKeys, false, 'storedKeys invalid ');
    return;
  }

  throw new Error(`storedKeys type err, ${STR_ARR_OR_STAR}`);
}
function checkKeys(module, keys, keyShouldBeModuleStateKey = true, extraInfo = '') {
  const keyword = keyShouldBeModuleStateKey ? '' : 'not ';

  const keyTip = (name, keyword) => `${extraInfo}key[${name}] must ${keyword}be a module state key`;

  const moduleStateKeys = getModuleStateKeys$3(module);
  keys.forEach(sKey => {
    const keyInModuleState = moduleStateKeys.includes(sKey);

    const throwErr = () => {
      throw new Error(keyTip(sKey, keyword));
    };

    if (keyShouldBeModuleStateKey) {
      !keyInModuleState && throwErr();
    } else {
      keyInModuleState && throwErr();
    }
  });
}
function checkConnectSpec(connectSpec) {
  const invalidConnect = `param connect is invalid,`;

  const invalidConnectItem = m => `${invalidConnect} module[${m}]'s value ${STR_ARR_OR_STAR}`;

  okeys$c(connectSpec).forEach(m => {
    checkModuleName(m, false);
    const val = connectSpec[m];

    if (typeof val === 'string') {
      if (val !== '*' && val !== '-') throw new Error(invalidConnectItem(m));
    } else if (!Array.isArray(val)) {
      throw new Error(invalidConnectItem(m));
    } else {
      checkKeys(m, val, true, `connect module[${m}] invalid,`);
    }
  });
}
function checkRenderKeyClasses(regRenderKeyClasses) {
  if (!Array.isArray(regRenderKeyClasses) && regRenderKeyClasses !== '*') {
    throw new Error(`renderKeyClasses type err, it ${STR_ARR_OR_STAR}`);
  }
}

const keyWord = '.checkModuleNameAndState';

function getDupLocation(errStack) {
  if (!errStack) errStack = '';
  /** stack may like this: at CodeSandbox
  Error: module name duplicate! --verbose-info: module[SetupDemo]
    at makeError (https://xvcej.csb.app/node_modules/concent/src/support/util.js:128:15)
    at checkModuleName (https://xvcej.csb.app/node_modules/concent/src/core/param/checker.js:71:15)
  >>  at Object.checkModuleNameAndState (https://xvcej.csb.app/node_modules/concent/src/core/param/checker.js:90:3)
    at _default (https://xvcej.csb.app/node_modules/concent/src/core/state/init-module-state.js:25:13)
    at _default (https://xvcej.csb.app/node_modules/concent/src/api/configure.js:96:35)
  >>  at evaluate (https://xvcej.csb.app/src/pages/SetupDemo/model/index.js:13:24)
    at Jn (https://codesandbox.io/static/js/sandbox.fb6f2fde.js:1:146799)
    at e.value (https://codesandbox.io/static/js/sandbox.fb6f2fde.js:1:162063)
    at e.value (https://codesandbox.io/static/js/sandbox.fb6f2fde.js:1:202119)
    at t (https://codesandbox.io/static/js/sandbox.fb6f2fde.js:1:161805)
    ...
   or: at local web-dev-server
   Error: module name duplicate! --verbose-info: module[batchAddGroup]
    at makeError (http://localhost:3001/static/js/main.chunk.js:20593:17)
    at checkModuleName (http://localhost:3001/static/js/main.chunk.js:17256:15)
  >>  at Module.checkModuleNameAndState (http://localhost:3001/static/js/main.chunk.js:17273:3)
    at http://localhost:3001/static/js/main.chunk.js:19804:106
    at Object.configure (http://localhost:3001/static/js/main.chunk.js:13750:80)
  >>  at Module../src/components/layer/BatchOpGroup/model/index.js (http://localhost:3001/static/js/main.chunk.js:8374:55)
    at __webpack_require__ (http://localhost:3001/static/js/bundle.js:782:30)
    at fn (http://localhost:3001/static/js/bundle.js:150:20)
   */

  const arr = errStack.split('\n');
  const len = arr.length;
  let locationStr = '';

  for (let i = 0; i < len; i++) {
    const strPiece = arr[i];

    if (strPiece.includes(keyWord)) {
      const callConfigureIdx = i + 3; // 向下3句就是调用处
      // 这句话是具体调用configure的地方
      // at Module../src/components/layer/BatchOpGroup/model/index.js (http://localhost:3001/static/js/main.chunk.js:8374:55)

      const targetStrPiece = arr[callConfigureIdx];
      const arr2 = targetStrPiece.split(':');
      const lastIdx = arr2.length - 1;
      const locationStrArr = [];
      arr2.forEach((str, idx) => {
        if (idx !== lastIdx) locationStrArr.push(str);
      }); // at Module../src/components/layer/BatchOpGroup/model/index.js (http://localhost:3001/static/js/main.chunk.js:8374

      locationStr = locationStrArr.join(':');
      break;
    }
  }

  return locationStr;
}

const module2dupLocation = {};
var guessDuplicate = ((err, module, tag) => {
  if (err.code === ERR.CC_MODULE_NAME_DUPLICATE && ccContext$1.isHotReloadMode()) {
    const dupLocation = getDupLocation(err.stack);
    const key = `${tag}|--link--|${module}`;
    const prevLocation = module2dupLocation[key];

    if (!prevLocation) {
      // 没有记录过
      module2dupLocation[key] = dupLocation;
    } else if (dupLocation !== prevLocation) {
      throw err;
    }
  } else {
    throw err;
  }
});

const key2findResult = {};
function createModuleNode(moduleName) {
  key2findResult[moduleName] = {};
}
function getCacheKey(moduleName, sharedStateKeys, renderKeys, renderKeyClasses = []) {
  const renderKeyStr = renderKeys ? renderKeys.join(',') : '';
  const featureStr1 = sharedStateKeys.sort().join(',');
  const featureStr2 = renderKeyClasses === '*' ? '*' : renderKeyClasses.sort().join(',');
  return `${moduleName}/${featureStr1}/${renderKeyStr}/${featureStr2}`;
}
function getCache(moduleName, key) {
  return key2findResult[moduleName][key];
}
function setCache(moduleName, key, result) {
  key2findResult[moduleName][key] = result;
}

const {
  safeAssignToMap,
  okeys: okeys$b,
  safeGet: safeGet$1
} = util;
function initModuleState (module, mState, moduleMustNotExisted = true) {
  // force MODULE_VOID state as {}
  const state = module === MODULE_VOID ? {} : mState;

  try {
    checkModuleNameAndState(module, state, moduleMustNotExisted);
  } catch (err) {
    guessDuplicate(err, module, 'state');
  }

  createModuleNode(module);
  const ccStore = ccContext$1.store;
  const rootState = ccStore.getState();
  const rootStateVer = ccStore.getStateVer();
  const rootModuleVer = ccStore.getModuleVer();
  const prevRootState = ccStore.getPrevState();
  safeAssignToMap(rootState, module, state);
  safeAssignToMap(prevRootState, module, state);
  rootStateVer[module] = okeys$b(state).reduce((map, key) => {
    map[key] = 1;
    return map;
  }, {});
  rootModuleVer[module] = 1; // 把_computedValueOri safeGet从init-module-computed调整到此处
  // 防止用户不定义任何computed，而只是定义watch时报错undefined

  const cu = ccContext$1.computed;
  safeGet$1(cu._computedDep, module, makeCuDepDesc$1());
  safeGet$1(cu._computedValues, module);
  safeGet$1(cu._computedRawValues, module);
  const stateKeys = okeys$b(state);
  ccContext$1.moduleName2stateKeys[module] = stateKeys;

  if (module === MODULE_GLOBAL) {
    const globalStateKeys = ccContext$1.globalStateKeys;
    stateKeys.forEach(key => {
      if (!globalStateKeys.includes(key)) globalStateKeys.push(key);
    });
  }

  ccContext$1.module2insCount[module] = 0;
}

/** @typedef {import('../../types').ICtxBase} ICtxBase */
const ignoreIt = `if this message doesn't matter, you can ignore it`;
/****
 * 尽可能优先找module的实例，找不到的话在根据mustBelongToModule值来决定要不要找其他模块的实例
 * pick one ccInstance ref randomly
 */

function pickOneRef (module, mustBelongToModule = false) {
  const {
    ccUKey2ref
  } = ccContext$1;
  let oneRef = null;

  if (module) {
    checkModuleName(module, false);
    const ukeys = okeys$e(ccUKey2ref);
    const len = ukeys.length;

    for (let i = 0; i < len; i++) {
      /** @type {{ctx:ICtxBase}} */
      const ref = ccUKey2ref[ukeys[i]];

      if (ref.ctx.module === module) {
        oneRef = ref;
        break;
      }
    }
  }

  if (!oneRef) {
    if (mustBelongToModule) {
      throw new Error(`[[pickOneRef]]: no ref found for module[${module}]!,${ignoreIt}`);
    } else {
      oneRef = ccContext$1.permanentDispatcher;
    }
  }

  return oneRef;
}

const {
  makeUniqueCcKey: makeUniqueCcKey$1,
  justWarning: justWarning$5
} = util;

const resolve = () => Promise.resolve();

function ccDispatch (action, payLoadWhenActionIsString, rkOrOptions = '', delay, {
  ccClassKey,
  ccKey,
  throwError,
  refModule = ''
} = {}) {
  if (action === undefined && payLoadWhenActionIsString === undefined) {
    throw new Error(`params type error`);
  }

  let dispatchFn,
      module = '',
      fnName = '';

  try {
    if (ccClassKey && ccKey) {
      const uKey = makeUniqueCcKey$1(ccClassKey, ccKey);
      const targetRef = ccContext$1.refs[uKey];

      if (!targetRef) {
        justWarning$5(`no ref found for ccUniqueKey:${uKey}!`);
        return resolve();
      } else {
        dispatchFn = targetRef.ctx.dispatch;
      }
    } else {
      if (typeof action == 'string') {
        if (action.includes('/')) {
          const [m, name] = action.split('/');
          module = m;
          fnName = name;
        } else {
          fnName = action;
        }
      }

      let ref;

      if (module && module !== '*') {
        ref = pickOneRef(module);
      } else if (refModule) {
        ref = pickOneRef(refModule);
      }

      if (!ref) {
        ref = pickOneRef();
      }

      dispatchFn = ref.ctx.dispatch;
    }

    if (module === '*') {
      const fullFnNames = ccContext$1.reducer._fnName2fullFnNames[fnName];
      if (!fullFnNames) return;
      const tasks = [];
      fullFnNames.forEach(fullFnName => {
        tasks.push(dispatchFn(fullFnName, payLoadWhenActionIsString, rkOrOptions, delay));
      });
      return Promise.all(tasks);
    } else {
      return dispatchFn(action, payLoadWhenActionIsString, rkOrOptions, delay);
    }
  } catch (err) {
    if (throwError) throw err;else {
      justWarning$5(err.message);
      return resolve();
    }
  }
}

function _dispatch (action, maybePayload, rkOrOptions, delay, extra) {
  return ccDispatch(action, maybePayload, rkOrOptions, delay, extra);
}

function initModuleReducer (module, reducer = {}, ghosts = []) {
  if (!isPJO$7(reducer)) {
    throw new Error(`module[${module}] reducer ${INAJ}`);
  }

  const {
    _reducer,
    _caller,
    _fnName2fullFnNames,
    _module2fnNames,
    _module2Ghosts // _reducerRefCaller, _lazyReducerRefCaller,

  } = ccContext$1.reducer; // 防止同一个reducer被载入到不同模块时，setState附加逻辑不正确

  const newReducer = Object.assign({}, reducer);
  _reducer[module] = newReducer;
  const subReducerCaller = safeGet$2(_caller, module); // const subReducerRefCaller = util.safeGet(_reducerRefCaller, module);

  const fnNames = safeGetArray$1(_module2fnNames, module);
  safeGet$2(_module2Ghosts, module, ghosts.slice());
  ghosts.forEach(ghostFnName => {
    if (!reducer[ghostFnName]) throw new Error(`ghost[${ghostFnName}] not exist`);
  }); // 自动附加一个setState在reducer里

  if (!newReducer.setState) newReducer.setState = payload => payload;
  const reducerFnNames = okeys$e(newReducer);
  reducerFnNames.forEach(name => {
    // avoid hot reload
    noDupPush$1(fnNames, name);
    const fullFnName = `${module}/${name}`;
    const list = safeGetArray$1(_fnName2fullFnNames, name); // avoid hot reload

    noDupPush$1(list, fullFnName);

    subReducerCaller[name] = (payload, renderKeyOrOptions, delay) => _dispatch(fullFnName, payload, renderKeyOrOptions, delay);

    const reducerFn = newReducer[name];

    if (!isFn$4(reducerFn)) {
      throw new Error(`module[${module}] reducer[${name}] ${INAF}`);
    } else {
      let targetFn = reducerFn;

      if (reducerFn.__fnName) {
        // 将某个已载入到模块a的reducer再次载入到模块b
        targetFn = (payload, moduleState, actionCtx) => reducerFn(payload, moduleState, actionCtx);

        newReducer[name] = targetFn;
      }

      targetFn.__fnName = name; // !!! 很重要，将真正的名字附记录上，否则名字是编译后的缩写名
      // 给函数绑上模块名，方便dispatch可以直接调用函数时，也能知道是更新哪个模块的数据，

      targetFn.__stateModule = module; // AsyncFunction GeneratorFunction Function

      targetFn.__ctName = reducerFn.__ctName || reducerFn.constructor.name;
      targetFn.__isAsync = isAsyncFn(reducerFn);
    }
  });
}

/** eslint-disable */
let _currentIndex = 0;
const letters = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'];

function genNonceStr(length = 6) {
  let ret = '';

  for (let i = 0; i < length; i++) {
    ret += letters[randomNumber()];
  }

  return ret;
}

function uuid (tag) {
  _currentIndex++;
  const nonceStr = tag || genNonceStr();
  return `${nonceStr}_${_currentIndex}`;
}

/** @typedef {import('../../types-inner').IRefCtx} Ctx */
const {
  moduleName2stateKeys: moduleName2stateKeys$1,
  runtimeVar: runtimeVar$5,
  runtimeHandler: runtimeHandler$1,
  store
} = ccContext$1;
let sortFactor = 1;
/**
computed('foo/firstName', ()=>{});
//or
computed('firstName', ()=>{}, ['foo/firstName']);

computed('foo/firstName', {
  fn: ()=>{},
  compare: false,
  depKeys: ['firstName'],
});

computed({
  'foo/firstName':()=>{},
  'foo/fullName':{
    fn:()=>{},
    depKeys:['firstName', 'lastName']
  }
});
// or 
computed({
  'foo/firstName':()=>{},
  'fullName':{
    fn:()=>{},
    depKeys:['foo/firstName', 'foo/lastName']
  }
});

computed(ctx=>{ return cuDesc}
*/
// cate: module | ref

function configureDepFns (cate, confMeta, item, handler, depKeysOrOpt) {
  /** @type Ctx */
  const ctx = confMeta.refCtx;
  const type = confMeta.type;

  if (cate === CATE_REF && !ctx.__$$inBM) {
    const tip = `${cate} ${type} must been called in setup block`;
    runtimeHandler$1.tryHandleWarning(new Error(tip));
    return;
  }

  if (!item) return;
  const itype = typeof item;

  let _descObj;

  if (itype === 'string') {
    // retKey
    if (isPJO$7(handler)) _descObj = {
      [item]: handler
    };else if (typeof handler === FN) _descObj = {
      [item]: makeFnDesc(handler, depKeysOrOpt)
    };
  } else if (isPJO$7(item)) {
    _descObj = item;
  } else if (itype === FN) {
    _descObj = item(ctx);

    if (!isPJO$7(_descObj)) {
      runtimeHandler$1.tryHandleWarning(new Error(`type of ${type} callback result must be an object`));
      return;
    }
  }

  if (!_descObj) {
    runtimeHandler$1.tryHandleWarning(new Error(`${cate} ${type} param type error`));
    return;
  }

  _parseDescObj(cate, confMeta, _descObj);
}

function _parseDescObj(cate, confMeta, descObj) {
  const {
    computedCompare,
    watchCompare,
    watchImmediate
  } = runtimeVar$5;
  const {
    tryHandleWarning
  } = runtimeHandler$1; // 读全局的默认值

  const defaultCompare = confMeta.type === FN_CU ? computedCompare : watchCompare;
  const callerModule = confMeta.module;
  okeys$e(descObj).forEach(retKey => {
    const val = descObj[retKey];
    let targetItem = val;

    if (isFn$4(val)) {
      targetItem = {
        fn: val
      };
    } // 有可能是空模块，如未写任何内容的computed.js文件，babel编译后为 { default: {} }
    // 所以此处需进一步判断 targetItem.fn


    if (isPJO$7(targetItem) && isFn$4(targetItem.fn)) {
      const {
        fn,
        immediate = watchImmediate,
        compare = defaultCompare,
        lazy,
        retKeyDep = true,
        // 内部传递的标记，watchModule computedModule调用时会传递
        allowSlash,
        depKeyModule
      } = targetItem; // 确保用户显示的传递null、undefined、0、都置为依赖收集状态

      let depKeys = targetItem.depKeys || '-'; // 作为动态的依赖收集函数，作用于watch函数

      if (isFn$4(depKeys)) {
        // ctx.watchModule 在内部会显式的传递depKeyModule
        // 而ctx.watch 是不传递 depKeyModule的，所以此处这样写
        const targetDepModule = depKeyModule || callerModule;
        const moduleState = store.getState(targetDepModule);
        const collectedDepKeys = [];
        depKeys(makeCuObState(moduleState, collectedDepKeys));
        depKeys = collectedDepKeys.map(key => `${targetDepModule}/${key}`);
      } // if user don't pass sort explicitly, computed fn will been called orderly by sortFactor


      const sort = targetItem.sort || sortFactor++;
      const fnUid = uuid('mark');

      if (depKeys === '*' || depKeys === '-') {
        // 处于依赖收集，且用户没有显式的通过设置retKeyDep为false来关闭同名依赖规则时，会自动设置同名依赖
        const mapSameName = depKeys === '-' && retKeyDep;

        const {
          pureKey,
          module
        } = _resolveKey(confMeta, callerModule, retKey, mapSameName, allowSlash);

        const err = _checkRetKeyDup(cate, confMeta, fnUid, pureKey);

        if (err) return tryHandleWarning(err); // when retKey is '/xxxx', here need pass xxxx as retKey

        _mapDepDesc(cate, confMeta, module, pureKey, fn, depKeys, immediate, compare, lazy, sort);
      } else {
        if (depKeys.length === 0) {
          const {
            pureKey,
            module
          } = _resolveKey(confMeta, callerModule, retKey, false, allowSlash); // consume retKey is stateKey


          const err = _checkRetKeyDup(cate, confMeta, fnUid, pureKey);

          if (err) return tryHandleWarning(err);

          _mapDepDesc(cate, confMeta, module, pureKey, fn, depKeys, immediate, compare, lazy, sort);
        } else {
          // ['foo/b1', 'bar/b1'] or ['b1', 'b2']
          const {
            pureKey,
            moduleOfKey
          } = _resolveKey(confMeta, callerModule, retKey, false, allowSlash);

          const stateKeyModule = moduleOfKey;

          const err = _checkRetKeyDup(cate, confMeta, fnUid, pureKey);

          if (err) return tryHandleWarning(err); // 给depKeys按module分类，此时它们都指向同一个retKey，同一个fn，但是会被分配ctx.computedDep或者watchDep的不同映射里

          const module2depKeys = {}; // ['foo/b1', 'bar/b1']

          depKeys.forEach(depKey => {
            // !!!这里只是单纯的解析depKey，不需要有映射同名依赖的行为，映射同名依赖仅发生在传入retKey的时候
            // consume depKey is stateKey
            const {
              isStateKey,
              pureKey,
              module
            } = _resolveKey(confMeta, callerModule, depKey, false, allowSlash); // ok: retKey: 'xxxx' depKeys:['foo/f1', 'foo/f2', 'bar/b1', 'bar/b2'], 
            //     some stateKey belong to foo, some belong to bar
            // ok: retKey: 'foo/xxxx' depKeys:['f1', 'f2'], all stateKey belong to foo
            // ok: retKey: 'foo/xxxx' depKeys:['foo/f1', 'foo/f2'], all stateKey belong to foo
            // both left and right include module but they are not equal, this situation is not ok!
            // not ok: retKey: 'foo/xxxx' depKeys:['foo/f1', 'foo/f2', 'bar/b1', 'bar/b2']


            if (stateKeyModule && module !== stateKeyModule) {
              throw new Error(`found slash both in retKey[${retKey}] and depKey[${depKey}], but their module is different`);
            }

            const depKeys = safeGetArray$1(module2depKeys, module);

            if (!isStateKey) {
              throw new Error(`depKey[${depKey}] invalid, module[${module}] doesn't include its stateKey[${pureKey}]`);
            } else {
              // 当一个实例里 ctx.computed ctx.watch 的depKeys里显示的标记了依赖时
              // 在这里需要立即记录依赖了
              _mapIns(confMeta, module, pureKey);
            }

            depKeys.push(pureKey);
          });
          okeys$e(module2depKeys).forEach(m => {
            // 指向同一个fn，允许重复
            _mapDepDesc(cate, confMeta, m, pureKey, fn, module2depKeys[m], immediate, compare, lazy, sort);
          });
        }
      }
    } else if (retKey !== 'default') {
      // default 是空模块导出导致的，这里就不打印了
      tryHandleWarning(`module[${callerModule}] ${confMeta.type} retKey[${retKey}] type error`);
    }
  });
} // just return an error if key dup


function _checkRetKeyDup(cate, confMeta, fnUid, retKey) {
  if (cate === CATE_REF) {
    const {
      ccUniqueKey,
      retKey2fnUid
    } = confMeta.refCtx;
    const type = confMeta.type;
    const typedRetKey = `${type}_${retKey}`;
    const mappedFn = retKey2fnUid[typedRetKey];

    if (mappedFn) {
      return new Error(`ccUKey[${ccUniqueKey}] retKey[${retKey}] duplicate in ref ${type}`);
    }

    retKey2fnUid[typedRetKey] = fnUid;
  }
} // !!!由实例调用computed或者watch，监听同名的retKey，更新stateKey与retKey的关系映射


function _mapSameNameRetKey(confMeta, module, retKey, isModuleStateKey) {
  const dep = confMeta.dep;
  const moduleDepDesc = safeGet$2(dep, module, makeCuDepDesc$1());
  const {
    stateKey2retKeys,
    retKey2stateKeys
  } = moduleDepDesc;
  safeGetThenNoDupPush(stateKey2retKeys, retKey, retKey);
  safeGetThenNoDupPush(retKey2stateKeys, retKey, retKey); // 记录依赖

  isModuleStateKey && _mapIns(confMeta, module, retKey);
}

function _mapIns(confMeta, module, retKey) {
  const ctx = confMeta.refCtx;

  if (ctx) {
    ctx.__$$staticWaKeys[makeWaKey(module, retKey)] = 1;
  }
} // 映射依赖描述对象, module即是取的dep里的key


function _mapDepDesc(cate, confMeta, module, retKey, fn, depKeys, immediate, compare, lazy, sort) {
  const dep = confMeta.dep;
  const moduleDepDesc = safeGet$2(dep, module, makeCuDepDesc$1());
  const {
    retKey2fn,
    stateKey2retKeys,
    retKey2lazy,
    retKey2stateKeys
  } = moduleDepDesc;
  const isStatic = Array.isArray(depKeys) && depKeys.length === 0; // 确保static computed优先优先执行

  let targetSort = sort;

  if (isStatic) {
    if (targetSort >= 0) targetSort = -1;
  } else {
    if (sort < 0) targetSort = 0;
  }

  const fnDesc = {
    fn,
    immediate,
    compare,
    depKeys,
    sort: targetSort,
    isStatic
  }; // retKey作为将计算结果映射到refComputed | moduleComputed 里的key

  if (retKey2fn[retKey]) {
    if (cate !== CATE_REF) {
      // 因为热加载，对于module computed 定义总是赋值最新的，
      retKey2fn[retKey] = fnDesc;
      retKey2lazy[retKey] = lazy;
    } // do nothing

  } else {
    retKey2fn[retKey] = fnDesc;
    retKey2lazy[retKey] = lazy;
    moduleDepDesc.fnCount++;
  }

  if (cate === CATE_REF) {
    confMeta.retKeyFns[retKey] = retKey2fn[retKey];
  }

  const refCtx = confMeta.refCtx;

  if (refCtx) {
    if (confMeta.type === 'computed') refCtx.hasComputedFn = true;else refCtx.hasWatchFn = true;
  } //处于自动收集依赖状态，首次遍历完计算函数后之后再去写stateKey_retKeys_, retKey2stateKeys
  // in find-dep-fns-to-execute.js setStateKeyRetKeysMap


  if (depKeys === '-') return;
  const allKeyDep = depKeys === '*';
  const targetDepKeys = allKeyDep ? ['*'] : depKeys;

  if (allKeyDep) {
    retKey2stateKeys[retKey] = moduleName2stateKeys$1[module];
  }

  targetDepKeys.forEach(sKey => {
    if (!allKeyDep) safeGetThenNoDupPush(retKey2stateKeys, retKey, sKey); //一个依赖key列表里的stateKey会对应着多个结果key

    safeGetThenNoDupPush(stateKey2retKeys, sKey, retKey);
  });
} // 分析retKey或者depKey是不是stateKey,
// 返回的是净化后的key


function _resolveKey(confMeta, module, retKey, mapSameName = false, allowSlash) {
  let targetModule = module,
      targetRetKey = retKey,
      moduleOfKey = '';

  if (retKey.includes('/')) {
    if (allowSlash !== true) {
      throw new Error(`key[${retKey}] can't contains /, please use (computedModule,watchModule) instead of(computed, watch) if you want to operate another module`);
    }

    const [_module, _stateKey] = retKey.split('/');

    if (_module) {
      moduleOfKey = _module;
      targetModule = _module; // '/name' 支持这种申明方式
    }

    targetRetKey = _stateKey;
  }

  let stateKeys;
  const moduleStateKeys = moduleName2stateKeys$1[targetModule];

  if (targetModule === confMeta.module) {
    // 此时computed & watch观察的是对象的所有stateKeys
    stateKeys = confMeta.stateKeys;
  } else {
    // 对于属于bar的ref 配置key 'foo/a'时，会走入到此块
    stateKeys = moduleStateKeys;

    if (!stateKeys) {
      throw makeError$2(ERR.CC_MODULE_NOT_FOUND, verboseInfo$1(`module[${targetModule}]`));
    }

    if (!confMeta.connect[targetModule]) {
      throw makeError$2(ERR.CC_MODULE_NOT_CONNECTED, verboseInfo$1(`module[${targetModule}], retKey[${targetRetKey}]`));
    }
  }

  const isStateKey = stateKeys.includes(targetRetKey);

  if (mapSameName && isStateKey) {
    _mapSameNameRetKey(confMeta, targetModule, targetRetKey, moduleStateKeys.includes(targetRetKey));
  }

  return {
    isStateKey,
    pureKey: targetRetKey,
    module: targetModule,
    moduleOfKey
  };
}

/**
 * 提供给用户使用，从存储的打包计算对象里获取目标计算结果的容器
 * ------------------------------------------------------------------------------------
 * 触发get时，会从打包对象里获取目标计算结果，
 * 打包对象按 ${retKey} 放置在originalCuContainer里，
 * 对于refComputed，rawComputedValues 是 ctx.refComputedRawValues
 * 对于moduleComputed，rawComputedValues 是  concentContext.ccComputed._computedRawValues.{$module}
 */

function makeCuRetContainer (computed, rawComputedValues) {
  // prepare for refComputed or moduleComputed
  const computedValues = {};
  okeys$e(computed).forEach(key => {
    // 用这个对象来存其他信息, 避免get无限递归，
    rawComputedValues[key] = makeCuPackedValue();
    Object.defineProperty(computedValues, key, {
      get: function () {
        // 防止用户传入未定义的key
        const value = rawComputedValues[key] || {};
        const {
          needCompute,
          fn,
          newState,
          oldState,
          fnCtx,
          isLazy,
          result
        } = value;

        if (!isLazy) {
          return result;
        }

        if (isLazy && needCompute) {
          const ret = fn(newState, oldState, fnCtx);
          value.result = ret;
          value.needCompute = false;
        }

        return value.result;
      },
      set: function (input) {
        const value = rawComputedValues[key];

        if (!input[CU_KEY]) {
          justWarning$6(`computed value can not been changed manually`);
          return;
        }

        if (input.isLazy) {
          value.isLazy = true;
          value.needCompute = true;
          value.newState = input.newState;
          value.oldState = input.oldState;
          value.fn = input.fn;
          value.fnCtx = input.fnCtx;
        } else {
          value.isLazy = false;
          value.result = input.result;
        }
      }
    });
  });
  return computedValues;
}

const {
  isPJO: isPJO$6
} = util;
function initModuleComputed (module, computed = {}) {
  if (!isPJO$6(computed)) {
    throw new Error(`module[${module}] computed ${INAJ}`);
  }

  const ccComputed = ccContext$1.computed;
  const rootState = ccContext$1.store.getState();
  const rootComputedValue = ccComputed.getRootComputedValue();
  const rootComputedDep = ccComputed.getRootComputedDep();
  const rootComputedRaw = ccComputed.getRootComputedRaw(); // 在init-module-state那里已safeGet, 这里可以安全的直接读取

  const cuOri = ccComputed._computedRawValues[module];
  rootComputedRaw[module] = computed;
  const moduleState = rootState[module];
  configureDepFns(CATE_MODULE, {
    type: FN_CU,
    module,
    stateKeys: okeys$e(moduleState),
    dep: rootComputedDep
  }, computed);
  const d = ccContext$1.getDispatcher();

  const curDepComputedFns = (committedState, isBeforeMount) => pickDepFns(isBeforeMount, CATE_MODULE, FN_CU, rootComputedDep, module, moduleState, committedState);

  rootComputedValue[module] = makeCuRetContainer(computed, cuOri);
  const moduleComputedValue = rootComputedValue[module];

  try {
    executeDepFns(d, module, d && d.ctx.module, moduleState, curDepComputedFns, moduleState, moduleState, moduleState, makeCallInfo(module), true, FN_CU, CATE_MODULE, moduleComputedValue);
  } catch (err) {
    ccContext$1.runtimeHandler.tryHandleError(err);
  }
}

const {
  isPJO: isPJO$5,
  safeGet,
  okeys: okeys$a
} = util;
/**
 * 设置watch值，过滤掉一些无效的key
 */

function initModuleWatch (module, moduleWatch = {}, append = false) {
  if (!isPJO$5(moduleWatch)) {
    throw new Error(`module[${module}] watch ${INAJ}`);
  }

  const rootWatchDep = ccContext$1.watch.getRootWatchDep();
  const rootWatchRaw = ccContext$1.watch.getRootWatchRaw();
  const rootComputedValue = ccContext$1.computed.getRootComputedValue();

  if (append) {
    const ori = rootWatchRaw[module];
    if (ori) Object.assign(ori, moduleWatch);else rootWatchRaw[module] = moduleWatch;
  } else {
    rootWatchRaw[module] = moduleWatch;
  }

  const getState = ccContext$1.store.getState;
  const moduleState = getState(module);
  configureDepFns(CATE_MODULE, {
    module,
    stateKeys: okeys$a(moduleState),
    dep: rootWatchDep
  }, moduleWatch);
  const d = ccContext$1.getDispatcher();

  const curDepWatchFns = (committedState, isFirstCall) => pickDepFns(isFirstCall, CATE_MODULE, FN_WATCH, rootWatchDep, module, moduleState, committedState);

  const moduleComputedValue = safeGet(rootComputedValue, module);
  executeDepFns(d, module, d && d.ctx.module, moduleState, curDepWatchFns, moduleState, moduleState, moduleState, makeCallInfo(module), true, FN_WATCH, CATE_MODULE, moduleComputedValue);
}

/* eslint-disable camelcase */
let id = 0;
/** 针对lazy的reducer调用链状态记录缓存map */

const chainId_moduleStateMap_ = {};
const chainId_isExited_ = {};
const chainId_isLazy_ = {};
/** 所有的reducer调用链状态记录缓存map */

const normalChainId_moduleStateMap_ = {};
function getChainId() {
  id++;
  return id;
}

function __setChainState(chainId, targetModule, partialState, targetId_msMap) {
  if (partialState) {
    let moduleStateMap = targetId_msMap[chainId];

    if (!moduleStateMap) {
      moduleStateMap = {};
      targetId_msMap[chainId] = moduleStateMap;
    }

    const state = moduleStateMap[targetModule];

    if (!state) {
      moduleStateMap[targetModule] = partialState;
    } else {
      Object.assign(state, partialState);
    }
  }
}

function setChainState(chainId, targetModule, partialState) {
  __setChainState(chainId, targetModule, partialState, chainId_moduleStateMap_);
}
function setAllChainState(chainId, targetModule, partialState) {
  __setChainState(chainId, targetModule, partialState, normalChainId_moduleStateMap_);
}
function setAndGetChainStateList(isC2Result, chainId, targetModule, partialState) {
  if (!isC2Result) setChainState(chainId, targetModule, partialState);
  return getChainStateList(chainId);
}
function getChainStateMap(chainId) {
  return chainId_moduleStateMap_[chainId];
}
function getAllChainStateMap(chainId) {
  return normalChainId_moduleStateMap_[chainId];
} // export function getChainModuleState(chainId, module) {
//   const moduleStateMap = getChainStateMap(chainId);
//   return moduleStateMap[module];
// }

function getChainStateList(chainId) {
  const moduleStateMap = getChainStateMap(chainId);
  const list = [];
  okeys$e(moduleStateMap).forEach(m => {
    list.push({
      module: m,
      state: moduleStateMap[m]
    });
  });
  return list;
}
function removeChainState(chainId) {
  delete chainId_moduleStateMap_[chainId];
}
function removeAllChainState(chainId) {
  delete normalChainId_moduleStateMap_[chainId];
}
function isChainExited(chainId) {
  return chainId_isExited_[chainId] === true;
}
function setChainIdLazy(chainId) {
  chainId_isLazy_[chainId] = true;
}
function isChainIdLazy(chainId) {
  return chainId_isLazy_[chainId] === true;
}

const feature2timerId = {};
var runLater = ((cb, feature, delay = 1000) => {
  const timerId = feature2timerId[feature];
  if (timerId) clearTimeout(timerId);
  feature2timerId[feature] = setTimeout(() => {
    delete feature2timerId[feature];
    cb();
  }, delay);
});

function watchKeyForRef (ref, stateModule, oldState, deltaCommittedState, callInfo, isBeforeMount = false, mergeToDelta) {
  const refCtx = ref.ctx;
  if (!refCtx.hasWatchFn) return {
    hasDelta: false,
    newCommittedState: {}
  };
  const newState = Object.assign({}, oldState, deltaCommittedState);
  const {
    watchDep,
    module: refModule,
    ccUniqueKey,
    refComputed: computedContainer
  } = refCtx;

  const curDepWatchFns = (committedState, isBeforeMount) => pickDepFns(isBeforeMount, CATE_REF, FN_WATCH, watchDep, stateModule, oldState, committedState, ccUniqueKey); // 触发有stateKey依赖列表相关的watch函数


  const {
    hasDelta
  } = executeDepFns(ref, stateModule, refModule, oldState, curDepWatchFns, deltaCommittedState, newState, deltaCommittedState, callInfo, isBeforeMount, FN_WATCH, CATE_REF, computedContainer, mergeToDelta);
  return {
    hasDelta
  };
}

function computeValueForRef (ref, stateModule, oldState, deltaCommittedState, callInfo, isBeforeMount = false, mergeToDelta) {
  const refCtx = ref.ctx;
  if (!refCtx.hasComputedFn) return {
    hasDelta: false,
    newCommittedState: {}
  };
  const {
    computedDep,
    module: refModule,
    ccUniqueKey,
    refComputed: computedContainer
  } = refCtx;
  const newState = Object.assign({}, oldState, deltaCommittedState);

  const curDepComputedFns = (committedState, isBeforeMount) => pickDepFns(isBeforeMount, CATE_REF, FN_CU, computedDep, stateModule, oldState, committedState, ccUniqueKey); // 触发依赖stateKeys相关的computed函数


  return executeDepFns(ref, stateModule, refModule, oldState, curDepComputedFns, deltaCommittedState, newState, deltaCommittedState, callInfo, isBeforeMount, FN_CU, CATE_REF, computedContainer, mergeToDelta);
}

const {
  okeys: okeys$9,
  isEmptyVal
} = util;
const {
  ccUKey2ref: ccUKey2ref$4,
  waKey2uKeyMap,
  waKey2staticUKeyMap
} = ccContext$1;
function findUpdateRefs (moduleName, partialSharedState, renderKeys, renderKeyClasses) {
  const sharedStateKeys = okeys$9(partialSharedState);
  const cacheKey = getCacheKey(moduleName, sharedStateKeys, renderKeys, renderKeyClasses);
  const cachedResult = getCache(moduleName, cacheKey);

  if (cachedResult) {
    return {
      sharedStateKeys,
      result: cachedResult
    };
  }

  const targetUKeyMap = {};
  const belongRefKeys = [];
  const connectRefKeys = [];
  sharedStateKeys.forEach(stateKey => {
    const waKey = `${moduleName}/${stateKey}`; // 利用assign不停的去重

    Object.assign(targetUKeyMap, waKey2uKeyMap[waKey], waKey2staticUKeyMap[waKey]);
  });
  const uKeys = okeys$9(targetUKeyMap);

  const putRef = (isBelong, ccUniqueKey) => {
    isBelong ? belongRefKeys.push(ccUniqueKey) : connectRefKeys.push(ccUniqueKey);
  };

  const tryMatch = (ref, toBelong) => {
    const {
      renderKey: refRenderKey,
      ccClassKey: refCcClassKey,
      ccUniqueKey,
      props
    } = ref.ctx; // 如果调用方携带renderKey发起修改状态动作，则需要匹配renderKey做更新

    if (renderKeys.length) {
      const isRenderKeyMatched = renderKeys.includes(refRenderKey); // 所有的类实例都受renderKey匹配机制影响
      // or 携带id生成了renderKey

      if (renderKeyClasses === '*' || !isEmptyVal(props.id)) {
        if (isRenderKeyMatched) {
          putRef(toBelong, ccUniqueKey);
        }

        return;
      } // 这些指定类实例受renderKey机制影响


      if (renderKeyClasses.includes(refCcClassKey)) {
        if (isRenderKeyMatched) {
          putRef(toBelong, ccUniqueKey);
        }
      } else {
        // 这些实例则不受renderKey机制影响
        putRef(toBelong, ccUniqueKey);
      }
    } else {
      putRef(toBelong, ccUniqueKey);
    }
  };

  let missRef = false;
  uKeys.forEach(key => {
    const ref = ccUKey2ref$4[key];

    if (!ref) {
      missRef = true;
      return;
    }

    const refCtx = ref.ctx;
    const {
      module: refModule,
      connect: refConnect
    } = refCtx;
    const isBelong = refModule === moduleName;
    const isConnect = refConnect[moduleName] ? true : false;

    if (isBelong) {
      tryMatch(ref, true);
    } // 一个实例如果既属于模块x同时也连接了模块x，这是不推荐的，在buildCtx里面已给出警告
    // 会造成冗余的渲染


    if (isConnect) {
      tryMatch(ref, false);
    }
  });
  const result = {
    belong: belongRefKeys,
    connect: connectRefKeys
  }; // 没有miss的ref才存缓存，防止直接标记了watchedKeys的实例此时还没有记录ref，
  // 但是此时刚好有变更状态的命令的话，如果这里缓存了查询结果，这这个实例挂上后，没有机会响应状态变更了

  if (!missRef) {
    setCache(moduleName, cacheKey, result);
  }

  return {
    sharedStateKeys,
    result
  };
}

/* eslint-disable camelcase */
const {
  isPJO: isPJO$4,
  justWarning: justWarning$4,
  isObjectNull: isObjectNull$2,
  computeFeature,
  okeys: okeys$8
} = util;
const {
  FOR_CUR_MOD,
  FOR_ANOTHER_MOD,
  FORCE_UPDATE,
  SET_STATE,
  SIG_STATE_CHANGED,
  RENDER_NO_OP,
  RENDER_BY_KEY,
  RENDER_BY_STATE,
  UNMOUNTED,
  MOUNTED
} = _cst;
const {
  store: {
    setState: storeSetState$1,
    getPrevState: getPrevState$1,
    saveSharedState
  },
  middlewares,
  ccClassKey2Context: ccClassKey2Context$2,
  refStore: refStore$1,
  getModuleStateKeys: getModuleStateKeys$2,
  runtimeVar: runtimeVar$4
} = ccContext$1; // 触发修改状态的实例所属模块和目标模块不一致的时候，stateFor是 FOR_ANOTHER_MOD

function getStateFor(targetModule, refModule) {
  return targetModule === refModule ? FOR_CUR_MOD : FOR_ANOTHER_MOD;
}

function callMiddlewares(skipMiddleware, passToMiddleware, cb) {
  if (skipMiddleware !== true) {
    const len = middlewares.length;

    if (len > 0) {
      let index = 0;

      const next = () => {
        if (index === len) {
          // all middlewares been executed
          cb();
        } else {
          const middlewareFn = middlewares[index];
          index++;
          if (isFn$4(middlewareFn)) middlewareFn(passToMiddleware, next);else {
            justWarning$4(`found one middleware ${INAF}`);
            next();
          }
        }
      };

      next();
    } else {
      cb();
    }
  } else {
    cb();
  }
} // 调用者优先取 alwaysRenderCaller，再去force参数


function getCallerForce(force) {
  return runtimeVar$4.alwaysRenderCaller || force;
}
/**
 * 修改状态入口函数
 */


function changeRefState(state, {
  module,
  skipMiddleware = false,
  payload,
  stateChangedCb,
  force = false,
  keys = [],
  keyPath = '',
  // sync api 透传
  reactCallback,
  type,
  calledBy = SET_STATE,
  fnName = '',
  renderKey,
  delay = -1
} = {}, targetRef) {
  if (!state) return;

  if (!isPJO$4(state)) {
    justWarning$4(`your committed state ${INAJ}`);
    return;
  }

  const targetRenderKey = extractRenderKey(renderKey);
  const targetDelay = renderKey && renderKey.delay ? renderKey.delay : delay;
  const {
    module: refModule,
    ccUniqueKey,
    ccKey
  } = targetRef.ctx;
  const stateFor = getStateFor(module, refModule);
  const callInfo = {
    calledBy,
    payload,
    renderKey: targetRenderKey,
    force,
    ccKey,
    module,
    fnName,
    keys,
    keyPath
  }; // 在triggerReactSetState之前把状态存储到store，
  // 防止属于同一个模块的父组件套子组件渲染时，父组件修改了state，子组件初次挂载是不能第一时间拿到state
  // const passedRef = stateFor === FOR_CUR_MOD ? targetRef : null;
  // 标记noSave为true，延迟到后面可能存在的中间件执行结束后才save

  const {
    partialState: sharedState,
    hasDelta,
    hasPrivState
  } = syncCommittedStateToStore(module, state, {
    ref: targetRef,
    callInfo,
    noSave: true,
    force
  });

  if (hasDelta) {
    Object.assign(state, sharedState);
  } // 不包含私有状态，仅包含模块状态，交给belongRefs那里去触发渲染，这样可以让已失去依赖的当前实例减少一次渲染
  // 因为belongRefs那里是根据有无依赖来确定要不要渲染，这样的话如果失去了依赖不把它查出来就不触发它渲染了


  const ignoreRender = !hasPrivState && !!sharedState; // source ref will receive the whole committed state 

  triggerReactSetState(targetRef, callInfo, targetRenderKey, calledBy, state, stateFor, ignoreRender, reactCallback, getCallerForce(force), (renderType, committedState, updateRef) => {
    // committedState means final committedState
    const passToMiddleware = {
      calledBy,
      type,
      payload,
      renderKey: targetRenderKey,
      delay: targetDelay,
      ccKey,
      ccUniqueKey,
      committedState,
      refModule,
      module,
      fnName,
      sharedState: sharedState || {} // 给一个空壳对象，防止用户直接用的时候报错null

    };
    let modStateCalled = false; // 修改或新增状态值
    // 修改并不会再次触发compute&watch过程，请明确你要修改的目的

    passToMiddleware.modState = (key, val) => {
      modStateCalled = true;
      passToMiddleware.committedState[key] = val;
      passToMiddleware.sharedState[key] = val;
    };

    callMiddlewares(skipMiddleware, passToMiddleware, () => {
      // 到这里才触发调用saveSharedState存储模块状态和updateRef更新调用实例，注这两者前后顺序不能调换
      // 因为updateRef里的beforeRender需要把最新的模块状态合进来
      // 允许在中间件过程中使用「modState」修改某些key的值，会影响到实例的更新结果，且不会再触发computed&watch
      // 调用此接口请明确知道后果,
      // 注不要直接修改sharedState或committedState，两个对象一起修改某个key才是正确的
      const midSharedState = passToMiddleware.sharedState;
      const realShare = saveSharedState(module, midSharedState, modStateCalled, force); // TODO: 查看其它模块的cu函数里读取了当前模块的state或computed作为输入产生了的新的计算结果
      // 然后做相应的关联更新 {'$$global/key1': {foo: ['cuKey1', 'cuKey2'] } }
      // code here
      // 执行完毕所有的中间件，才更新触发调用的源头实例

      updateRef && updateRef();

      if (renderType === RENDER_NO_OP && !realShare) {
        if (ignoreRender) {
          // 此时updateRef 为 null, 需要给补上一次机会为caller执行 triggerReactSetState
          triggerReactSetState(targetRef, callInfo, [], SET_STATE, midSharedState, stateFor, false, reactCallback, getCallerForce(force));
        }
      } else {
        send(SIG_STATE_CHANGED, {
          calledBy,
          type,
          committedState,
          sharedState: realShare || {},
          module,
          ccUniqueKey,
          renderKey: targetRenderKey
        });
      } // 无论是否真的有状态改变，此回调都会被触发


      if (stateChangedCb) stateChangedCb(); // 当前上下文的ignoreRender 为true 等效于这里的入参 allowOriInsRender 为true，允许查询出oriIns后触发它渲染

      if (realShare) triggerBroadcastState(stateFor, callInfo, targetRef, realShare, ignoreRender, module, reactCallback, targetRenderKey, targetDelay, force);
    });
  });
}

function triggerReactSetState(targetRef, callInfo, renderKeys, calledBy, state, stateFor, ignoreRender, reactCallback, force, next) {
  const nextNoop = () => next && next(RENDER_NO_OP, state);

  const refCtx = targetRef.ctx;
  const refState = refCtx.unProxyState;

  if (ignoreRender) {
    return nextNoop();
  }

  if (targetRef.__$$ms === UNMOUNTED // 已卸载
  || stateFor !== FOR_CUR_MOD // 确保forceUpdate能够刷新cc实例，因为state可能是{}，此时用户调用forceUpdate也要触发render
  || calledBy !== FORCE_UPDATE && isObjectNull$2(state)) {
    return nextNoop();
  }

  const {
    module: stateModule,
    storedKeys,
    ccUniqueKey
  } = refCtx;
  let renderType = RENDER_BY_STATE;

  if (renderKeys.length) {
    // if user specify renderKeys
    renderType = RENDER_BY_KEY;

    if (renderKeys.includes(refCtx.renderKey)) {
      // current instance can been rendered only if ctx.renderKey included in renderKeys
      return nextNoop();
    }
  }

  if (storedKeys.length > 0) {
    const {
      partialState,
      isStateEmpty
    } = extractStateByKeys(state, storedKeys);

    if (!isStateEmpty) {
      if (refCtx.persistStoredKeys === true) {
        const {
          partialState: entireStoredState
        } = extractStateByKeys(refState, storedKeys);
        const currentStoredState = Object.assign({}, entireStoredState, partialState);

        if (ccContext$1.localStorage) {
          ccContext$1.localStorage.setItem(`CCSS_${ccUniqueKey}`, JSON.stringify(currentStoredState));
        }
      }

      refStore$1.setState(ccUniqueKey, partialState);
    }
  }

  const deltaCommittedState = Object.assign({}, state);
  computeValueForRef(targetRef, stateModule, refState, deltaCommittedState, callInfo);
  watchKeyForRef(targetRef, stateModule, refState, deltaCommittedState, callInfo);

  const ccSetState = () => {
    // 使用 unProxyState ，避免触发get
    let myChangedState;
    if (force === true) myChangedState = deltaCommittedState;else myChangedState = extractChangedState$1(refCtx.unProxyState, deltaCommittedState);

    if (myChangedState) {
      // 记录stateKeys，方便triggerRefEffect之用
      refCtx.__$$settedList.push({
        module: stateModule,
        keys: okeys$8(myChangedState)
      });

      refCtx.__$$ccSetState(myChangedState, reactCallback);
    }
  };

  if (next) {
    next(renderType, deltaCommittedState, ccSetState);
  } else {
    ccSetState();
  }
}

function syncCommittedStateToStore(moduleName, committedState, options) {
  const stateKeys = getModuleStateKeys$2(moduleName); // extract shared state

  const {
    partialState,
    missKeyInState: hasPrivState
  } = extractStateByKeys(committedState, stateKeys, true); // save state to store

  if (partialState) {
    const {
      hasDelta,
      deltaCommittedState
    } = storeSetState$1(moduleName, partialState, options);
    return {
      partialState: deltaCommittedState,
      hasDelta,
      hasPrivState
    };
  }

  return {
    partialState,
    hasDelta: false,
    hasPrivState
  };
}

function triggerBroadcastState(stateFor, callInfo, targetRef, sharedState, allowOriInsRender, moduleName, reactCallback, renderKeys, delay, force) {
  let passAllowOri = allowOriInsRender;

  if (delay > 0) {
    if (passAllowOri) {
      // 优先将当前实例渲染了
      triggerReactSetState(targetRef, callInfo, [], SET_STATE, sharedState, stateFor, false, reactCallback, getCallerForce(force));
    }

    passAllowOri = false; // 置为false，后面的runLater里不会再次触发当前实例渲染
  }

  const startBroadcastState = () => {
    broadcastState(callInfo, targetRef, sharedState, passAllowOri, moduleName, reactCallback, renderKeys, force);
  };

  if (delay > 0) {
    const feature = computeFeature(targetRef.ctx.ccUniqueKey, sharedState);
    runLater(startBroadcastState, feature, delay);
  } else {
    startBroadcastState();
  }
}

function broadcastState(callInfo, targetRef, partialSharedState, allowOriInsRender, moduleName, reactCallback, renderKeys, force) {
  if (!partialSharedState) {
    // null
    return;
  }

  const ccUKey2ref = ccContext$1.ccUKey2ref;
  /** @type ICtxBase */

  const {
    ccUniqueKey: currentCcUKey,
    ccClassKey
  } = targetRef.ctx;
  const renderKeyClasses = ccClassKey2Context$2[ccClassKey].renderKeyClasses;
  const {
    sharedStateKeys,
    result: {
      belong: belongRefKeys,
      connect: connectRefKeys
    }
  } = findUpdateRefs(moduleName, partialSharedState, renderKeys, renderKeyClasses);
  const renderedInBelong = {};
  belongRefKeys.forEach(refKey => {
    const ref = ccUKey2ref[refKey];
    if (!ref) return;
    const refUKey = ref.ctx.ccUniqueKey;
    let rcb = null; // 这里的calledBy直接用'broadcastState'，仅供concent内部运行时用

    let calledBy = 'broadcastState';

    if (refUKey === currentCcUKey) {
      if (!allowOriInsRender) return;
      rcb = reactCallback;
      calledBy = callInfo.calledBy;
    }

    triggerReactSetState(ref, callInfo, [], calledBy, partialSharedState, FOR_CUR_MOD, false, rcb, force);
    renderedInBelong[refKey] = 1;
  });
  const prevModuleState = getPrevState$1(moduleName);
  connectRefKeys.forEach(refKey => {
    // 对于即属于又连接的实例，避免一次重复的渲染
    if (renderedInBelong[refKey]) {
      return;
    }

    const ref = ccUKey2ref[refKey];
    if (!ref) return; // 对于挂载好了还未卸载的实例，才有必要触发重渲染

    if (ref.__$$ms === MOUNTED) {
      const refCtx = ref.ctx;
      const {
        hasDelta: hasDeltaInCu,
        newCommittedState: cuCommittedState
      } = computeValueForRef(ref, moduleName, prevModuleState, partialSharedState, callInfo, false, false);
      const {
        hasDelta: hasDeltaInWa,
        newCommittedState: waCommittedState
      } = watchKeyForRef(ref, moduleName, prevModuleState, partialSharedState, callInfo, false, false); // computed & watch 过程中提交了新的state，合并到 unProxyState 里
      // 注意这里，computeValueForRef watchKeyForRef 调用的 findDepFnsToExecute内部
      // 保证了实例里cu或者wa函数commit提交的状态只能是 privateStateKey，所以合并到unProxyState是安全的

      if (hasDeltaInCu || hasDeltaInWa) {
        const changedRefPrivState = Object.assign(cuCommittedState, waCommittedState);
        const refModule = refCtx.module;
        const refState = refCtx.unProxyState;
        computeValueForRef(ref, refModule, refState, changedRefPrivState, callInfo);
        watchKeyForRef(ref, refModule, refState, changedRefPrivState, callInfo);
        Object.assign(refState, changedRefPrivState);
        Object.assign(refCtx.state, changedRefPrivState);

        refCtx.__$$settedList.push({
          module: refModule,
          keys: okeys$8(changedRefPrivState)
        });
      } // 记录sharedStateKeys，方便triggerRefEffect之用


      refCtx.__$$settedList.push({
        module: moduleName,
        keys: sharedStateKeys
      });

      refCtx.__$$ccForceUpdate();
    }
  });
}

function startChangeRefState(state, options, ref) {
  /**
   * 避免死循环，利用 setTimeout 将执行流程放到下一轮事件循环里
   *  在 <= v2.10.13之前
   *  1 watch回调里执行 setState 导致无限死循环
   *  2 setup 块里直接执行 setState 导致无限死循环
   * 
   *  以 watch为例：
   * function setup({watch, setState, initState}){
   *   initState({privKey: 2});
   *   watch('num', ()=>{
   *     // 因为watch是在组件渲染前执行，当设置immediate为true时
   *     // 组件处于 beforeMount 步骤，cUKey2Ref并未记录具体的ref,
   *     // 此时回调里调用setState会导致 use-concent 140判断失败后
   *     // 然后一直触发 cref函数，一直进入新的 beforeMount流程
   *     setState({privKey:1});
   *   }, {immediate:true});
   * }
   */
  if (ref.ctx.__$$inBM) {
    setTimeout(() => startChangeRefState(state, options, ref), 0);
    return;
  }

  changeRefState(state, options, ref);
}

function _setState$1(state, options) {
  try {
    const ref = pickOneRef(options.module);
    ref.ctx.changeState(state, options);
  } catch (err) {
    strictWarning(err);
  }
}

function innerSetState(module, state, stateChangedCb) {
  _setState$1(state, {
    module,
    stateChangedCb
  });
}
function setState$1 (module, state, renderKey, delay = -1, skipMiddleware) {
  _setState$1(state, {
    ccKey: '[[top api:setState]]',
    module,
    renderKey,
    delay,
    skipMiddleware
  });
}

// import hoistNonReactStatic from 'hoist-non-react-statics';
const {
  verboseInfo,
  makeError,
  justWarning: justWarning$3,
  isPJO: isPJO$3,
  okeys: okeys$7
} = util;
const {
  store: {
    getState: getState$7,
    setState: storeSetState
  },
  reducer: {
    _reducer
  },
  computed: {
    _computedValues: _computedValues$2
  },
  runtimeHandler,
  runtimeVar: runtimeVar$3
} = ccContext$1;
const me$3 = makeError;
const vbi$3 = verboseInfo;

function handleError(err, throwError = true) {
  if (throwError) throw err;else {
    handleCcFnError(err);
  }
}

function checkStoreModule(module, throwError = true) {
  try {
    checkModuleName(module, false, `module[${module}] is not configured in store`);
    return true;
  } catch (err) {
    handleError(err, throwError);
    return false;
  }
}

function paramCallBackShouldNotSupply(module, currentModule) {
  return `param module[${module}] must equal current ref's module[${currentModule}] when pass param reactCallback, or it will never been triggered! `;
}

function _promiseErrorHandler(resolve, reject) {
  return (err, ...args) => err ? reject(err) : resolve(...args);
} //忽略掉传递进来的chainId，chainDepth，重新生成它们，源头调用了lazyDispatch或者ctx里调用了lazyDispatch，就会触发此逻辑


function getNewChainData(isLazy, chainId, oriChainId, chainId2depth) {
  let _chainId;

  if (isLazy === true) {
    _chainId = getChainId();
    setChainIdLazy(_chainId);
    chainId2depth[_chainId] = 1; //置为1
  } else {
    _chainId = chainId || getChainId();
    if (!chainId2depth[_chainId]) chainId2depth[_chainId] = 1;
  } //源头函数会触发创建oriChainId， 之后就一直传递下去了


  const _oriChainId = oriChainId || _chainId;

  return {
    _chainId,
    _oriChainId
  };
} // any error in this function will not been throw, cc just warning, 


function isStateModuleValid(inputModule, currentModule, reactCallback, cb) {
  let targetCb = reactCallback;

  if (checkStoreModule(inputModule, false)) {
    if (inputModule !== currentModule && reactCallback) {
      // ???strict
      justWarning$3(paramCallBackShouldNotSupply(inputModule, currentModule));
      targetCb = null; //let user's reactCallback has no chance to be triggered
    }

    cb(null, targetCb);
  } else {
    cb(new Error(`inputModule:${inputModule} invalid`), null);
  }
}

function handleCcFnError(err, __innerCb) {
  if (err) {
    if (__innerCb) __innerCb(err);else {
      ccContext$1.runtimeHandler.tryHandleError(err);
    }
  }
}

function _promisifyCcFn(ccFn, userLogicFn, executionContext, payload) {
  return new Promise((resolve, reject) => {
    const _executionContext = Object.assign(executionContext, {
      __innerCb: _promiseErrorHandler(resolve, reject)
    });

    ccFn(userLogicFn, _executionContext, payload);
  }).catch(runtimeHandler.tryHandleError);
}

function __promisifiedInvokeWith(userLogicFn, executionContext, payload) {
  return _promisifyCcFn(invokeWith, userLogicFn, executionContext, payload);
}

function __invoke(userLogicFn, option, payload) {
  const {
    callerRef,
    delay,
    renderKey,
    force,
    calledBy,
    module,
    chainId,
    oriChainId,
    chainId2depth,
    isSilent
  } = option;
  return __promisifiedInvokeWith(userLogicFn, {
    callerRef,
    context: true,
    module,
    calledBy,
    fnName: userLogicFn.name,
    delay,
    renderKey,
    force,
    chainId,
    oriChainId,
    chainId2depth,
    isSilent
  }, payload);
} // 后面会根据具体组件形态给reactSetState赋值
// 直接写为 makeCcSetStateHandler = (ref)=> ref.ctx.reactSetState, 是错误的
// ref.ctx.reactSetState是在后面的流程里被赋值的，所以此处多用一层函数包裹再调用


function makeCcSetStateHandler(ref) {
  return (state, cb) => {
    ref.ctx.reactSetState(state, cb);
  };
}
function makeCcForceUpdateHandler(ref) {
  return cb => {
    ref.ctx.reactForceUpdate(cb);
  };
} // last param: chainData

function makeInvokeHandler(callerRef, {
  chainId,
  oriChainId,
  isLazy,
  delay = -1,
  isSilent = false,
  chainId2depth = {}
} = {}) {
  return (firstParam, payload, inputRKey, inputDelay) => {
    let _isLazy = isLazy,
        _isSilent = isSilent;

    let _renderKey = '',
        _delay = inputDelay != undefined ? inputDelay : delay;

    let _force = false;

    if (isPJO$3(inputRKey)) {
      const {
        lazy,
        silent,
        renderKey,
        delay,
        force
      } = inputRKey;
      lazy !== undefined && (_isLazy = lazy);
      silent !== undefined && (_isSilent = silent);
      renderKey !== undefined && (_renderKey = renderKey);
      delay !== undefined && (_delay = delay);
      _force = force;
    } else {
      _renderKey = inputRKey;
    }

    const {
      _chainId,
      _oriChainId
    } = getNewChainData(_isLazy, chainId, oriChainId, chainId2depth);
    const firstParamType = typeof firstParam;
    const option = {
      callerRef,
      calledBy: INVOKE,
      module: callerRef.ctx.module,
      isSilent: _isSilent,
      chainId: _chainId,
      oriChainId: _oriChainId,
      chainId2depth,
      delay: _delay,
      renderKey: _renderKey,
      force: _force
    }; // eslint-disable-next-line

    const err = new Error(`param type error, correct usage: invoke(userFn:function, ...args:any[]) or invoke(option:[module:string, fn:function], ...args:any[])`);

    if (firstParamType === 'function') {
      // 可能用户直接使用invoke调用了reducer函数
      if (firstParam.__fnName) firstParam.name = firstParam.__fnName; // 这里不修改option.module，concent明确定义了dispatch和invoke规则

      /**
        invoke调用函数引用时
        无论组件有无注册模块，一定走调用方模块
         dispatch调用函数引用时
        优先走函数引用的模块（此时函数是一个reducer函数），没有(此函数不是reducer函数)则走调用方的模块并降级为invoke调用
       */
      // if (firstParam.__stateModule) option.module = firstParam.__stateModule;

      return __invoke(firstParam, option, payload);
    } else if (firstParamType === 'object') {
      let _fn, _module;

      if (Array.isArray(firstParam)) {
        const [module, fn] = firstParam;
        _fn = fn;
        _module = module;
      } else {
        const {
          module,
          fn
        } = firstParam;
        _fn = fn;
        _module = module;
      }

      if (!isFn$4(_fn)) throw err;
      if (_module) option.module = _module; //某个模块的实例修改了另外模块的数据

      return __invoke(_fn, option, payload);
    } else {
      throw err;
    }
  };
}
function invokeWith(userLogicFn, executionContext, payload) {
  const callerRef = executionContext.callerRef;
  const callerModule = callerRef.ctx.module;
  const {
    module: targetModule = callerModule,
    context = false,
    cb,
    __innerCb,
    type,
    calledBy,
    fnName = '',
    delay = -1,
    renderKey,
    force = false,
    chainId,
    oriChainId,
    chainId2depth,
    isSilent // sourceModule

  } = executionContext;
  isStateModuleValid(targetModule, callerModule, cb, (err, newCb) => {
    if (err) return handleCcFnError(err, __innerCb);
    const moduleState = getState$7(targetModule);
    let actionContext = {};
    let isSourceCall = false;
    isSourceCall = chainId === oriChainId && chainId2depth[chainId] === 1;

    if (context) {
      // 调用前先加1
      chainId2depth[chainId] = chainId2depth[chainId] + 1; // !!!makeDispatchHandler的dispatch lazyDispatch将源头的isSilent 一致透传下去

      const dispatch = makeDispatchHandler(callerRef, false, isSilent, targetModule, renderKey, delay, chainId, oriChainId, chainId2depth);
      const silentDispatch = makeDispatchHandler(callerRef, false, true, targetModule, renderKey, delay, chainId, oriChainId, chainId2depth);
      const lazyDispatch = makeDispatchHandler(callerRef, true, isSilent, targetModule, renderKey, delay, chainId, oriChainId, chainId2depth); // oriChainId, chainId2depth 一直携带下去，设置isLazy，会重新生成chainId

      const invoke = makeInvokeHandler(callerRef, {
        delay,
        chainId,
        oriChainId,
        chainId2depth
      });
      const lazyInvoke = makeInvokeHandler(callerRef, {
        isLazy: true,
        delay,
        oriChainId,
        chainId2depth
      });
      const silentInvoke = makeInvokeHandler(callerRef, {
        isLazy: false,
        delay,
        isSilent: true,
        oriChainId,
        chainId2depth
      }); // 首次调用时是undefined，这里做个保护

      const committedStateMap = getAllChainStateMap(chainId) || {};
      const committedState = committedStateMap[targetModule] || {};
      actionContext = {
        callInfo: {
          renderKey,
          delay,
          fnName,
          type,
          calledBy,
          force
        },
        module: targetModule,
        callerModule,
        committedStateMap,
        // 一次ref dispatch调用，所经过的所有reducer的返回结果收集
        committedState,
        invoke,
        lazyInvoke,
        silentInvoke,
        invokeLazy: lazyInvoke,
        invokeSilent: silentInvoke,
        dispatch,
        lazyDispatch,
        silentDispatch,
        dispatchLazy: lazyDispatch,
        dispatchSilent: silentDispatch,
        rootState: getState$7(),
        globalState: getState$7(MODULE_GLOBAL),
        // 指的是目标模块的state
        moduleState,
        // 指的是目标模块的的moduleComputed
        moduleComputed: _computedValues$2[targetModule] || {},
        // 利用dispatch调用自动生成的setState
        setState: (state, r, d) => {
          const targetR = r !== 0 ? r || renderKey : r;
          const targetD = d !== 0 ? d || delay : d;
          return dispatch('setState', state, {
            silent: isSilent,
            renderKey: targetR,
            delay: targetD
          });
        },
        // !!!指的是调用源cc类实例的ctx
        refCtx: callerRef.ctx // concent不鼓励用户在reducer使用ref相关数据书写业务逻辑，除非用户确保是同一个模块的实例触发调用该函数，
        // 因为不同调用方传递不同的refCtx值，会引起用户不注意的bug

      };
    }

    if (isSilent === false) {
      send(SIG_FN_START, {
        isSourceCall,
        calledBy,
        module: targetModule,
        chainId,
        fn: userLogicFn
      });
    }

    const handleReturnState = partialState => {
      chainId2depth[chainId] = chainId2depth[chainId] - 1; // 调用结束减1

      const curDepth = chainId2depth[chainId];
      const isFirstDepth = curDepth === 1;
      const isC2Result = stOrPromisedSt && stOrPromisedSt.__c2Result; // 调用结束就记录

      setAllChainState(chainId, targetModule, partialState);
      let commitStateList = [];

      if (isSilent === false) {
        send(SIG_FN_END, {
          isSourceCall,
          calledBy,
          module: targetModule,
          chainId,
          fn: userLogicFn
        }); // targetModule, sourceModule相等与否不用判断了，chainState里按模块为key去记录提交到不同模块的state

        if (isChainIdLazy(chainId)) {
          // 来自于惰性派发的调用
          if (!isFirstDepth) {
            // 某条链还在往下调用中，没有回到第一层，暂存状态，直到回到第一层才提交
            setChainState(chainId, targetModule, partialState);
          } else {
            // 合并状态一次性提交到store并派发到组件实例
            if (isChainExited(chainId)) ; else {
              setAndGetChainStateList(isC2Result, chainId, targetModule, partialState);
              removeChainState(chainId);
            }
          }
        } else {
          if (!isC2Result) commitStateList = [{
            module: targetModule,
            state: partialState
          }];
        }
      }

      commitStateList.forEach(v => {
        startChangeRefState(v.state, {
          renderKey,
          module: v.module,
          reactCallback: newCb,
          type,
          calledBy,
          fnName,
          delay,
          payload,
          force
        }, callerRef);
      });

      if (isSourceCall) {
        // 源头dispatch or invoke结束调用
        removeChainState(chainId);
        removeAllChainState(chainId);
      }

      if (__innerCb) __innerCb(null, partialState);
    };

    const handleFnError = err => {
      send(SIG_FN_ERR, {
        isSourceCall,
        calledBy,
        module: targetModule,
        chainId,
        fn: userLogicFn
      });
      handleCcFnError(err, __innerCb);
    };

    const stOrPromisedSt = userLogicFn(payload, moduleState, actionContext);

    if (userLogicFn.__isAsync) {
      Promise.resolve(stOrPromisedSt).then(handleReturnState).catch(handleFnError);
    } else {
      // 防止输入中文时，因为隔了一个Promise而出现抖动
      try {
        if (userLogicFn.__isReturnJudged) {
          handleReturnState(stOrPromisedSt);
          return;
        } // 再判断一次，有可能会被编译器再包一层，形如：
        //  function getServerStore(_x2) {
        //    return _getServerStore.apply(this, arguments);
        //  }


        if (isAsyncFn(stOrPromisedSt)) {
          userLogicFn.__isAsync = true;
          Promise.resolve(stOrPromisedSt).then(handleReturnState).catch(handleFnError);
          return;
        } else {
          userLogicFn.__isReturnJudged = true;
        }

        handleReturnState(stOrPromisedSt);
      } catch (err) {
        handleFnError(err);
      }
    }
  });
}
function dispatch$1({
  callerRef,
  module: inputModule,
  renderKey,
  isSilent,
  force,
  type,
  payload,
  cb: reactCallback,
  __innerCb,
  delay = -1,
  chainId,
  oriChainId,
  chainId2depth
} = {}) {
  const targetReducerMap = _reducer[inputModule];

  if (!targetReducerMap) {
    return __innerCb(new Error(`no reducerMap found for module:[${inputModule}]`));
  }

  const reducerFn = targetReducerMap[type];

  if (!reducerFn) {
    const fns = okeys$7(targetReducerMap);
    const err = new Error(`no reducer fn found for [${inputModule}/${type}], is these fn you want:${fns}`);
    return __innerCb(err);
  }

  const executionContext = {
    callerRef,
    module: inputModule,
    type,
    force,
    cb: reactCallback,
    context: true,
    __innerCb,
    calledBy: DISPATCH,
    delay,
    renderKey,
    isSilent,
    chainId,
    oriChainId,
    chainId2depth
  };
  invokeWith(reducerFn, executionContext, payload);
}
function makeDispatchHandler(callerRef, inputIsLazy, inputIsSilent, defaultModule, defaultRenderKey = '', delay = -1, chainId, oriChainId, chainId2depth = {} // sourceModule, oriChainId, oriChainDepth
) {
  return (paramObj = {}, payload, userInputRKey, userInputDelay) => {
    let isLazy = inputIsLazy,
        isSilent = inputIsSilent;
    let _renderKey = '';

    let _delay = userInputDelay || delay;

    let _force = false;

    if (isPJO$3(userInputRKey)) {
      _renderKey = defaultRenderKey;
      const {
        lazy,
        silent,
        renderKey,
        delay,
        force
      } = userInputRKey;
      lazy !== undefined && (isLazy = lazy);
      silent !== undefined && (isSilent = silent);
      renderKey !== undefined && (_renderKey = renderKey);
      delay !== undefined && (_delay = delay);
      _force = force;
    } else {
      _renderKey = userInputRKey || defaultRenderKey;
    }

    const {
      _chainId,
      _oriChainId
    } = getNewChainData(isLazy, chainId, oriChainId, chainId2depth);
    const paramObjType = typeof paramObj;

    let _type, _cb;

    let _module = defaultModule;

    const callInvoke = () => {
      const iHandler = makeInvokeHandler(callerRef, {
        chainId: _chainId,
        oriChainId: _oriChainId,
        isLazy,
        isSilent,
        chainId2depth
      });
      return iHandler(paramObj, payload, {
        renderKey: _renderKey,
        delay: _delay,
        force: _force
      });
    };

    if (paramObjType === 'object') {
      if (Array.isArray(paramObj)) {
        const [mInArr, rInArr] = paramObj;

        if (rInArr && rInArr.__fnName) {
          _module = mInArr;
          _type = rInArr.__fnName;
        } else {
          return callInvoke();
        }
      } else {
        const {
          module,
          fn,
          type,
          cb
        } = paramObj;
        if (module) _module = module;

        if (fn && fn.__fnName) {
          _type = fn.__fnName; // 未指定module，才默认走 reducer函数的所属模块

          if (!module) _module = fn.__stateModule;
        } else {
          if (typeof type !== 'string') {
            runtimeHandler.tryHandleError(new Error('dispatchDesc.type must be string'));
            return;
          }

          _type = type;
        }

        _cb = cb;
      }
    } else if (paramObjType === 'string' || paramObjType === 'function') {
      let targetFirstParam = paramObj;

      if (paramObjType === 'function') {
        const fnName = paramObj.__fnName;

        if (!fnName) {
          // 此函数是一个普通函数，没有配置到某个模块的reducer里，降级为invoke调用
          return callInvoke(); // throw new Error('you are calling a unnamed function!!!');
        }

        targetFirstParam = fnName; // 这里非常重要，只有处于第一层的调用时，才获取函数对象上的__stateModule参数
        // 防止克隆自模块a的模块b在reducer文件里基于函数引用直接调用时，取的是a的模块相关参数了，但是源头由b发起，应该是b才对

        if (chainId2depth[_oriChainId] == 1) {
          // let dispatch can apply reducer function directly!!!
          // !!! 如果用户在b模块的组件里dispatch直接调用a模块的函数，但是确实想修改的是b模块的数据，只是想复用a模块的那个函数的逻辑
          // 那么千万要注意，写为{module:'b', fn:xxxFoo}的模式
          _module = paramObj.__stateModule;
        }
      }

      const slashCount = targetFirstParam.split('').filter(v => v === '/').length;

      if (slashCount === 0) {
        _type = targetFirstParam;
      } else if (slashCount === 1) {
        const [module, type] = targetFirstParam.split('/');
        if (module) _module = module; //targetFirstParam may like: /foo/changeName

        _type = type;
      } else {
        return Promise.reject(me$3(ERR.CC_DISPATCH_STRING_INVALID, vbi$3(targetFirstParam)));
      }
    } else {
      return Promise.reject(me$3(ERR.CC_DISPATCH_PARAM_INVALID));
    }

    if (_module === '*') {
      return ccDispatch(`*/${_type}`, payload, {
        silent: isSilent,
        lazy: isLazy,
        renderKey: _renderKey,
        force: _force
      }, _delay, {
        refModule: callerRef.ctx.module
      } // in name of refModule to call dispatch handler
      );
    }

    const p = new Promise((resolve, reject) => {
      dispatch$1({
        callerRef,
        module: _module,
        type: _type,
        payload,
        cb: _cb,
        __innerCb: _promiseErrorHandler(resolve, reject),
        delay: _delay,
        renderKey: _renderKey,
        isSilent,
        force: _force,
        chainId: _chainId,
        oriChainId: _oriChainId,
        chainId2depth // oriChainId: _oriChainId, oriChainDepth: _oriChainDepth, sourceModule: _sourceModule,

      });
    }).catch(err => {
      if (runtimeVar$3.isStrict) {
        runtimeHandler.tryHandleError(err);
      } else {
        justWarning$3(err);
      }
    });
    /**
     * 用于帮助concent识别出这是用户直接返回的Promise对象，减少一次冗余的渲染
     *   function demoMethod(p,m,ac){
     *     // ac.setState已经触发了一次渲染
     *     // demoMethod可以不用再触发渲染了
     *     return ac.setState({num1:1}); 
     *   }
     */

    p.__c2Result = true;
    return p;
  };
}
function makeModuleDispatcher(module) {
  return (action, ...args) => {
    const _action = typeof action === 'string' && !action.includes('/') ? `${module}/${action}` : action;

    return ccDispatch(_action, ...args);
  };
} // for moduleConf.init(legency) moduleConf.lifecycle.initState(v2.9+)

function makeSetStateHandler(module, initStateDone) {
  return state => {
    const execInitDoneWrap = () => initStateDone && initStateDone(makeModuleDispatcher(module), getState$7(module));

    try {
      if (!state) return void execInitDoneWrap();
      innerSetState(module, state, execInitDoneWrap);
    } catch (err) {
      const moduleState = getState$7(module);

      if (!moduleState) {
        return justWarning$3(`invalid module ${module}`);
      }

      const keys = okeys$7(moduleState);
      const {
        partialState,
        isStateEmpty,
        ignoredStateKeys
      } = extractStateByKeys(state, keys, false, true);
      if (!isStateEmpty) storeSetState(module, partialState); //store this valid state;

      if (ignoredStateKeys.length > 0) {
        justWarning$3(`invalid keys:${ignoredStateKeys.join(',')}, their value is undefined or they are not declared in module${module}`);
      }

      justTip$1(`no ccInstance found for module[${module}] currently, cc will just store it, lately ccInstance will pick this state to render`);
      execInitDoneWrap();
    }
  };
}
const makeRefSetState = ref => (partialState, cb) => {
  const ctx = ref.ctx;
  const newState = Object.assign({}, ctx.unProxyState, partialState);
  ctx.unProxyState = newState; // 和class setState(partialState, cb); 保持一致

  const cbNewState = () => cb && cb(newState); // 让ctx.state始终保持同一个引用，使setup里可以安全的解构state反复使用


  ctx.state = Object.assign(ctx.state, partialState);
  const act = runtimeHandler.act;

  const update = () => {
    if (ctx.type === CC_HOOK) {
      ctx.__boundSetState(newState); // 保持和class组件callback一样的行为，即组件渲染后再触发callback


      setTimeout(cbNewState, 0);
    } else {
      // 此处注意原始的react class setSate [,callback] 不会提供latestState
      ctx.__boundSetState(partialState, cbNewState);
    }
  }; // for rest-test-utils


  if (act) act(update);else update();
};
const makeRefForceUpdate = ref => cb => {
  const ctx = ref.ctx;
  const newState = Object.assign({}, ctx.unProxyState, ctx.__$$mstate);

  const cbNewState = () => cb && cb(newState);

  if (ctx.type === CC_HOOK) {
    ctx.__boundSetState(newState);

    cbNewState();
  } else {
    ctx.__boundForceUpdate(cbNewState);
  }
};

const getState$6 = ccContext$1.store.getState;
function initModuleLifecycle (moduleName, lifecycle = {}) {
  const {
    initState,
    initStateDone,
    loaded,
    willUnmount,
    mounted
  } = lifecycle; // 对接原来的 moduleConf.init initPost

  const validLifecycle = {};
  if (isFn$4(willUnmount)) validLifecycle.willUnmount = willUnmount;
  if (isFn$4(mounted)) validLifecycle.mounted = mounted;
  ccContext$1.lifecycle._lifecycle[moduleName] = validLifecycle;
  const moduleState = getState$6(moduleName);
  const d = makeModuleDispatcher(moduleName); // loaded just means that module state、reducer、watch、computed configuration were recorded to ccContext
  // so it is called before initState

  if (isFn$4(loaded)) {
    loaded(d, moduleState);
  }

  if (isFn$4(initState)) {
    Promise.resolve().then(() => initState(moduleState)).then(state => {
      makeSetStateHandler(moduleName, initStateDone)(state);
    }).catch(ccContext$1.runtimeHandler.tryHandleError);
  } else {
    // make sure initStateDone will be alway called no matther initState difined or not
    isFn$4(initStateDone) && initStateDone(d, moduleState);
  }
}

/**
 * 兼容v2.8之前的 moduleConf.init、initPost
 * 2.9之后不再d.ts的ModuleConf类型里暴露init、initPost，仅为了让老版本的js工程升级到2.9能正常工作
 * 如果是ts工程，则需要将init逻辑迁移到 lifecycle.initState 里，initPost 迁移到 lifecycle.initStateDone 里
 */
function getLifecycle (legencyModuleConf) {
  const lifeCycleCopy = Object.assign({}, legencyModuleConf.lifecycle); // 优先取lifecycle里的initState、initStateDone，不存在的话再去对接原来外层的init、initPost定义

  if (!lifeCycleCopy.initState) lifeCycleCopy.initState = legencyModuleConf.init;
  if (!lifeCycleCopy.initStateDone) lifeCycleCopy.initStateDone = legencyModuleConf.initPost;
  return lifeCycleCopy;
}

/** @typedef {import('../types').ModuleConfig} ModuleConfig */
const {
  isPJO: isPJO$2,
  evalState: evalState$3,
  okeys: okeys$6,
  isFn: isFn$3
} = util;
/**
 * @description configure module associate params
 * @author zzk
 * @export
 * @param {string | {[module:string]: ModuleConfig}} module
 * @param {ModuleConfig} config - when module type is string
 */

function _configure (module, config = {}) {
  const confOneMoudle = (module,
  /** @type ModuleConfig*/
  config) => {
    if (!ccContext$1.isStartup) {
      pendingModules.push({
        module,
        config
      });
      return;
    }

    if (!isPJO$2(config)) {
      throw new Error(`param config ${INAJ}`);
    }

    if (module === MODULE_GLOBAL) {
      throw new Error('configuring global module is not allowed');
    }

    const {
      state,
      reducer,
      computed,
      watch,
      ghosts = []
    } = config;
    const eState = evalState$3(state);
    if (isFn$3(state)) ccContext$1.moduleName2stateFn[module] = state;
    initModuleState(module, eState, true);
    initModuleReducer(module, reducer, ghosts);
    initModuleComputed(module, computed);
    initModuleWatch(module, watch);
    initModuleLifecycle(module, getLifecycle(config));
    ccContext$1.moduleName2isConfigured[module] = true;
    send(SIG_MODULE_CONFIGURED, module);
  }; // now module is an object that includes partial store conf


  if (isPJO$2(module)) {
    okeys$6(module).forEach(moduleName => confOneMoudle(moduleName, module[moduleName]));
  } else {
    confOneMoudle(module, config);
  }
}

function tagReducerFn(reducerFns, moduleName) {
  const taggedReducer = {};

  if (reducerFns) {
    okeys$e(reducerFns).forEach(fnName => {
      const oldFn = reducerFns[fnName];

      const fn = (...args) => oldFn(...args);

      fn.__fnName = fnName;
      fn.__stateModule = moduleName;
      taggedReducer[fnName] = fn;
    });
  }

  return taggedReducer;
}
/**
 * @param {string} newModule
 * @param {string} existingModule
 */


var _cloneModule = ((newModule, existingModule, moduleOverideConf = {}) => {
  const {
    state,
    reducer,
    computed,
    watch
  } = moduleOverideConf;

  if (!ccContext$1.isStartup) {
    throw new Error('cc is not startup yet');
  }

  checkModuleNameBasically(newModule);
  checkModuleName(existingModule, false);
  const stateFn = ccContext$1.moduleName2stateFn[existingModule];

  if (!stateFn) {
    throw new Error(`target module[${existingModule}] state must be a function when use cloneModule`);
  }

  const stateCopy = stateFn();
  Object.assign(stateCopy, evalState$4(state));
  const originalReducer = ccContext$1.reducer._reducer[existingModule]; // attach  __fnName  __stateModule, 不能污染原函数的dispatch逻辑里需要的__stateModule

  const taggedReducerCopy = Object.assign(tagReducerFn(originalReducer, newModule), tagReducerFn(reducer, newModule));
  const computedCopy = Object.assign({}, ccContext$1.computed._computedRaw[existingModule], computed);
  const watchCopy = Object.assign({}, ccContext$1.watch._watchRaw[existingModule], watch);
  const lifecycleCopy = Object.assign({}, ccContext$1.lifecycle._lifecycle[existingModule], getLifecycle(moduleOverideConf));
  const confObj = {
    state: stateCopy,
    reducer: taggedReducerCopy,
    computed: computedCopy,
    watch: watchCopy,
    lifecycle: lifecycleCopy
  };
  _configure(newModule, confObj);
});

const {
  event2handlers,
  handlerKey2handler: handlerKey2handler$1,
  ccUKey2handlerKeys: ccUKey2handlerKeys$1,
  ccUKey2ref: ccUKey2ref$3
} = ccContext$1;
const {
  makeHandlerKey,
  safeGetArray,
  justWarning: justWarning$2
} = util;

function _findEventHandlers(event, module, ccClassKey, ccUniqueKey, identity) {
  // 不用默认参数写法了
  // codesandbox lost default value
  const _identity = identity == undefined ? null : identity; // 查找的时候，只负责取，不负责隐式的生成，此次不需要用safeGetArray


  const handlers = event2handlers[event];

  if (handlers) {
    let filteredHandlers = handlers;
    if (ccUniqueKey) filteredHandlers = handlers.filter(v => v.ccUniqueKey === ccUniqueKey);else if (ccClassKey) filteredHandlers = handlers.filter(v => v.ccClassKey === ccClassKey);else if (module) filteredHandlers = handlers.filter(v => v.module === module); // identity is null means user call emit like emit('eventName')
    // identity is not null means user call emit like emit(['eventName', 'idtName'])

    if (_identity !== undefined) {
      filteredHandlers = filteredHandlers.filter(v => v.identity === _identity);
    }

    return filteredHandlers;
  }

  return [];
}

function _deleteEventHandlers(handlers) {
  const toDeleteCcUniqueKeyMap = {};
  const toDeleteEventNames = [];
  handlers.forEach(item => {
    const {
      handlerKey,
      ccUniqueKey,
      event
    } = item;
    delete handlerKey2handler$1[handlerKey]; // delete mapping of handlerKey2handler;
    toDeleteCcUniqueKeyMap[ccUniqueKey] = 1;
    if (!toDeleteEventNames.includes(event)) toDeleteEventNames.push(event);
  });
  toDeleteEventNames.forEach(event => {
    const eHandlers = event2handlers[event];

    if (eHandlers) {
      eHandlers.forEach((h, idx) => {
        const {
          ccUniqueKey
        } = h;

        if (toDeleteCcUniqueKeyMap[ccUniqueKey] === 1) {
          eHandlers[idx] = null;
          delete ccUKey2handlerKeys$1[ccUniqueKey]; // delete mapping of ccUKey2handlerKeys;
        }
      });
      event2handlers[event] = eHandlers.filter(v => v !== null); // delete eHandlers null element
    }
  });
}

function bindEventHandlerToCcContext(module, ccClassKey, ccUniqueKey, event, identity, handler) {
  const handlers = safeGetArray(event2handlers, event);

  if (!isFn$4(handler)) {
    return justWarning$2(`event ${event}'s handler ${INAF}!`);
  }

  const handlerKey = makeHandlerKey(ccUniqueKey, event, identity);
  const handlerKeys = safeGetArray(ccUKey2handlerKeys$1, ccUniqueKey);
  const targetHandlerIndex = handlers.findIndex(v => v.handlerKey === handlerKey); // user call ctx.on for a same event in a same instance more than once

  const handlerItem = {
    event,
    module,
    ccClassKey,
    ccUniqueKey,
    identity,
    handlerKey,
    fn: handler
  };

  if (targetHandlerIndex > -1) {
    // will alway use the latest handler
    handlers[targetHandlerIndex] = handlerItem;
  } else {
    handlers.push(handlerItem);
    handlerKeys.push(handlerKey);
  }

  handlerKey2handler$1[handlerKey] = handlerItem;
}
function findEventHandlersToPerform(event, ...args) {
  let _event,
      _identity = null,
      _module,
      _ccClassKey,
      _ccUniqueKey;

  let canPerform = null;

  if (typeof event === 'string') {
    _event = event;
  } else {
    _event = event.name;
    _identity = event.identity;
    _module = event.module;
    _ccClassKey = event.ccClassKey;
    _ccUniqueKey = event.ccUniqueKey;
    canPerform = event.canPerform;
  }

  const handlers = _findEventHandlers(_event, _module, _ccClassKey, _ccUniqueKey, _identity);

  handlers.forEach(({
    ccUniqueKey,
    handlerKey
  }) => {
    const ref = ccUKey2ref$3[ccUniqueKey];

    if (ref && handlerKey) {
      // confirm the instance is mounted and handler is not been offed
      if (ref.__$$ms !== MOUNTED$1) return;
      const handler = handlerKey2handler$1[handlerKey];

      if (handler) {
        if (canPerform && !canPerform(ref)) {
          return;
        }

        handler.fn(...args);
      }
    }
  });
}
function findEventHandlersToOff(event, {
  module,
  ccClassKey,
  ccUniqueKey,
  identity
}) {
  const handlers = _findEventHandlers(event, module, ccClassKey, ccUniqueKey, identity);

  _deleteEventHandlers(handlers);
}
function offEventHandlersByCcUniqueKey(ccUniqueKey) {
  const handlerKeys = ccUKey2handlerKeys$1[ccUniqueKey];

  if (handlerKeys) {
    const toDeleteHandlers = [];
    handlerKeys.forEach(k => toDeleteHandlers.push(handlerKey2handler$1[k]));

    _deleteEventHandlers(toDeleteHandlers);
  }
}
function getEventItem(event) {
  let outputEv;

  if (event && typeof event === 'object') {
    let _event;

    if (Array.isArray(event)) {
      const [name, identity] = event;
      _event = {
        name,
        identity
      };
    } else {
      _event = Object.assign({}, event);
    }

    if (!_event.identity) _event.identity = null; //否则就允许用户传如自己定义的module, ccClassKey

    outputEv = _event;
  } else {
    outputEv = {
      name: event,
      identity: null
    };
  }

  return outputEv;
}

const {
  store: {
    getModuleVer: getModuleVer$2
  }
} = ccContext$1;
function makeObState (ref, state, module, isForModule) {
  return new Proxy(state, {
    get: function (target, key) {
      // ensureStateNotExpired, 当实例失去模块数据依赖，回调方法直接使用ctx.state时，state里的模块数据可能已过期
      if (isForModule) {
        const modVer = getModuleVer$2(module);
        const ctx = ref.ctx;

        if (modVer !== ctx.__$$prevModuleVer) {
          ctx.__$$prevModuleVer = modVer;
          Object.assign(state, ctx.__$$mstate);
        }
      }

      updateDep(ref, module, key, isForModule);
      return target[key];
    },
    set: function (target, key, value) {
      // 这个warning暂时关闭，因为buildRefCtx阶段就生成了obState, refComputed里可能会调用commit向obState写入新的state
      // justWarning(`warning: state key[${key}] can not been changed manually, use api setState or dispatch instead`);
      // 允许赋最新值，否则silentUpdate状态合并会失效
      target[key] = value; // avoid Uncaught TypeError: 'set' on proxy: trap returned falsish for property '***'

      return true;
    }
  });
}

function getDefineWatchHandler (refCtx) {
  return (watchItem, watchHandler, depKeysOrOpt) => {
    const confMeta = {
      type: FN_WATCH,
      refCtx,
      stateKeys: refCtx.stateKeys,
      retKeyFns: refCtx.watchRetKeyFns,
      module: refCtx.module,
      connect: refCtx.connect,
      dep: refCtx.watchDep
    };
    refCtx.__$$cuOrWaCalled = true;
    configureDepFns(CATE_REF, confMeta, watchItem, watchHandler, depKeysOrOpt);
  };
}

/** @typedef {import('../../types-inner').IRefCtx} IRefCtx */
function getDefineComputedHandler (
/** @type IRefCtx */
refCtx) {
  return (computedItem, computedHandler, depKeysOrOpt) => {
    const confMeta = {
      type: FN_CU,
      refCtx,
      stateKeys: refCtx.stateKeys,
      retKeyFns: refCtx.computedRetKeyFns,
      module: refCtx.module,
      connect: refCtx.connect,
      dep: refCtx.computedDep
    };
    refCtx.__$$cuOrWaCalled = true;
    configureDepFns(CATE_REF, confMeta, computedItem, computedHandler, depKeysOrOpt);
    return refCtx.refComputed;
  };
}

const {
  makeUniqueCcKey
} = util;
function computeCcUniqueKey (ccClassKey, ccKey, tag) {
  const featureStr = ccKey || uuid(tag);
  return makeUniqueCcKey(ccClassKey, featureStr);
}

function getOutProps (props) {
  if (props) {
    return props.props || props; //把最外层的props传递给用户
  } else {
    return {};
  }
}

const {
  store: {
    getState: getState$5
  }
} = ccContext$1;

function getValFromEvent(e) {
  const se = convertToStandardEvent(e);

  if (se) {
    return se.currentTarget.value;
  } else {
    return e;
  }
}

var buildMockEvent = ((spec, e, refCtx) => {
  const {
    module: refModule,
    state: refState
  } = refCtx;
  let ccint = false,
      ccsync = '',
      ccrkey = '',
      value = '',
      extraState = null,
      ccdelay = -1,
      isToggleBool = false;
  const syncKey = spec[CCSYNC_KEY];
  const type = spec.type;
  let noAutoExtract = false;

  if (syncKey !== undefined) {
    // 来自sync生成的setter函数调用 即 sync('xxxKey')
    ccsync = syncKey;
    ccdelay = spec.delay;
    ccrkey = spec.rkey; // type 'bool', 'val', 'int', 'as'

    ccint = type === 'int'; // convert to int

    isToggleBool = type === 'bool';
    let keyPath, fullKeyPath, module;

    if (ccsync.includes('/')) {
      const [_module, _keyPath] = ccsync.split('/');
      keyPath = _keyPath;
      fullKeyPath = ccsync;
      module = _module;
    } else {
      keyPath = ccsync;
      fullKeyPath = `${refModule}/${keyPath}`;
      module = refModule;
    }

    const mState = getState$5(module); // 布尔值需要对原来的值取反

    const fullState = module !== refModule ? mState : refState;
    value = type === 'bool' ? !getValueByKeyPath(fullState, keyPath) : getValFromEvent(e); // 优先从spec里取，取不到的话，从e里面分析并提取

    const val = spec.val;

    if (val === undefined) ; else {
      if (isFn$4(val)) {
        // moduleState指的是所修改的目标模块的state
        const syncRet = val( // TODO: syncCtx 填写函数 setVal(keyPath, value)
        value, keyPath, {
          event: e,
          module,
          moduleState: mState,
          fullKeyPath,
          state: refState,
          refCtx
        });

        if (syncRet != undefined) {
          if (type === 'as') value = syncRet; // value is what cb returns;
          else {
              const retType = typeof syncRet;

              if (retType === 'boolean') {
                // if return true, let noAutoExtract = false, 
                // so this cb will not block state update, and cc will extract partial state automatically
                // if return false, let noAutoExtract = true, but now extraState is still null, 
                // so this cb will block state update
                noAutoExtract = !syncRet;
              } else if (retType === 'object') {
                noAutoExtract = true;
                extraState = syncRet;
              } else {
                justWarning$6(`syncKey[${syncKey}] cb result type error.`);
              }
            }
        } else {
          if (type === 'as') noAutoExtract = true; // if syncAs return undefined, will block update
          // else continue update and value is just extracted above
        }
      } else {
        value = val;
      }
    }
  } else {
    // 来自于sync直接调用 <input data-ccsync="foo/f1" onChange={this.sync} /> 
    const se = convertToStandardEvent(e);

    if (se) {
      // e is event
      const currentTarget = se.currentTarget;
      value = currentTarget.value;
      const dataset = currentTarget.dataset;
      if (type === 'int') ccint = true;else ccint = dataset.ccint !== undefined;
      ccsync = dataset.ccsync;
      if (!ccsync) return null;
      ccrkey = dataset.ccrkey;
      const dataSetDelay = dataset.ccdelay;

      if (dataSetDelay) {
        try {
          ccdelay = parseInt(dataSetDelay);
        } catch (err) {// do nothing
        }
      }
    } else {
      // <Input onChange={this.sync}/> is invalid
      return null;
    }
  }

  return {
    currentTarget: {
      value,
      extraState,
      noAutoExtract,
      dataset: {
        ccsync,
        ccint,
        ccdelay,
        ccrkey
      }
    },
    isToggleBool
  };
});

function setValue(obj, keys, lastKeyIndex, keyIndex, value, isToggleBool = false) {
  const key = keys[keyIndex];
  let oriVal = obj[key];

  if (lastKeyIndex === keyIndex) {
    if (isToggleBool === true) {
      if (typeof oriVal !== 'boolean') {
        justWarning$6(`key[${key}]'s value type is not boolean`);
      } else {
        obj[key] = !oriVal;
      }
    } else {
      obj[key] = value;
    }
  } else {
    let newVal = shallowCopy(oriVal);
    obj[key] = newVal;
    setValue(newVal, keys, lastKeyIndex, ++keyIndex, value, isToggleBool);
  }
}

var extractStateByCcsync = ((ccsync, value, ccint, oriState, isToggleBool, refModule) => {
  let _value = value;

  if (ccint === true) {
    _value = parseInt(value); // strict?

    if (Number.isNaN(_value)) {
      justWarning$6(`${value} can not convert to int but you set ccint as true!！`);
      _value = value;
    }
  }

  let module = refModule,
      keys = [];

  if (ccsync.includes('/')) {
    const [_module, keyOrKeyPath] = ccsync.split('/');
    module = _module;

    if (keyOrKeyPath.includes('.')) {
      keys = keyOrKeyPath.split('.');
    } else {
      keys = [keyOrKeyPath];
    }
  } else if (ccsync.includes('.')) {
    keys = ccsync.split('.');
  } else {
    keys = [ccsync];
  }

  const keyPath = keys.join('.');

  if (keys.length === 1) {
    const targetStateKey = keys[0];

    if (isToggleBool === true) {
      return {
        module,
        keys,
        keyPath,
        state: {
          [targetStateKey]: !oriState[targetStateKey]
        }
      };
    } else {
      return {
        module,
        keys,
        keyPath,
        state: {
          [targetStateKey]: _value
        }
      };
    }
  } else {
    const [key, ...restKeys] = keys;
    const subState = shallowCopy(oriState[key]);
    setValue(subState, restKeys, restKeys.length - 1, 0, _value, isToggleBool);
    return {
      module,
      keys,
      keyPath,
      state: {
        [key]: subState
      }
    };
  }
});

const {
  store: {
    getState: getState$4
  }
} = ccContext$1;
function __sync (spec, ref, e) {
  const refCtx = ref.ctx;
  const mockE = buildMockEvent(spec, e, refCtx);
  if (!mockE) return; // 参数无效 例如 <input onChange={this.sync}/> 导致

  const {
    ccKey,
    ccUniqueKey,
    module: refModule
  } = refCtx;
  const currentTarget = mockE.currentTarget;
  const {
    dataset,
    value,
    extraState,
    noAutoExtract
  } = currentTarget;
  if (e && e.stopPropagation) e.stopPropagation();
  const {
    ccint,
    ccdelay,
    ccrkey
  } = dataset;
  let ccsync = dataset.ccsync;

  if (ccsync.startsWith('/')) {
    ccsync = `${refModule}${ccsync}`; // 附加上默认模块值
  }

  const options = {
    calledBy: SYNC,
    ccKey,
    ccUniqueKey,
    module: refModule,
    renderKey: ccrkey,
    delay: ccdelay
  };

  const doExtract = fullState => extractStateByCcsync(ccsync, value, ccint, fullState, mockE.isToggleBool, refModule);

  if (ccsync.includes('/')) {
    // syncModuleState 同步模块的state状态
    const targetModule = ccsync.split('/')[0];
    checkModuleName(targetModule, false);
    options.module = targetModule;

    if (noAutoExtract) {
      if (extraState) startChangeRefState(extraState, options, ref);
      return;
    }

    const fullState = targetModule !== refModule ? getState$4(targetModule) : ref.state;
    const {
      state,
      module,
      keys,
      keyPath
    } = doExtract(fullState);
    Object.assign(options, {
      module,
      keys,
      keyPath
    });
    startChangeRefState(state, options, ref);
  } else {
    // 调用自己的setState句柄触发更新，key可能属于local的，也可能属于module的
    if (noAutoExtract) {
      if (extraState) ref.setState(extraState, null, options);
      return;
    }

    const {
      state,
      module,
      keys,
      keyPath
    } = doExtract(ref.state);
    Object.assign(options, {
      module,
      keys,
      keyPath
    });
    ref.setState(state, null, options);
  }
}

const {
  getModuleStateKeys: getModuleStateKeys$1
} = ccContext$1;
const {
  verifyKeys,
  verboseInfo: vbi$2,
  okeys: okeys$5
} = util;
function getStoredKeys(belongMotule, refPrivState, ccOptionStoredKeys, regStoredKeys) {
  const targetStoredKeys = ccOptionStoredKeys || regStoredKeys;

  if (!targetStoredKeys) {
    return [];
  }

  const moduleStateKeys = getModuleStateKeys$1(belongMotule);

  if (targetStoredKeys === '*') {
    // refPrivState里可能含有moduleStateKey，需要进一步过滤
    return okeys$5(refPrivState).filter(k => !moduleStateKeys.includes(k));
  } else {
    checkStoredKeys(belongMotule, targetStoredKeys);
    return targetStoredKeys;
  }
}
function getWatchedStateKeys(module, ccClassKey, regWatchedKeys) {
  if (ccClassKey === CC_DISPATCHER) return [];
  if (!regWatchedKeys) return [];

  if (regWatchedKeys === '*') {
    return getModuleStateKeys$1(module);
  }

  if (regWatchedKeys === '-') {
    return regWatchedKeys;
  }

  const {
    notArray,
    keyElementNotString
  } = verifyKeys(regWatchedKeys, []);

  if (notArray || keyElementNotString) {
    const vbiInfo = vbi$2(`ccClassKey:${ccClassKey}`);
    throw new Error(`watchedKeys ${STR_ARR_OR_STAR} ${vbiInfo}`);
  }

  return regWatchedKeys;
}
function getConnect(regConnect) {
  const targetConnect = regConnect || {}; // codesandbox lost default value

  if (!isPJO$7(targetConnect, true)) {
    throw new Error(`param connect type error, it ${INAJ} or string array`);
  }

  const isArr = Array.isArray(targetConnect);
  let finalConnect = {};

  if (isArr || typeof targetConnect === 'string') {
    const connectedModules = isArr ? targetConnect : targetConnect.split(',');
    connectedModules.forEach(m => {
      finalConnect[m] = '-'; //标识自动收集观察依赖
    });
  } else {
    finalConnect = regConnect;
  } // 未设定连接$$global模块的watchedKeys参数时，自动连接$$global模块，并默认采用依赖收集


  if (!finalConnect[MODULE_GLOBAL]) {
    finalConnect[MODULE_GLOBAL] = '-';
  }

  checkConnectSpec(finalConnect);
  return finalConnect;
}

/** @typedef {import('../../types-inner').IRefCtx} ICtx */
const {
  reducer: {
    _caller: _caller$1,
    _module2fnNames,
    _module2Ghosts
  },
  refStore,
  getModuleStateKeys,
  store: {
    getState: getState$3,
    getModuleVer: getModuleVer$1
  }
} = ccContext$1;
const {
  okeys: okeys$4,
  makeError: me$2,
  verboseInfo: vbi$1,
  isObject: isObject$1,
  isBool,
  justWarning: justWarning$1,
  isObjectNull: isObjectNull$1,
  isValueNotNull,
  noDupPush
} = util;
let idSeq = 0;

function getEId() {
  idSeq += 1;
  return Symbol(`__autoGen_${idSeq}__`);
}

let fnKey = 0;

function getFnKey() {
  fnKey += 1;
  return `${fnKey}`;
}

const noop$1 = () => {};

const eType = th => `type of defineEffect ${th} param must be`;

const getWatchedKeys = ctx => {
  if (ctx.watchedKeys === '-') {
    if (ctx.__$$renderStatus === START) return okeys$4(ctx.__$$compareWaKeys);else return okeys$4(ctx.__$$curWaKeys);
  }

  return ctx.watchedKeys;
};

const getConnectWatchedKeys = (ctx, moduleName) => {
  const {
    connect,
    connectedModules
  } = ctx;
  const isConnectArr = Array.isArray(connect);

  const getModuleWaKeys = m => {
    if (ctx.__$$renderStatus === START) return okeys$4(ctx.__$$compareConnWaKeys[m]);else return okeys$4(ctx.__$$curConnWaKeys[m]);
  };

  const getWKeys = moduleName => {
    if (isConnectArr) {
      // auto observe connect modules
      return getModuleWaKeys(moduleName);
    } else {
      const waKeys = connect[moduleName];
      if (waKeys === '*') return getModuleStateKeys(moduleName);else if (waKeys === '-') return getModuleWaKeys(moduleName);else return waKeys;
    }
  };

  if (moduleName) return getWKeys(moduleName);else {
    const cKeys = {};
    connectedModules.forEach(m => {
      cKeys[m] = getWKeys(m);
    });
    return cKeys;
  }
};

function recordDep(ccUniqueKey, moduleName, watchedKeys) {
  const waKeys = watchedKeys === '*' ? getModuleStateKeys(moduleName) : watchedKeys;
  waKeys.forEach(stateKey => mapIns(moduleName, stateKey, ccUniqueKey));
}

function makeProxyReducer(m, dispatch, reducerFnType = 0, ghostFnName) {
  // 此处代理对象仅用于log时可以打印出目标模块reducer函数集合
  return new Proxy(_caller$1[m] || {}, {
    get: (target, fnName) => {
      const fnNames = _module2fnNames[m];

      if (fnNames.includes(fnName)) {
        // renderKey: rkeyOrOption
        return (payload, renderKey, delay) => {
          const callerParams = {
            module: m,
            fnName,
            payload,
            renderKey,
            delay
          };
          if (reducerFnType === 0) return dispatch(`${m}/${fnName}`, payload, renderKey, delay);
          if (reducerFnType === 1) return callerParams;

          if (reducerFnType === 2) {
            if (fnName === ghostFnName) return justWarning$1(`the target fn[${fnName}] can't be a ghost`);
            return dispatch(`${m}/${ghostFnName}`, callerParams, renderKey, delay);
          }
        };
      } else {
        // 可能是原型链上的其他方法或属性调用
        return target[fnName];
      }
    }
  });
}

function bindCtxToRef(isCtxNull, ref, ctx) {
  if (isCtxNull) return ref.ctx = ctx; // 适配热加载或者异步渲染里, 需要清理ctx里运行时收集的相关数据，重新分配即可
  // 这里需要把第一次渲染期间已经收集好的依赖再次透传给ref.ctx

  const {
    __$$curWaKeys,
    __$$compareWaKeys,
    __$$compareWaKeyCount,
    __$$nextCompareWaKeys,
    __$$nextCompareWaKeyCount,
    __$$curConnWaKeys,
    __$$compareConnWaKeys,
    __$$compareConnWaKeyCount,
    __$$nextCompareConnWaKeys,
    __$$nextCompareConnWaKeyCount
  } = ref.ctx;
  Object.assign(ref.ctx, ctx, {
    __$$curWaKeys,
    __$$compareWaKeys,
    __$$compareWaKeyCount,
    __$$nextCompareWaKeys,
    __$$nextCompareWaKeyCount,
    __$$curConnWaKeys,
    __$$compareConnWaKeys,
    __$$compareConnWaKeyCount,
    __$$nextCompareConnWaKeys,
    __$$nextCompareConnWaKeyCount
  });
}

function bindInitStateHandler(ref, ctx, registryState, refStoredState, mstate, modStateKeys) {
  // allow user have a chance to define state in setup block
  ctx.initState = initialStateOrCb => {
    let initialState = initialStateOrCb;

    if (isFn$4(initialStateOrCb)) {
      initialState = initialStateOrCb();
    }

    if (!ctx.__$$inBM) {
      return justWarning$1(`initState must been called in setup block!`);
    }

    if (!isPJO$7(registryState)) {
      return justWarning$1(`state ${INAJ}`);
    }

    if (ctx.__$$cuOrWaCalled) {
      return justWarning$1(`initState must been called before computed or watch`);
    }

    const newRefState = Object.assign({}, registryState, initialState, refStoredState, mstate); // 更新stateKeys，防止遗漏新的私有stateKey

    ctx.stateKeys = okeys$4(newRefState);
    ctx.privStateKeys = removeArrElements(okeys$4(newRefState), modStateKeys);
    ctx.prevState = Object.assign({}, newRefState);
    ctx.unProxyState = newRefState;
    ref.state = Object.assign(ctx.state, newRefState); // 扩展私有属性后，type.d.ts里会自动计算新的fullState，
    // 这里直接返回ctx, 但类型文件仅描述了可解构使用的有 state、setState、computed、watch 四个属性
    // 导出这四个属性可方便直接使用推导出的合并类型

    return ctx;
  };
}

function bindModApis(ref, ctx, stateModule, liteLevel, setState) {
  // 创建dispatch需要ref.ctx里的ccClassKey相关信息, 所以这里放在ref.ctx赋值之后在调用makeDispatchHandler
  const dispatch = makeDispatchHandler(ref, false, false, stateModule);
  ctx.dispatch = dispatch;

  if (liteLevel > 1) {
    // level 2, assign these mod data api
    ctx.lazyDispatch = makeDispatchHandler(ref, true, false, stateModule);
    ctx.silentDispatch = makeDispatchHandler(ref, false, true, stateModule);
    ctx.dispatchLazy = ctx.lazyDispatch; // alias of lazyDispatch

    ctx.dispatchSilent = ctx.silentDispatch; // alias of silentDispatch

    ctx.invoke = makeInvokeHandler(ref);
    ctx.lazyInvoke = makeInvokeHandler(ref, {
      isLazy: true
    });
    ctx.silentInvoke = makeInvokeHandler(ref, {
      isLazy: false,
      isSilent: true
    });
    ctx.invokeLazy = ctx.lazyInvoke; // alias of lazyInvoke

    ctx.invokeSilent = ctx.silentInvoke; // alias of silentInvoke

    ctx.setGlobalState = (state, reactCallback, renderKey, delay) => {
      setState(MODULE_GLOBAL, state, SET_STATE$1, reactCallback, renderKey, delay);
    };
  }

  return dispatch;
}

function bindSyncApis(ref, ctx, liteLevel) {
  if (liteLevel > 2) {
    // level 3, assign async api
    const cachedBoundFns = {};

    const doSync = (type, e, val, rkey, delay) => {
      if (typeof e === 'string') {
        const valType = typeof val; // now val is syncCb

        if (isValueNotNull(val) && (valType === OBJ || valType === FN)) {
          return __sync.bind(null, {
            [CCSYNC_KEY]: e,
            type,
            val,
            delay,
            rkey
          }, ref);
        }

        const key = `${e}|${val}|${rkey}|${delay}`;
        let boundFn = cachedBoundFns[key];

        if (!boundFn) {
          cachedBoundFns[key] = __sync.bind(null, {
            [CCSYNC_KEY]: e,
            type,
            val,
            delay,
            rkey
          }, ref);
          boundFn = cachedBoundFns[key];
        }

        return boundFn;
      } // case: <input data-ccsync="foo/f1" onChange={ctx.sync} />


      __sync({
        type: 'val'
      }, ref, e);
    }; // syncer series


    const makeTrap = type => ({
      get(target, key) {
        if (isKeyValid(target, key)) return doSync(type, key);
        return noop$2;
      }

    });

    ctx.syncer = new Proxy(ctx.state, makeTrap('val'));
    ctx.syncerOfBool = new Proxy(ctx.state, makeTrap('bool'));
    ctx.sybo = ctx.syncerOfBool; // alias of syncerOfBool
    // sync series

    ctx.sync = (e, val, rkey = '', delay = -1) => doSync('val', e, val, rkey, delay);

    ctx.syncBool = (e, val, rkey = '', delay = -1) => doSync('bool', e, val, rkey, delay);

    ctx.syncInt = (e, val, rkey = '', delay = -1) => doSync('int', e, val, rkey, delay);

    ctx.syncAs = (e, val, rkey = '', delay = -1) => doSync('as', e, val, rkey, delay);

    ctx.set = (ccsync, val, rkey = '', delay = -1) => {
      __sync({
        [CCSYNC_KEY]: ccsync,
        type: 'val',
        val,
        delay,
        rkey
      }, ref);
    };

    ctx.setBool = (ccsync, rkey = '', delay = -1) => {
      __sync({
        [CCSYNC_KEY]: ccsync,
        type: 'bool',
        delay,
        rkey
      }, ref);
    };
  }
}

function bindEventApis(ctx, liteLevel, ccUniqueKey) {
  if (liteLevel > 3) {
    // level 4, assign event api
    ctx.emit = (event, ...args) => {
      findEventHandlersToPerform(getEventItem(event), ...args);
    }; // 默认off掉当前实例对某个事件名的所有监听


    ctx.off = (event, {
      module,
      ccClassKey,
      ccUniqueKey: inputCcUkey = ccUniqueKey
    } = {}) => {
      let targetCcUkey = inputCcUkey; // 传递了 module 或者 ccClassKey的话，清理掉targetCcUkey，表示off的目标要扩大

      if (module || ccClassKey) targetCcUkey = ''; // 这里刻意不为identity赋默认值，如果是undefined，表示off掉所有监听

      const {
        name,
        identity
      } = getEventItem(event);
      findEventHandlersToOff(name, {
        module,
        ccClassKey,
        ccUniqueKey: targetCcUkey,
        identity
      });
    };

    ctx.on = (inputEvent, handler) => {
      ctx.__$$onEvents.push({
        inputEvent,
        handler
      });
    };
  }
}

function _makeCuWaDesc(moduleName, fnKeyOrDesc, cb, cbOptions) {
  const newDesc = {};

  const makeFnDesc = (fn, cbOptions = {}) => {
    const fnDesc = isObject$2(fn) ? fn : {
      fn
    }; // 因为加上 / 后，cb的state类型会和模块相关了，types文件目前不方便推导含 / 的cb参数类型
    // 所以types文件里不允许传递 allowSlash 标记，让用户定义的retKey包含 / 会报运行时错误
    // 同时额外提供的 watchModule方法和 computedModule 方法需要用到 / 携带模块的特性
    // 故需内部放过不允许key包含slash的校验，所以这里加上 allowSlash 标记

    let opts = {};
    if (cbOptions) opts = isObject$2(cbOptions) ? cbOptions : {
      depKeys: cbOptions
    };
    return Object.assign({
      allowSlash: true,
      depKeyModule: moduleName
    }, opts, fnDesc);
  };

  if (typeof fnKeyOrDesc === 'string') {
    newDesc[`${moduleName}/${fnKeyOrDesc}`] = makeFnDesc(cb, cbOptions);
  } else if (isObject$2(fnKeyOrDesc)) {
    okeys$e(fnKeyOrDesc).forEach(key => {
      newDesc[`${moduleName}/${key}`] = makeFnDesc(fnKeyOrDesc[key]);
    });
  }

  return newDesc;
}

function bindEnhanceApis(ctx, liteLevel, stateModule) {
  const effectItems = [],
        effectPropsItems = []; // {fn:function, status:0, eId:'', immediate:true}

  const eid2effectReturnCb = {},
        eid2effectPropsReturnCb = {}; // fn

  ctx.effectMeta = {
    effectItems,
    eid2effectReturnCb,
    effectPropsItems,
    eid2effectPropsReturnCb
  };

  if (liteLevel > 4) {
    // level 5, assign enhance api
    ctx.execute = handler => ctx.execute = handler;

    ctx.watch = getDefineWatchHandler(ctx);
    ctx.computed = getDefineComputedHandler(ctx); // 方便type文件定义类型时能够推导出cb的参数类型为已连接的模块状态类型

    ctx.watchModule = (moduleName, cb, cbOptions = {}) => {
      if (isFn$4(cb)) {
        ctx.watch(_makeCuWaDesc(moduleName, getFnKey(), cb, cbOptions));
      } else {
        ctx.watch(_makeCuWaDesc(moduleName, cb));
      }
    }; // 方便type文件定义类型时能够推导出cb的参数类型为已连接的模块状态类型


    ctx.computedModule = (moduleName, retKey, cb, cbOptions) => {
      return ctx.computed(_makeCuWaDesc(moduleName, retKey, cb, cbOptions));
    };

    const makeEffectHandler = (targetEffectItems, isProp) => (fn, depKeysOrOpt, compare, immediate = true) => {
      if (!isFn$4(fn)) throw new Error(`${eType('first')} function`);
      const compareForEf = compare === undefined ? false : compare; // 对于effectProps 第三位参数就是immediate, 不传的话，默认是true

      const immediateForEfProp = compare === undefined ? true : compare; // depKeys 为 null 和 undefined, 表示无任何依赖，每一轮都执行的副作用

      let _depKeys = depKeysOrOpt;
      let _compare = compareForEf;

      let _immediate = isProp ? immediateForEfProp : immediate;

      if (isObject$1(depKeysOrOpt)) {
        _depKeys = depKeysOrOpt.depKeys;
        _compare = isBool(depKeysOrOpt.compare) ? depKeysOrOpt.compare : compare;
        _immediate = isBool(depKeysOrOpt.immediate) ? depKeysOrOpt.immediate : immediate;
      }

      if (_depKeys !== undefined && _depKeys !== null && !Array.isArray(_depKeys)) {
        throw new Error(`${eType('second')} array, null, or undefined`);
      }

      const modDepKeys = [];

      if (!isProp && _depKeys) {
        _depKeys.forEach(depKey => {
          let modDepKey;

          if (depKey.includes('/')) {
            modDepKey = depKey;
            const [m] = depKey.split('/');

            if (!ctx.connect[m]) {
              throw me$2(ERR.CC_MODULE_NOT_CONNECTED, vbi$1(`depKey[${depKey}]`));
            }
          } else {
            // 这里要注意， 私有的key
            modDepKey = `${stateModule}/${depKey}`;
          }

          modDepKeys.push(modDepKey); // 先暂时保持起来，组件挂载时才映射依赖

          ctx.__$$staticWaKeys[modDepKey] = 1;
        });
      } // 对于effectProps来说是不会读取compare属性来用的


      const effectItem = {
        fn,
        isProp,
        depKeys: _depKeys,
        modDepKeys,
        eId: getEId(),
        compare: _compare,
        immediate: _immediate
      };
      targetEffectItems.push(effectItem);
    };

    ctx.effect = makeEffectHandler(effectItems, false);
    ctx.effectProps = makeEffectHandler(effectPropsItems, true);
  }
}

function fillCtxOtherAttrs(ref, ctx, connect, watchedKeys, ccUniqueKey, stateModule, allModules, dispatch) {
  // 构造完毕ctx后，开始创建 reducer，和可观察 connectedState
  const {
    connectedReducer,
    connectedState,
    __$$curConnWaKeys,
    __$$compareConnWaKeys,
    __$$compareConnWaKeyCount,
    __$$nextCompareConnWaKeys,
    __$$nextCompareConnWaKeyCount
  } = ctx; // 实例所属模块或连接模块是否处于自动观察状态

  let __$$autoWatch = false; // 向实例的reducer里绑定方法，key:{module} value:{reducerFn}
  // 只绑定所属的模块和已连接的模块的reducer方法

  allModules.forEach(m => {
    const rd = makeProxyReducer(m, dispatch);

    if (m === stateModule) {
      ctx.moduleReducer = rd;
      ctx.mrc = makeProxyReducer(m, dispatch, 1);
      const ghosts = _module2Ghosts[m] || [];
      ghosts.forEach(ghostFnName => {
        ctx.mrg[ghostFnName] = makeProxyReducer(m, dispatch, 2, ghostFnName);
      });
      if (m === MODULE_GLOBAL) connectedReducer[m] = rd;
    } else {
      connectedReducer[m] = rd;
    }

    const connectDesc = connect[m];

    if (connectDesc) {
      let moduleState = getState$3(m);

      if (connectDesc === '-') {
        // auto watch
        __$$autoWatch = true;
        __$$curConnWaKeys[m] = {};
        __$$compareConnWaKeys[m] = {};
        __$$compareConnWaKeyCount[m] = 0;
        __$$nextCompareConnWaKeys[m] = {};
        __$$nextCompareConnWaKeyCount[m] = 0;
        if (m === MODULE_GLOBAL) moduleState = ctx.globalState;else moduleState = makeObState(ref, moduleState, m);
      } else {
        // 非自动收集，这里就需要写入waKey2uKeyMap来记录依赖关系了
        recordDep(ccUniqueKey, m, connectDesc);
      }

      connectedState[m] = moduleState;
    }
  });
  ctx.reducer = _caller$1;
  ctx.globalReducer = connectedReducer[MODULE_GLOBAL]; // alias

  ctx.mr = ctx.moduleReducer;
  ctx.gr = ctx.globalReducer;
  ctx.cr = ctx.connectedReducer;
  ctx.r = ctx.reducer;

  if (watchedKeys === '-') {
    __$$autoWatch = true;
  } else {
    // 开始记录依赖
    recordDep(ccUniqueKey, stateModule, watchedKeys);
  }

  ctx.__$$autoWatch = __$$autoWatch;
}
/**
 * 构建refCtx，附加到ref上
 * liteLevel 越小，绑定的方法越少
 */


function buildRefCtx (ref, params, liteLevel = 5) {
  // 能省赋默认值的就省，比如state，外层调用都保证赋值过了
  const {
    ccKey = '',
    state,
    id,
    ccOption = {},
    module,
    ccClassKey,
    type,
    insType,
    tag = '',
    storedKeys = [],
    persistStoredKeys = false,
    watchedKeys = '-',
    connect = {}
  } = params;
  const stateModule = module;
  const existedCtx = ref.ctx;
  const isCtxNull = isObjectNull$1(existedCtx); // 做个保护判断，防止 ctx = {}

  const modStateKeys = getModuleStateKeys(stateModule);
  let __boundSetState = ref.setState,
      __boundForceUpdate = ref.forceUpdate; // 如果已存在ctx，则直接指向原来的__bound，否则会造成无限递归调用栈溢出
  // 做个保护判断，防止 ctx = {}
  // const act = runtimeHandler.act;// for react-test-utils

  if (!isCtxNull && existedCtx.ccUniqueKey) {
    __boundSetState = existedCtx.__boundSetState;
    __boundForceUpdate = existedCtx.__boundForceUpdate;
  } else if (type !== CC_HOOK) {
    __boundSetState = ref.setState.bind(ref);
    __boundForceUpdate = ref.forceUpdate.bind(ref);
  }

  const refOption = {};
  refOption.persistStoredKeys = ccOption.persistStoredKeys === undefined ? persistStoredKeys : ccOption.persistStoredKeys;
  refOption.tag = ccOption.tag || tag; // pick ccOption tag first, register tag second

  const ccUniqueKey = computeCcUniqueKey(ccClassKey, ccKey, refOption.tag); // 没有设定renderKey的话读id，最后才默认renderKey为ccUniqueKey

  refOption.renderKey = ccOption.renderKey || id || ccUniqueKey;
  refOption.storedKeys = getStoredKeys(stateModule, state, ccOption.storedKeys, storedKeys); // 用户使用ccKey属性的话，必需显示的指定ccClassKey

  if (ccKey && !ccClassKey) {
    throw new Error(`missing ccClassKey while init a cc ins with ccKey[${ccKey}]`);
  }

  if (refOption.storedKeys.length > 0) {
    if (!ccKey) throw me$2(ERR.CC_STORED_KEYS_NEED_CCKEY, vbi$1(`ccClassKey[${ccClassKey}]`));
  }

  const mstate = getState$3(module); // recover ref state

  const refStoredState = refStore._state[ccUniqueKey] || {};
  const mergedState = Object.assign({}, state, refStoredState, mstate);
  ref.state = mergedState;
  const stateKeys = okeys$4(mergedState);
  const connectedModules = okeys$4(connect);
  const connectedComputed = {};
  connectedModules.forEach(m => {
    connectedComputed[m] = makeCuRefObContainer(ref, m, false);
  });
  const moduleComputed = makeCuRefObContainer(ref, module); // 所有实例都自动连接上了global模块，这里可直接取connectedComputed已做好的结果

  const globalComputed = connectedComputed[MODULE_GLOBAL];
  const globalState = makeObState(ref, getState$3(MODULE_GLOBAL), MODULE_GLOBAL, false); // extract privStateKeys

  const privStateKeys = removeArrElements(okeys$4(state), modStateKeys);
  const moduleState = module === MODULE_GLOBAL ? globalState : makeObState(ref, mstate, module, true); // declare cc state series api

  const changeState = (state, options) => {
    startChangeRefState(state, options, ref);
  };

  const _setState = (module, state, calledBy, reactCallback, renderKey, delay) => {
    const options = {
      calledBy,
      module,
      reactCallback
    };
    if (isObject$2(renderKey)) Object.assign(options, renderKey); // 丢弃delay，renderKeyAsOpt里的delay
    else Object.assign(options, {
        renderKey,
        delay
      });
    changeState(state, options);
  };

  const setModuleState = (module, state, reactCallback, renderKey, delay) => {
    _setState(module, state, SET_MODULE_STATE, reactCallback, renderKey, delay);
  };

  const setState = (p1, p2, p3, p4, p5) => {
    const p1Type = typeof p1;

    if (p1Type === 'string') {
      // p1: module, p2: state, p3: cb, p4: rkey, p5: delay
      setModuleState(p1, p2, p3, p4, p5);
    } else if (p1Type === 'function') {
      // p1: stateFn, p2: rkey, p3: delay
      const newState = p1(Object.assign({}, ctx.unProxyState), ctx.props);

      _setState(stateModule, newState, SET_STATE$1, p2, p3, p4);
    } else {
      // p1: state, p2: cb, p3: rkey, p4: delay
      _setState(stateModule, p1, SET_STATE$1, p2, p3, p4);
    }
  };

  const forceUpdate = (reactCallback, renderKey, delay) => {
    _setState(stateModule, ref.unProxyState, FORCE_UPDATE$1, reactCallback, renderKey, delay);
  };

  const refs = {};
  const allModules = connectedModules.slice(); // 已在change-ref-state里做优化，支持组件即属于又连接同一个模块，不会照成冗余渲染，
  // 所以此处allModules包含了module对渲染性能无影响，不过代码的语义上会照成重复的表达

  noDupPush(allModules, module);
  const props = getOutProps(ref.props);
  const now = Date.now();
  const ctx = {
    // static params
    type,
    insType,
    module,
    ccClassKey,
    ccKey,
    ccUniqueKey,
    renderCount: 0,
    initTime: now,
    watchedKeys,
    privStateKeys,
    connect,
    connectedModules,
    allModules,
    // dynamic meta, I don't want user know these props, so let field name start with __$$
    __$$onEvents: [],
    // 当组件还未挂载时，将事件存到__$$onEvents里，当组件挂载时才开始真正监听事件
    __$$hasModuleState: modStateKeys.length > 0,
    __$$renderStatus: UNSTART,
    __$$curWaKeys: {},
    __$$compareWaKeys: {},
    __$$compareWaKeyCount: 0,
    // write before render
    __$$nextCompareWaKeys: {},
    __$$nextCompareWaKeyCount: 0,
    __$$curConnWaKeys: {},
    __$$compareConnWaKeys: {},
    __$$compareConnWaKeyCount: {},
    __$$nextCompareConnWaKeys: {},
    __$$nextCompareConnWaKeyCount: {},
    __$$staticWaKeys: {},
    // 用于快速的去重记录
    __$$staticWaKeyList: [],
    // 在实例didMount时由__$$staticWaKeys计算得出，用于辅助清理依赖映射
    persistStoredKeys: refOption.persistStoredKeys,
    storedKeys: refOption.storedKeys,
    renderKey: refOption.renderKey,
    tag: refOption.tag,
    prevProps: props,
    props,
    // collected mapProps result
    mapped: {},
    prevState: Object.assign({}, mergedState),
    // state
    state: makeObState(ref, mergedState, stateModule, true),
    unProxyState: mergedState,
    // 没有proxy化的state
    moduleState,
    __$$mstate: mstate,
    // 用于before-render里避免merge moduleState而导致的冗余触发get，此属性不暴露给用户使用，因其不具备依赖收集能力
    globalState,
    connectedState: {},
    // for function: can pass value to extra in every render period
    // for class: can pass value to extra one time
    extra: isObject$1(params.extra) ? params.extra : {},
    staticExtra: {},
    settings: {},

    /** @type ICtx['refComputedValues'] */
    refComputedValues: {},

    /** @type ICtx['refComputedRawValues'] */
    refComputedRawValues: {},
    moduleComputed,
    globalComputed,
    connectedComputed,
    moduleReducer: null,
    mrc: null,
    // 仅生成描述体，moduleReducerCaller

    /** ghost reducer map */
    mrg: {},
    globalReducer: null,
    connectedReducer: {},
    reducer: {},
    // api meta data
    stateKeys,

    /** @type ICtx['computedDep'] */
    computedDep: {},
    computedRetKeyFns: {},

    /** @type ICtx['watchDep'] */
    watchDep: {},
    watchRetKeyFns: {},
    // 不按模块分类，映射的 watchRetKey2fns
    execute: null,
    retKey2fnUid: {},
    // api
    reactSetState: noop$1,
    // 等待重写
    __boundSetState,
    reactForceUpdate: noop$1,
    // 等待重写
    __boundForceUpdate,
    setState,
    setModuleState,
    forceUpdate,
    changeState,
    // not expose in d.ts
    refs,
    useRef: refName => {
      return nodeRef => {
        // keep the same shape with hook useRef
        refs[refName] = {
          current: nodeRef
        };
      };
    },
    // below methods only can be called by cc or updated by cc in existed period, not expose in d.ts
    __$$ccSetState: makeCcSetStateHandler(ref),
    __$$ccForceUpdate: makeCcForceUpdateHandler(ref),
    __$$settedList: [],
    // [{module:string, keys:string[]}, ...]
    __$$prevMoStateVer: {},
    __$$prevModuleVer: getModuleVer$1(stateModule),
    __$$cuOrWaCalled: false
  };
  bindCtxToRef(isCtxNull, ref, ctx);
  ctx.refComputed = makeCuRefObContainer(ref, null, true, true);
  ref.setState = setState;
  ref.forceUpdate = forceUpdate;
  bindInitStateHandler(ref, ctx, state, refStoredState, mstate, modStateKeys);
  const dispatch = bindModApis(ref, ctx, stateModule, liteLevel, _setState);
  bindSyncApis(ref, ctx, liteLevel);
  bindEventApis(ctx, liteLevel, ccUniqueKey);
  bindEnhanceApis(ctx, liteLevel, stateModule);
  fillCtxOtherAttrs(ref, ctx, connect, watchedKeys, ccUniqueKey, stateModule, allModules, dispatch); // 始终优先取ref上指向的ctx，对于在热加载模式下的hook组件实例，那里面有的最近一次渲染收集的依赖信息才是正确的

  ctx.getWatchedKeys = () => getWatchedKeys(ref.ctx || ctx);

  ctx.getConnectWatchedKeys = moduleName => getConnectWatchedKeys(ref.ctx || ctx, moduleName);
}

const {
  okeys: okeys$3
} = util;
/**
 * 根据connect,watchedKeys,以及用户提供的原始renderKeyClasses 计算 特征值
 */

function getFeatureStr (belongModule, connectSpec, renderKeyClasses) {
  const moduleNames = okeys$3(connectSpec);
  moduleNames.sort();
  let classesStr;
  if (renderKeyClasses === '*') classesStr = '*';else classesStr = renderKeyClasses.slice().join(',');
  return `${belongModule}/${moduleNames.join(',')}/${classesStr}`;
}

const {
  isObjectNull,
  makeError: me$1
} = util;
const {
  featureStr2classKey,
  userClassKey2featureStr,
  ccClassKey2Context: ccClassKey2Context$1
} = ccContext$1;
let cursor = 0;
function getCcClassKey (allowNamingDispatcher, module, connect, prefix, featureStr, classKey = '') {
  // 未指定classKey
  if (!classKey) {
    // 未指定所属模块，也未连接到其他模块
    if (module === MODULE_DEFAULT && isObjectNull(connect)) {
      return `${prefix}0`;
    }

    const prefixedFeatureStr = `${prefix}:${featureStr}`;
    let _classKey = featureStr2classKey[prefixedFeatureStr];

    if (_classKey) {
      return _classKey;
    }

    cursor++;
    _classKey = `${prefix}${cursor}`;
    featureStr2classKey[prefixedFeatureStr] = _classKey;
    return _classKey;
  } // verify user input classKey


  if (classKey.startsWith(CC_PREFIX)) {
    throw new Error(`user can not specify a classKey[${classKey}] starts with $$Cc`);
  }

  if (!allowNamingDispatcher) {
    if (classKey.toLowerCase() === CC_DISPATCHER.toLowerCase()) {
      // throw new Error(`${CC_DISPATCHER} is cc built-in ccClassKey name, if you want to customize your dispatcher, 
      // you can set autoCreateDispatcher=false in StartupOption, and use createDispatcher then.`)
      // currently createDispatcher is not allowed..
      throw new Error(`${CC_DISPATCHER} is cc built-in ccClassKey name.`);
    }
  }

  const clsCtx = ccClassKey2Context$1[classKey];

  if (clsCtx) {
    const fStr = userClassKey2featureStr[classKey];

    if (fStr !== featureStr) {
      //不允许，特征值不一样的class指定相同的ccClassKey
      throw me$1(ERR.CC_CLASS_KEY_DUPLICATE, `ccClassKey:[${classKey}] duplicate`);
    }
  } else {
    userClassKey2featureStr[classKey] = featureStr;
  }

  return classKey;
}

function getRenderKeyClasses(ccClassKey, regRenderKeyClasses) {
  let _renderKeyClasses;

  if (!regRenderKeyClasses) {
    _renderKeyClasses = [ccClassKey];
  } else {
    if (!Array.isArray(regRenderKeyClasses) && regRenderKeyClasses !== '*') {
      throw new Error(`renderKeyClasses type err, it ${STR_ARR_OR_STAR}`);
    }

    _renderKeyClasses = regRenderKeyClasses;
  }

  return _renderKeyClasses;
}

const {
  ccClassKey2Context
} = ccContext$1;

function checkCcStartupOrNot() {
  if (ccContext$1.isStartup !== true) {
    throw new Error('you must startup cc by call startup method before register ReactClass to cc!');
  }
}
/**
 * map registration info to ccContext
 */


function mapRegistrationInfo (module = MODULE_DEFAULT, ccClassKey, regRenderKeyClasses, classKeyPrefix, regWatchedKeys, regConnect, __checkStartUp, __calledBy) {
  if (__checkStartUp === true) checkCcStartupOrNot();
  const allowNamingDispatcher = __calledBy === 'cc';
  const renderKeyClasses = regRenderKeyClasses || [];
  checkModuleName(module, false, `module[${module}] not configured`);
  checkRenderKeyClasses(renderKeyClasses);

  const _connect = getConnect(regConnect);

  const _watchedKeys = getWatchedStateKeys(module, ccClassKey, regWatchedKeys); // 注意此处用户不指定renderKeyClasses时，算出来的特征值和renderKeyClasses无关


  const featureStr = getFeatureStr(module, _connect, renderKeyClasses);

  const _ccClassKey = getCcClassKey(allowNamingDispatcher, module, _connect, classKeyPrefix, featureStr, ccClassKey); // 此处再次获得真正的renderKeyClasses


  const _renderKeyClasses = getRenderKeyClasses(_ccClassKey, regRenderKeyClasses);

  let ccClassContext = ccClassKey2Context[_ccClassKey]; //做一个判断，有可能是热加载调用

  if (!ccClassContext) {
    ccClassContext = makeCcClassContext(module, _ccClassKey, _renderKeyClasses);
    ccClassKey2Context[_ccClassKey] = ccClassContext;
  }

  return {
    _module: module,
    _connect,
    _ccClassKey,
    _watchedKeys
  };
}

const noop = () => {};

function createDispatcher () {
  const ccClassKey = CC_DISPATCHER;
  mapRegistrationInfo(MODULE_DEFAULT, ccClassKey, '', CC_CLASS, [], [], false, 'cc');
  const mockRef = {
    setState: noop,
    forceUpdate: noop
  };
  buildRefCtx(mockRef, {
    module: MODULE_DEFAULT,
    ccClassKey,
    state: {}
  });
  ccContext$1.permanentDispatcher = mockRef;
}

const {
  isPJO: isPJO$1,
  okeys: okeys$2,
  isObject
} = util;

function checkObj(rootObj, tag) {
  if (!isPJO$1(rootObj)) {
    throw new Error(`${tag} ${INAJ}`);
  }
}

function configStoreState(storeState) {
  checkObj(storeState, 'state');
  delete storeState[MODULE_VOID];
  delete storeState[MODULE_CC];
  if (!isObject(storeState[MODULE_GLOBAL])) storeState[MODULE_GLOBAL] = {};
  if (!isObject(storeState[MODULE_DEFAULT])) storeState[MODULE_DEFAULT] = {};
  const moduleNames = okeys$2(storeState);
  const len = moduleNames.length;

  for (let i = 0; i < len; i++) {
    const moduleName = moduleNames[i];
    const moduleState = storeState[moduleName];
    initModuleState(moduleName, moduleState);
  }
}
/**
 * @param {{[moduleName:string]:{[reducerFnType:string]:function}}} rootReducer 
 */

function configRootReducer(rootReducer, rootGhost) {
  checkObj(rootReducer, 'reducer');
  if (!isObject(rootReducer[MODULE_DEFAULT])) rootReducer[MODULE_DEFAULT] = {};
  if (!isObject(rootReducer[MODULE_GLOBAL])) rootReducer[MODULE_GLOBAL] = {};
  okeys$2(rootReducer).forEach(m => initModuleReducer(m, rootReducer[m], rootGhost[m]));
}
function configRootComputed(rootComputed) {
  checkObj(rootComputed, 'computed');
  okeys$2(rootComputed).forEach(m => initModuleComputed(m, rootComputed[m]));
}
function configRootWatch(rootWatch) {
  checkObj(rootWatch, 'watch');
  okeys$2(rootWatch).forEach(m => initModuleWatch(m, rootWatch[m]));
}
function configRootLifecycle(rootLifecycle) {
  checkObj(rootLifecycle, 'lifecycle');
  okeys$2(rootLifecycle).forEach(m => initModuleLifecycle(m, rootLifecycle[m]));
}
function configMiddlewares(middlewares) {
  if (middlewares.length > 0) {
    const ccMiddlewares = ccContext$1.middlewares;
    ccMiddlewares.length = 0; // 防止热加载重复多次载入middlewares

    middlewares.forEach(m => ccMiddlewares.push(m));
  }
}
function configPlugins(plugins) {
  if (plugins.length > 0) {
    const ccPlugins = ccContext$1.plugins;
    ccPlugins.length = 0; // 防止热加载重复多次载入plugins

    clearCbs(); // 清理掉已映射好的插件回调

    const pluginNameMap = {};
    plugins.forEach(p => {
      ccPlugins.push(p);

      if (p.install) {
        const pluginInfo = p.install(on);
        const e = new Error('plugin.install must return result:{name:string, options?:object}');
        if (!pluginInfo) throw e;
        const pluginName = pluginInfo.name;
        if (!pluginName) throw e;
        if (pluginNameMap[pluginName]) throw new Error(`pluginName[${pluginName}] duplicate`);
        pluginNameMap[pluginName] = 1;
      } else {
        throw new Error('a plugin must export install handler!');
      }
    });
    ccContext$1.pluginNameMap = pluginNameMap;
  }
}

/* eslint-disable camelcase */
const {
  justWarning,
  makeError: me,
  verboseInfo: vbi,
  styleStr: ss,
  color: cl
} = util;
const {
  runtimeVar: runtimeVar$2,
  ccUKey2ref: ccUKey2ref$2
} = ccContext$1;
let ccUKey2insCount = {};

function setCcInstanceRef(ccUniqueKey, ref, delayMs) {
  const setRef = () => {
    ccUKey2ref$2[ccUniqueKey] = ref;
  };

  if (ccContext$1.isHotReloadMode()) incCcKeyInsCount(ccUniqueKey);

  if (delayMs) {
    setTimeout(setRef, delayMs);
  } else {
    setRef();
  }
}

function incCcKeyInsCount(ccUniqueKey) {
  safeAdd(ccUKey2insCount, ccUniqueKey, 1);
}
function decCcKeyInsCount(ccUniqueKey) {
  safeMinus(ccUKey2insCount, ccUniqueKey, 1);
}
function getCcKeyInsCount(ccUniqueKey) {
  return ccUKey2insCount[ccUniqueKey] || 0;
}
function clearCount() {
  ccUKey2insCount = {};
}
function setRef (ref) {
  const {
    ccClassKey,
    ccKey,
    ccUniqueKey
  } = ref.ctx;

  if (runtimeVar$2.isDebug) {
    console.log(ss(`register ccKey ${ccUniqueKey} to CC_CONTEXT`), cl());
  }

  const isHot = ccContext$1.isHotReloadMode();

  if (ccUKey2ref$2[ccUniqueKey]) {
    const dupErr = () => {
      throw me(ERR.CC_CLASS_INSTANCE_KEY_DUPLICATE, vbi(`ccClass:${ccClassKey},ccKey:${ccKey}`));
    };

    if (isHot) {
      // get existed ins count
      const insCount = getCcKeyInsCount(ccUniqueKey);

      if (insCount > 1) {
        // now cc can make sure the ccKey duplicate
        dupErr();
      } // just warning


      justWarning(`
        found ccKey[${ccKey}] duplicated in hot reload mode, please make sure your ccKey is unique manually,
        ${vbi(`ccClassKey:${ccClassKey} ccKey:${ccKey} ccUniqueKey:${ccUniqueKey}`)}
      `); // in webpack hot reload mode, cc works not very well,
      // cc can't set ref immediately, because the ccInstance of ccKey will ummount right now in unmount func, 
      // cc call unsetCcInstanceRef will lost the right ref in CC_CONTEXT.refs
      // so cc set ref later

      setCcInstanceRef(ccUniqueKey, ref, 600);
    } else {
      dupErr();
    }
  } else {
    setCcInstanceRef(ccUniqueKey, ref);
  }
}

/* eslint-disable camelcase */
let justCalledByStartUp = false;

function _clearInsAssociation(recomputed = false, otherExcludeKeys) {
  clearCuRefer();
  clearCount();
  clearObject(ccContext$1.event2handlers);
  clearObject(ccContext$1.ccUKey2handlerKeys);
  const ccUKey2ref = ccContext$1.ccUKey2ref;
  clearObject(ccContext$1.handlerKey2handler);
  clearObject(ccUKey2ref, otherExcludeKeys); // 此处故意设置和原来的版本相差几位的数字，
  // 防止resetClassInsUI调用时类组件实例的版本和模块是相同的
  // 导致ui更新未同步到store最新数据

  const {
    getModuleVer,
    incModuleVer,
    replaceMV
  } = ccContext$1.store;
  const moduleVer = getModuleVer();
  okeys$e(moduleVer).forEach(m => {
    const curVer = moduleVer[m];
    incModuleVer(m, curVer > 5 ? 1 : 6);
  }); // 用于还原_moduleVer，在resetClassInsUI回调里_moduleVer又变为了 所有的模块版本值为1的奇怪现象.
  // 全局有没有找到重置_moduleVer的地方.

  const lockedMV = JSON.parse(JSON.stringify(moduleVer));

  if (recomputed) {
    const {
      computed,
      watch
    } = ccContext$1;
    const computedValue = computed._computedValues;
    const watchDep = watch._watchDep;
    const modules = okeys$e(ccContext$1.store._state);
    modules.forEach(m => {
      if (m === MODULE_CC) return;

      if (computedValue[m]) {
        // !!!先清除之前建立好的依赖关系
        ccContext$1.computed._computedDep[m] = makeCuDepDesc$1();
        initModuleComputed(m, computed._computedRaw[m]);
      }

      if (watchDep[m]) {
        // !!!先清除之前建立好的依赖关系
        watchDep[m] = makeCuDepDesc$1();
        initModuleWatch(m, watch._watchRaw[m]);
      }
    });
  } // resetClassInsUI


  return () => {
    // 安排在下一个循环自我刷新
    setTimeout(() => {
      replaceMV(lockedMV);
      otherExcludeKeys.forEach(key => {
        const ref = ccUKey2ref[key];
        ref && ref.ctx.reactForceUpdate();
      });
    }, 0);
  };
}

function _pickNonCustomizeIns() {
  const ccUKey2ref = ccContext$1.ccUKey2ref;
  const ccFragKeys = [];
  const ccClassInsKeys = [];
  okeys$e(ccUKey2ref).forEach(refKey => {
    const ref = ccUKey2ref[refKey];

    if (ref && ref.__$$ms === MOUNTED$1) {
      const {
        type
      } = ref.ctx;
      if (type === CC_CLASS) ccClassInsKeys.push(refKey);
    }
  });
  return {
    ccFragKeys,
    ccClassInsKeys
  };
}

function _clearAll() {
  clearObject(ccContext$1.globalStateKeys); // 在codesandbox里，按标准模式组织的代码，如果只是修改了runConcent里相关联的代码，pages目录下的configure调用不会被再次触发的
  // 所以是来自configure调用配置的模块则不参与清理，防止报错

  const toExcludedModules = okeys$e(ccContext$1.moduleName2isConfigured).concat([MODULE_DEFAULT, MODULE_CC, MODULE_GLOBAL, MODULE_CC_ROUTER]);
  clearObject(ccContext$1.reducer._reducer, toExcludedModules);
  clearObject(ccContext$1.store._state, toExcludedModules, {}, true);
  clearObject(ccContext$1.computed._computedDep, toExcludedModules);
  clearObject(ccContext$1.computed._computedValues, toExcludedModules);
  clearObject(ccContext$1.watch._watchDep, toExcludedModules);
  clearObject(ccContext$1.middlewares); // class组件实例的依赖要保留，因为它的ref不再被清除（不像function组件那样能在热重载期间能够再次触发unmount和mount）

  const waKey2uKeyMap = ccContext$1.waKey2uKeyMap;
  okeys$e(waKey2uKeyMap).forEach(waKey => {
    const uKeyMap = waKey2uKeyMap[waKey];
    const newUKeyMap = {};
    okeys$e(uKeyMap).forEach(uKey => {
      if (uKey.startsWith(CC_CLASS)) {
        newUKeyMap[uKey] = uKeyMap[uKey];
      }
    });
    waKey2uKeyMap[waKey] = newUKeyMap;
  });
  clearObject(ccContext$1.lifecycle._mountedOnce);
  clearObject(ccContext$1.lifecycle._willUnmountOnce);
  clearObject(ccContext$1.module2insCount, [], 0);
  clearCachedData();

  const {
    ccClassInsKeys
  } = _pickNonCustomizeIns();

  return _clearInsAssociation(false, ccClassInsKeys);
}

function _clearContextIfHot (clearAll = false) {
  ccContext$1.info.latestStartupTime = Date.now(); // 热加载模式下，这些CcFragIns随后需要被恢复
  // let ccFragKeys = [];

  const noop = () => {};

  if (ccContext$1.isStartup) {
    if (ccContext$1.isHotReloadMode()) {
      if (clearAll) {
        if (ccContext$1.runtimeVar.log) console.warn(`attention: make sure [[clearContextIfHot]] been called before app rendered!`);
        justCalledByStartUp = true;
        return _clearAll(); // return ccFragKeys;
      } else {
        // 如果刚刚被startup调用，则随后的调用只是把justCalledByStartUp标记为false
        // 因为在stackblitz的 hot reload 模式下，当用户将启动cc的命令单独放置在一个脚本里，
        // 如果用户修改了启动相关文件, 则会触发 runConcent renderApp，
        // runConcent调用清理把justCalledByStartUp置为true，则renderApp这里再次触发clear时就可以不用执行了(注意确保renderApp之前，调用了clearContextIfHot)
        // 而随后只是改了某个component文件时，则只会触发 renderApp，
        // 因为之前已把justCalledByStartUp置为false，则有机会清理实例相关上下文了
        if (justCalledByStartUp) {
          justCalledByStartUp = false;
          return noop;
        }

        const ret = _pickNonCustomizeIns(); // !!!重计算各个模块的computed结果


        return _clearInsAssociation(ccContext$1.reComputed, ret.ccClassInsKeys);
      }
    } else {
      console.warn(`clear failed because of not running under hot reload mode!`);
      return noop;
    }
  } else {
    // 还没有启动过，泽只是标记justCalledByStartUp为true
    justCalledByStartUp = true;
    return noop;
  }
}

const {
  justTip,
  bindToWindow,
  getErrStackKeywordLoc
} = util;
let cachedLocation = '';

function checkStartup(err) {
  const info = ccContext$1.info;
  let curLocation = getErrStackKeywordLoc(err, 'startup', 2); //向下2句找触发run的文件

  if (!curLocation) curLocation = getErrStackKeywordLoc(err, 'runConcent', 0);

  const letRunOk = () => {
    ccContext$1.isHot = true;
    return _clearContextIfHot(true);
  };

  const now = Date.now();

  let resetClassInsUI = () => {},
      canStartup = true;

  if (!cachedLocation) {
    cachedLocation = curLocation;
    info.firstStartupTime = now;
    info.latestStartupTime = now;
  } else if (cachedLocation !== curLocation) {
    const tip = `run can only been called one time, try refresh browser to avoid this error`;

    if (now - info.latestStartupTime < 1000) {
      throw new Error(tip);
    }

    if (isOnlineEditor()) {
      resetClassInsUI = letRunOk();
      cachedLocation = curLocation;
    } else {
      strictWarning(tip);
      canStartup = false;
    }
  } else {
    resetClassInsUI = letRunOk();
  }

  return {
    canStartup,
    resetClassInsUI
  };
}

function startup ({
  store = {},
  reducer = {},
  ghost = {},
  computed = {},
  watch = {},
  lifecycle = {}
} = {}, {
  plugins = [],
  middlewares = [],
  // consider every error will be throwed by cc? be careful when app in prod mode
  isStrict = false,
  isDebug = false,
  log = true,
  errorHandler = null,
  warningHandler = null,
  isHot,
  alwaysRenderCaller = true,
  bindCtxToMethod = false,
  computedCompare = false,
  // 表示针对object值需不需要比较
  watchCompare = false,
  // 表示针对object值需不需要比较
  watchImmediate = false,
  reComputed = true,
  extractModuleChangedState = true,
  extractRefChangedState = false,
  objectValueCompare = false,
  nonObjectValueCompare = true,
  localStorage = null,
  act = null,
  asyncCuKeys = null
} = {}) {
  try {
    throw new Error();
  } catch (err) {
    const {
      canStartup,
      resetClassInsUI
    } = checkStartup(err);

    if (!canStartup) {
      return;
    }

    try {
      const rv = ccContext$1.runtimeVar;
      const rh = ccContext$1.runtimeHandler;
      rv.log = log;
      justTip(`concent version ${ccContext$1.info.version}`);
      if (isHot !== undefined) ccContext$1.isHot = isHot;
      ccContext$1.reComputed = reComputed;
      rh.errorHandler = errorHandler;
      rh.warningHandler = warningHandler;
      rh.act = act;
      rv.asyncCuKeys = asyncCuKeys || [];
      rv.alwaysRenderCaller = alwaysRenderCaller;
      rv.isStrict = isStrict;
      rv.isDebug = isDebug;
      rv.computedCompare = computedCompare;
      rv.watchCompare = watchCompare;
      rv.watchImmediate = watchImmediate;
      rv.extractModuleChangedState = extractModuleChangedState;
      rv.extractRefChangedState = extractRefChangedState;
      rv.objectValueCompare = objectValueCompare;
      rv.nonObjectValueCompare = nonObjectValueCompare;
      rv.bindCtxToMethod = bindCtxToMethod;

      if (localStorage) {
        ccContext$1.localStorage = localStorage;
      } else if (window && window.localStorage) {
        ccContext$1.localStorage = window.localStorage;
      }

      ccContext$1.recoverRefState();
      createDispatcher();
      configStoreState(store);
      configRootReducer(reducer, ghost);
      configRootComputed(computed);
      configRootWatch(watch);
      configRootLifecycle(lifecycle);
      configMiddlewares(middlewares);

      const bindOthers = bindTarget => {
        bindToWindow('CC_CONTEXT', ccContext$1, bindTarget);
        bindToWindow('ccc', ccContext$1, bindTarget);
        bindToWindow('cccc', ccContext$1.computed._computedValues, bindTarget);
        bindToWindow('sss', ccContext$1.store._state, bindTarget);
      };

      if (window && window.mcc) {
        setTimeout(() => {
          //延迟绑定，等待ccns的输入
          bindOthers(window.mcc[getCcNamespace()]);
        }, 1200);
      } else {
        bindOthers();
      }

      ccContext$1.isStartup = true; //置为已启动后，才开始配置plugins，因为plugins需要注册自己的模块，而注册模块又必需是启动后才能注册

      configPlugins(plugins);
      resetClassInsUI();
    } catch (err) {
      ccContext$1.runtimeHandler.tryHandleError(err);
    }
  }
}

/** @typedef {import('../types').ModuleConfig} ModuleConfig */
const {
  isPJO,
  okeys: okeys$1,
  evalState: evalState$2,
  isFn: isFn$2
} = util;

const pError = label => {
  throw new Error(`[[run]]: param error, ${label} ${INAJ}`);
};
/**
 * run will call startup
 * @param {{ [moduleName:string]: ModuleConfig }} store
 * @param {import('../types').RunOptions} options
 */


function _run (store = {}, options = {}) {
  if (!isPJO(store)) pError('store');
  if (!isPJO(options)) pError('options');
  const storeConf = {
    store: {},
    reducer: {},
    ghost: {},
    watch: {},
    computed: {},
    lifecycle: {}
  };

  const buildStoreConf = (m, moduleConf) => {
    const {
      state,
      reducer,
      watch,
      computed,
      ghosts = []
    } = moduleConf;

    if (storeConf.store[m]) {
      throw new Error(`run api error: module[${m}] duplicate`);
    }

    storeConf.store[m] = evalState$2(state);
    if (isFn$2(state)) ccContext$1.moduleName2stateFn[m] = state;
    storeConf.reducer[m] = reducer;
    storeConf.ghost[m] = ghosts;
    storeConf.watch[m] = watch;
    storeConf.computed[m] = computed;
    storeConf.lifecycle[m] = getLifecycle(moduleConf);
  }; // traversal moduleNames


  okeys$1(store).forEach(m => buildStoreConf(m, store[m])); // these modules pushed by configure api before calling run

  pendingModules.forEach(({
    module,
    config
  }) => {
    // user put this module to run api 1th models param again, here just ignore this one
    if (storeConf.store[module]) return; // configure pending module

    buildStoreConf(module, config);
  });
  pendingModules.length = 0; // clear pending modules

  startup(storeConf, options);
}

const {
  store: {
    getState: getState$2
  }
} = ccContext$1;
/** 由首次render触发, 在beforeMount里调用 */

function triggerComputedAndWatch (ref) {
  const ctx = ref.ctx; // 取原始对象，防止computeValueForRef里用Object.assign触发依赖收集

  const {
    hasComputedFn,
    hasWatchFn,
    connectedModules,
    module: refModule,
    unProxyState
  } = ctx;
  const callInfo = makeCallInfo(refModule);

  const cuOrWatch = op => {
    op(ref, refModule, unProxyState, unProxyState, callInfo, true);
    connectedModules.forEach(m => {
      const mState = getState$2(m);
      const tmpCallInfo = makeCallInfo(m);
      op(ref, m, mState, mState, tmpCallInfo, true);
    });
  };

  if (hasComputedFn) cuOrWatch(computeValueForRef);
  if (hasWatchFn) cuOrWatch(watchKeyForRef);
}

/** @typedef {import('../../types-inner').IRef} IRef */
const {
  okeys,
  makeCuDepDesc,
  isFn: isFn$1
} = util;
const {
  runtimeVar: runtimeVar$1
} = ccContext$1;
/**
 * @param {IRef} ref
 * @param {Function} setup
 * @param {boolean} bindCtxToMethod
 * @param {MultiComputed | MultiComputedFn} cuDesc
 */

function beforeMount (ref, setup, bindCtxToMethod, cuDesc) {
  const ctx = ref.ctx;
  ref.__$$ms = NOT_MOUNT; // flag ref is at before mount step

  ctx.__$$inBM = true; // 先调用setup，setup可能会定义computed,watch，同时也可能调用ctx.reducer,所以setup放在fill reducer之后

  if (setup) {
    const tip = 'type of setup';
    if (!isFn$1(setup)) throw new Error(`${tip} ${INAF}`);
    const settingsObj = setup(ctx) || {};
    if (!isPJO$7(settingsObj)) throw new Error(`${tip} return result ${INAJ}`); // 优先读自己的，再读全局的

    if (bindCtxToMethod === true || runtimeVar$1.bindCtxToMethod === true && bindCtxToMethod !== false) {
      okeys(settingsObj).forEach(name => {
        const settingValue = settingsObj[name];
        if (isFn$1(settingValue)) settingsObj[name] = settingValue.bind(ref, ctx);
      });
    }

    Object.assign(ctx.settings, settingsObj);
  } // v2.13.1+ 支持外部传入refComputed函数定义


  if (cuDesc) ctx.computed(cuDesc); // !!! 把拦截了setter getter的计算结果容器赋值给refComputed
  // 这一波必需在setup调用之后做，因为setup里会调用ctx.computed写入 computedRetKeyFns 等元数据

  ctx.refComputedValues = makeCuRetContainer(ctx.computedRetKeyFns, ctx.refComputedRawValues); // 所有的组件都会自动连接到$$global模块，但是有可能没有使用$$global模块数据做过任何实例计算
  // 这里需要补齐computedDep.$$global 和 watchDep.$$global 的依赖描述数据
  // 防止后续逻辑里出错

  const {
    computedDep,
    watchDep
  } = ctx;

  if (!computedDep[MODULE_GLOBAL]) {
    computedDep[MODULE_GLOBAL] = makeCuDepDesc();
  }

  if (!watchDep[MODULE_GLOBAL]) {
    watchDep[MODULE_GLOBAL] = makeCuDepDesc();
  }

  triggerComputedAndWatch(ref);
  ctx.__$$inBM = false;
}

const {
  moduleName2stateKeys,
  store: {
    getPrevState,
    getState: getState$1,
    getStateVer
  }
} = ccContext$1;

const warn = (key, frag) => justWarning$6(`effect: key[${key}] is invalid, its ${frag} has not been declared in' store!`);

function mapSettedList(settedList) {
  return settedList.reduce((map, {
    module,
    keys
  }) => {
    keys.forEach(key => map[`${module}/${key}`] = 1);
    return map;
  }, {});
}

function triggerSetupEffect (ref, callByDidMount) {
  const ctx = ref.ctx;
  const {
    effectItems,
    eid2effectReturnCb,
    effectPropsItems,
    eid2effectPropsReturnCb
  } = ctx.effectMeta;
  const {
    __$$prevMoStateVer,
    __$$settedList,
    module: refModule
  } = ctx;

  const makeItemHandler = (eid2cleanCb, isFirstCall, needJudgeImmediate) => item => {
    const {
      fn,
      eId,
      immediate
    } = item;

    if (needJudgeImmediate) {
      if (immediate === false) return;
    }

    const prevCb = eid2cleanCb[eId];
    if (prevCb) prevCb(ctx); // let ctx.effect have the totally same behavior with useEffect

    const cb = fn(ctx, isFirstCall);
    eid2cleanCb[eId] = cb; //不管有没有返回，都要覆盖之前的结果
  };

  if (callByDidMount) {
    // flag isFirstCall as true
    effectItems.forEach(makeItemHandler(eid2effectReturnCb, true, true));
    effectPropsItems.forEach(makeItemHandler(eid2effectPropsReturnCb, true, true));
    return;
  } // callByDidUpdate
  // start handle effect meta data of state keys


  const prevState = ctx.prevState;
  const curState = ctx.unProxyState;
  const toBeExecutedFns = [];
  effectItems.forEach(item => {
    // const { status, depKeys, fn, eId } = item;
    // if (status === EFFECT_STOPPED) return;
    // todo, 优化为effectDep模式, 利用differStateKeys去命中执行函数
    const {
      modDepKeys,
      depKeys,
      compare,
      fn,
      eId
    } = item;

    if (!depKeys) {
      return toBeExecutedFns.push({
        fn,
        eId
      });
    }

    const keysLen = modDepKeys.length;
    if (keysLen === 0) return;
    const mappedSettedKey = mapSettedList(__$$settedList);
    let shouldEffectExecute = false;

    for (let i = 0; i < keysLen; i++) {
      const key = modDepKeys[i];
      const [module, unmoduledKey] = key.split('/');
      let targetCurState, targetPrevState;

      if (module !== refModule) {
        const prevState = getPrevState(module);
        const moduleStateVer = getStateVer(module);

        if (__$$prevMoStateVer[unmoduledKey] === moduleStateVer[unmoduledKey]) {
          continue;
        } else {
          __$$prevMoStateVer[unmoduledKey] = moduleStateVer[unmoduledKey];
        }

        if (!prevState) {
          warn(key, `module[${module}]`);
          continue;
        }

        if (!moduleName2stateKeys[module].includes(unmoduledKey)) {
          warn(key, `unmoduledKey[${unmoduledKey}]`);
          continue;
        }

        targetCurState = getState$1(module);
        targetPrevState = prevState;
      } else {
        targetCurState = curState;
        targetPrevState = prevState;
      }

      const isValChanged = targetPrevState[unmoduledKey] !== targetCurState[unmoduledKey];

      if (isValChanged) {
        shouldEffectExecute = true;
      } else {
        // compare为true看有没有发生变化（object类型值不走immutable写法的话，这里是false，所以compare值默认是false）
        // 为false则看是不是setted
        shouldEffectExecute = compare ? isValChanged : mappedSettedKey[key];
      }

      if (shouldEffectExecute) {
        break;
      }
    }

    if (shouldEffectExecute) {
      toBeExecutedFns.push({
        fn,
        eId
      });
    }
  }); // flag isFirstCall as false, start to run state effect fns

  toBeExecutedFns.forEach(makeItemHandler(eid2effectReturnCb, false, false)); // start handle effect meta data of props keys

  const prevProps = ctx.prevProps;
  const curProps = ctx.props;
  const toBeExecutedPropFns = [];
  effectPropsItems.forEach(item => {
    const {
      depKeys,
      fn,
      eId
    } = item;

    if (!depKeys) {
      return toBeExecutedPropFns.push({
        fn,
        eId
      });
    }

    const keysLen = depKeys.length;
    let shouldEffectExecute = false;

    for (let i = 0; i < keysLen; i++) {
      const key = depKeys[i];

      if (prevProps[key] !== curProps[key]) {
        shouldEffectExecute = true;
        break;
      }
    }

    if (shouldEffectExecute) toBeExecutedPropFns.push({
      fn,
      eId
    });
  }); // flag isFirstCall as false, start to run prop effect fns

  toBeExecutedPropFns.forEach(makeItemHandler(eid2effectPropsReturnCb, false, false)); // clear settedList

  __$$settedList.length = 0;
}

// cur: {} compare: {a:2, b:2, c:2} compareCount=3 nextCompare:{}
//
// rendering input
// cur: {a:'val', c:'val', d:'val'}
//
// after render
// cur: {a:1, c:1, c:1} compare: {a:1, b:2, c:1, d:1} nextCompare:{a:2, c:2, d:2}
//
// then concent will know b should delete dep because=0, 
// compare key count=4>3 or compare include 2, so should let cache expire
//
// before next render
// cur: {} compare: {a:2, c:2, d:2} compareCount=3 nextCompare:{}

/** 删除依赖 */

function delDep(compareWaKeys, compareWaKeyCount, module, ccUniqueKey) {
  const waKeys = okeys$e(compareWaKeys);
  const waKeyKen = waKeys.length;
  if (waKeyKen === 0) return;
  let shouldLetCacheExpire = false;
  waKeys.forEach(waKey => {
    // no module prefix
    if (compareWaKeys[waKey] === 2) {
      // 这个key在这轮渲染结束后没有命中，说明视图不再对它有依赖
      shouldLetCacheExpire = true;
      delIns(module, waKey, ccUniqueKey);
    }
  });

  if (waKeys.length > compareWaKeyCount) {
    // 大于最初记录的key数量，有新增
    shouldLetCacheExpire = true;
  } // let find result cache expire


  if (shouldLetCacheExpire) {
    createModuleNode(module);
  }
}

function afterRender (ref) {
  const ctx = ref.ctx;
  ctx.__$$renderStatus = END;
  const {
    module: refModule,
    connectedModules,
    connect,
    ccUniqueKey,
    __$$compareWaKeys,
    __$$compareWaKeyCount,
    __$$compareConnWaKeys,
    __$$compareConnWaKeyCount
  } = ctx; // if ref is autoWatch status, should del belong module dep dynamically after every render period

  if (ctx.__$$autoWatch) {
    delDep(__$$compareWaKeys, __$$compareWaKeyCount, refModule, ccUniqueKey);
  }

  connectedModules.forEach(m => {
    // if ref is autoWatch status, should del connected module dep dynamically after every render period
    if (connect[m] === '-') {
      const __$$compareWaKeys = __$$compareConnWaKeys[m];
      const __$$compareWaKeyCount = __$$compareConnWaKeyCount[m];
      delDep(__$$compareWaKeys, __$$compareWaKeyCount, m, ccUniqueKey);
    }
  });
}

const {
  _lifecycle: _lifecycle$1,
  _mountedOnce
} = lifecycle;
const {
  store: {
    getModuleVer
  }
} = ccContext$1;

function triggerLifecyleMounted(allModules, mstate) {
  const handleOneModule = m => {
    safeAdd(module2insCount, m, 1);
    const moduleLifecycle = _lifecycle$1[m];
    if (!moduleLifecycle) return;
    const mounted = moduleLifecycle.mounted;
    if (!mounted) return;
    if (_mountedOnce[m] === true) return;

    if (module2insCount[m] == 1) {
      const once = mounted(makeModuleDispatcher(m), mstate);
      _mountedOnce[m] = getVal(once, true);
    }
  };

  allModules.forEach(handleOneModule);
}

function didMount (ref) {
  afterRender(ref);
  ref.__$$ms = MOUNTED$1;
  const {
    ccUniqueKey,
    __$$onEvents,
    __$$staticWaKeys,
    module,
    allModules,
    __$$mstate,
    __$$prevModuleVer
  } = ref.ctx;
  setRef(ref); // 确保组件挂载时在绑定事件，以避免同一个组件(通常是function组件, 因为cursor问题)，
  // 走了 (1)mount ---> (2)mount ---> (1)unmount 时把2本来也要监听的事件清理掉
  // 同时本身来说，挂载好的组件监听事件才是安全的

  if (__$$onEvents.length > 0) {
    __$$onEvents.forEach(({
      inputEvent,
      handler
    }) => {
      const {
        name: event,
        identity
      } = getEventItem(inputEvent);
      bindEventHandlerToCcContext(module, ref.ctx.ccClassKey, ccUniqueKey, event, identity, handler);
    });

    __$$onEvents.length = 0;
  }

  const __$$staticWaKeyList = okeys$e(__$$staticWaKeys); // 用于辅助记录依赖映射


  ref.ctx.__$$staticWaKeyList = __$$staticWaKeyList; // 记录静态依赖

  __$$staticWaKeyList.forEach(modStateKey => mapStaticInsM(modStateKey, ccUniqueKey));

  triggerSetupEffect(ref, true);
  triggerLifecyleMounted(allModules, __$$mstate); // 组件的didMount触发会在lifecycle.initState调用之后，此处版本可能已落后，需要自我刷新一下

  if (__$$prevModuleVer !== getModuleVer(module)) {
    ref.ctx.reactForceUpdate();
  }
}

function didUpdate (ref) {
  afterRender(ref);
  triggerSetupEffect(ref); //!!! 将最新的state记录为prevState，方便下一轮渲染完毕执行triggerSetupEffect时做比较用
  //注意一定是先调用triggerSetupEffect，再赋值

  ref.ctx.prevState = ref.ctx.unProxyState;
}

const {
  ccUKey2ref: ccUKey2ref$1,
  ccUKey2handlerKeys,
  runtimeVar,
  handlerKey2handler
} = ccContext$1;
function unsetRef (ccUniqueKey) {
  if (runtimeVar.isDebug) {
    console.log(styleStr(`${ccUniqueKey} unset ref`), color('purple'));
  }

  delete ccUKey2ref$1[ccUniqueKey];
  if (ccContext$1.isHotReloadMode()) decCcKeyInsCount(ccUniqueKey);
  const handlerKeys = ccUKey2handlerKeys[ccUniqueKey];

  if (handlerKeys) {
    handlerKeys.forEach(hKey => {
      delete handlerKey2handler[hKey];
    });
  }
}

const {
  _lifecycle,
  _willUnmountOnce
} = lifecycle;

function executeClearCb(cbMap, ctx) {
  const execute = key => {
    // symbolKey or normalKey
    const cb = cbMap[key];
    if (isFn$4(cb)) cb(ctx);
  };

  Object.getOwnPropertySymbols(cbMap).forEach(execute);
  okeys$e(cbMap).forEach(execute);
}

function triggerLifecyleWillUnmount(allModules, mstate) {
  const handleOneModule = m => {
    module2insCount[m] -= 1;
    const moduleLifecycle = _lifecycle[m];
    if (!moduleLifecycle) return;
    const willUnmount = moduleLifecycle.willUnmount;
    if (!willUnmount) return;
    if (_willUnmountOnce[m] === true) return;

    if (module2insCount[m] === 0) {
      const once = willUnmount(makeModuleDispatcher(m), mstate);
      _willUnmountOnce[m] = getVal(once, true);
    }
  };

  allModules.forEach(handleOneModule);
}

function beforeUnmount (ref) {
  // 标记一下已卸载，防止组件卸载后，某个地方有异步的任务拿到了该组件的引用，然后执行setState，导致
  // Warning: Can't perform a React state update on an unmounted component. This is a no-op ......
  const curMs = ref.__$$ms;
  ref.__$$ms = UNMOUNTED$1;
  const ctx = ref.ctx;
  const {
    ccUniqueKey,
    module,
    allModules,
    __$$staticWaKeyList,
    __$$mstate
  } = ctx; // 正常情况下只有挂载了组件才会有effect等相关定义

  if (curMs === MOUNTED$1) {
    const {
      eid2effectReturnCb,
      eid2effectPropsReturnCb
    } = ctx.effectMeta;
    executeClearCb(eid2effectReturnCb, ctx);
    executeClearCb(eid2effectPropsReturnCb, ctx);
    offEventHandlersByCcUniqueKey(ccUniqueKey);
  } // 删除记录的动态依赖


  const waKeys = ctx.getWatchedKeys(); // no module prefix

  waKeys.forEach(k => delIns(module, k, ccUniqueKey));
  const connWaKeys = ctx.getConnectWatchedKeys();
  okeys$e(connWaKeys).map(m => {
    const waKeys = connWaKeys[m];
    waKeys.forEach(k => delIns(m, k, ccUniqueKey));
  }); // 删除记录的静态依赖

  __$$staticWaKeyList.forEach(modStateKey => delStaticInsM(modStateKey, ccUniqueKey)); // let findUpdateRefs cache expire


  allModules.forEach(createModuleNode);
  unsetRef(ccUniqueKey);
  triggerLifecyleWillUnmount(allModules, __$$mstate);
}

/** eslint-disable */
function beforeRender (ref) {
  const ctx = ref.ctx;
  ctx.renderCount += 1; // 类组件this.reactSetState调用后生成的this.state是一个新的普通对象
  // 每次渲染前替换为ctx.state指向的Proxy对象，确保让类组件里使用this.state能够收集到依赖

  ref.state = ctx.state;
  if (ctx.childRef) ctx.childRef.state = ctx.state; // 不处于收集观察依赖 or 已经开始都要跳出此函数
  // strictMode模式下，会走两次beforeRender 一次afterRender，
  // 所以这里严格用ctx.__$$renderStatus === START 来控制只真正执行一次beforeRender

  if (!ctx.__$$autoWatch || ctx.__$$renderStatus === START) {
    return;
  }

  if (ctx.__$$renderStatus !== START) ctx.__$$renderStatus = START;

  if (ctx.__$$hasModuleState) {
    ctx.__$$curWaKeys = {};
    ctx.__$$compareWaKeys = ctx.__$$nextCompareWaKeys;
    ctx.__$$compareWaKeyCount = ctx.__$$nextCompareWaKeyCount; // 渲染期间再次收集

    ctx.__$$nextCompareWaKeys = {};
    ctx.__$$nextCompareWaKeyCount = 0;
  }

  const {
    connectedModules,
    connect
  } = ctx;
  connectedModules.forEach(m => {
    // 非自动收集，在make-ob-state里不会触发get，这里直接跳出
    if (connect[m] !== '-') return;
    ctx.__$$curConnWaKeys[m] = {};
    ctx.__$$compareConnWaKeys[m] = ctx.__$$nextCompareConnWaKeys[m];
    ctx.__$$compareConnWaKeyCount[m] = ctx.__$$nextCompareConnWaKeyCount[m]; // 渲染期间再次收集

    ctx.__$$nextCompareConnWaKeys[m] = {};
    ctx.__$$nextCompareConnWaKeyCount[m] = 0;
  });
}

// import hoistNonReactStatic from 'hoist-non-react-statics';
const {
  ccClassDisplayName,
  shallowDiffers: shallowDiffers$1,
  evalState: evalState$1
} = util;

const setupErr = info => new Error(`can not defined setup both in register options and class body, --verbose: ${info}`);

function register$1({
  module = MODULE_DEFAULT,
  state = {},
  watchedKeys = '-',
  storedKeys = [],
  setup = null,
  cuDesc = null,
  persistStoredKeys,
  connect = {},
  extra = {},
  tag,
  lite,
  isPropsProxy = false,
  renderKeyClasses,
  __checkStartUp = true,
  compareProps = true,
  __calledBy
} = {}, ccClassKey = '') {
  try {
    const {
      _module,
      _ccClassKey,
      _connect,
      _watchedKeys
    } = mapRegistrationInfo(module, ccClassKey, renderKeyClasses, CC_CLASS, watchedKeys, connect, __checkStartUp, __calledBy);
    return function (ReactClass) {
      if (ReactClass.prototype && ReactClass.prototype.$$attach) {
        throw new Error(`register a cc class is prohibited!`);
      } // const isClsPureComponent = ReactClass.prototype.isPureReactComponent;


      const ToBeExtendedClass = isPropsProxy === false ? ReactClass : React.Component;
      const staticSetup = ToBeExtendedClass.$$setup;

      const _CcClass = class CcClass extends ToBeExtendedClass {
        constructor(props, context) {
          super(props, context);

          try {
            const optState = evalState$1(state);
            const thisState = this.state || {};
            const privState = Object.assign(thisState, optState);
            this.$$attach = this.$$attach.bind(this); // props.ccOption

            const params = Object.assign({}, props, {
              module: _module,
              tag,
              state: privState,
              type: CC_CLASS,
              insType: CC_CUSTOMIZE,
              watchedKeys: _watchedKeys,
              ccClassKey: _ccClassKey,
              connect: _connect,
              storedKeys,
              persistStoredKeys,
              extra
            });
            buildRefCtx(this, params, lite);
            this.ctx.reactSetState = makeRefSetState(this);
            this.ctx.reactForceUpdate = makeRefForceUpdate(this);

            if (setup && (this.$$setup || staticSetup)) {
              throw setupErr(`ccUniqueKey ${this.ctx.ccUniqueKey}`);
            }

            if (!isPropsProxy) {
              if (this.$$setup) this.$$setup = this.$$setup.bind(this);
              beforeMount(this, setup || this.$$setup || staticSetup, false, cuDesc);
            } // isPropsProxy为true时，延迟到$$attach里执行beforeMount

          } catch (err) {
            rh.tryHandleError(err);
          }
        } // 如果代理组件或者继承组件没有没有实现scu，则同时比较nextState nextProps
        // 因为nextProps不同也会导致重渲染，所以需要约束用户不要把可变数据从props传下来，以提高性能


        shouldComponentUpdate(nextProps, nextState) {
          const childRef = this.ctx.childRef;

          if (childRef && childRef.shouldComponentUpdate) {
            return childRef.shouldComponentUpdate(nextProps, nextState);
          } else if (super.shouldComponentUpdate) {
            return super.shouldComponentUpdate(nextProps, nextState);
          }

          const isPropsChanged = compareProps ? shallowDiffers$1(this.props, nextProps) : false;
          return this.state !== nextState || isPropsChanged;
        } //!!! 存在多重装饰器时, 或者用户想使用this.props.***来用concent类时
        //!!! 必需在类的【constructor】 里调用 this.props.$$attach(this),紧接着state定义之后


        $$attach(childRef) {
          const ctx = this.ctx;
          ctx.childRef = childRef;
          childRef.ctx = ctx; // 让代理属性的目标组件访问ctx时，既可以写 this.props.ctx 也可以写 this.ctx
          // 让孩子引用的setState forceUpdate 指向父容器事先构造好的setState forceUpdate

          childRef.setState = ctx.setState;
          childRef.forceUpdate = ctx.forceUpdate;

          if (isObjectNotNull(childRef.state)) {
            Object.assign(ctx.state, childRef.state, ctx.__$$mstate);
          }

          if (childRef.$$setup) childRef.$$setup = childRef.$$setup.bind(childRef);
          if (setup && (childRef.$$setup || staticSetup)) throw setupErr(`ccUniqueKey ${ctx.ccUniqueKey}`);
          beforeMount(this, setup || childRef.$$setup || staticSetup, false, cuDesc);
          beforeRender(this);
        }

        componentDidMount() {
          // 属性代理模式，必需在组件consturctor里调用 props.$$attach(this)
          // you must call it in next line of state assign expression 
          if (isPropsProxy && !this.ctx.childRef) {
            throw new Error(`forget call props.$$attach(this) in constructor when set isPropsProxy true`);
          }

          if (super.componentDidMount) super.componentDidMount();
          didMount(this);
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
          if (super.componentDidUpdate) super.componentDidUpdate(prevProps, prevState, snapshot);
          didUpdate(this);
        }

        componentWillUnmount() {
          if (super.componentWillUnmount) super.componentWillUnmount();
          beforeUnmount(this);
        } // 注：strict mode 模式下，class组件的双调用机制行为和function组件不一样
        // constructor x2 ---> render x2 ---> componentDidMount x1
        // 两次构造器里虽然生成了不同的refCtx，但是两次render里给的 this.ctx 始终是最新的那一个
        // 所以此处不需要像 useConcent 一样做ef标记


        render() {
          const outProps = this.props;
          this.ctx.prevProps = this.ctx.props;
          this.ctx.props = outProps;
          beforeRender(this);

          if (isPropsProxy === false) {
            // now cc class extends ReactClass, call super.render()
            return super.render();
          } else {
            //将$$attach传递下去，用户需在构造器里最后一样调用props.$$attach()
            const passedProps = { ...outProps,
              ctx: this.ctx,
              $$attach: this.$$attach
            };
            return React.createElement(ReactClass, passedProps);
          }
        }

      };

      _CcClass.displayName = ccClassDisplayName(_ccClassKey);
      return _CcClass;
    };
  } catch (err) {
    rh.tryHandleError(err);
  }
}

/****
 * @param {string} ccClassKey a cc class's name, 
 * you can register a same react class to cc with different ccClassKey,
 * but you can not register multi react class with a same ccClassKey 
 * if they don't have same feature(module, connnect params)
 * @param {object} registerOption
 * @param {string} [registerOption.module] declare which module current cc class belong to, 
 * default is '$$default'
 * @param {Function} [registerOption.setup]
 * @param {Array<string>|string} [registerOption.watchedKeys] 
 * declare current cc class's any instance is concerned which state keys's state changing,
 * but mostly wo should not set this param cause concent will collect ins dep automatically
 * @param {{ [moduleName:string]: keys: string[] | '*' }} [registerOption.connect]
 * @param {string} [registerOption.isPropsProxy] default is false
 * cc alway use strategy of reverse inheritance to wrap your react class, 
 * that means you can get ctx from `this` directly
 * but if you meet multi decorator in your project, 
 * to let concent still works well you should set isPropsProxy as true, 
 * and call props.attach(this) in last line of constructor, 
 * then cc will use strategy of prop proxy to wrap your react class, 
 * for example
 * ```
 *    @register({ module: "form", isPropsProxy: true })
 *    @Form.create()
 *    class BasicForms extends PureComponent {
 *      constructor(props, context) {
 *        super(props, context);
 *        props.$$attach(this);// must call $$attach at last line of constructor block
 *      }
 *      render(){
 *        this.ctx.moduleComputed; //now you can get render ctx supplied by concent
 *      }
 *   }
 * ```
 * online example here: https://codesandbox.io/s/register-in-multi-decrator-j4nr2
 */

function _register (registerOption, ccClassKey) {
  const _registerOption = getRegisterOptions$1(registerOption);

  delete _registerOption.__checkStartUp;
  delete _registerOption.__calledBy;
  return register$1(_registerOption, ccClassKey);
}

function _connect (connectSpec, ccClassKey) {
  const connect = connectSpec || [];
  return _register({
    connect
  }, ccClassKey);
}

/* eslint-disable camelcase */
const {
  getRegisterOptions,
  evalState
} = util;
function initCcFrag (ref, props) {
  const registerOptions = getRegisterOptions(props.register);
  const {
    module,
    renderKeyClasses,
    tag,
    lite,
    compareProps = true,
    setup,
    bindCtxToMethod,
    watchedKeys = '-',
    connect = {},
    storedKeys = [],
    cuDesc = null
  } = registerOptions;
  const state = evalState(registerOptions.state);
  const {
    ccClassKey,
    ccKey,
    ccOption = {},
    id
  } = props;
  let target_watchedKeys = watchedKeys;
  let target_ccClassKey = ccClassKey;
  let target_connect = connect;
  let insType = CC_CUSTOMIZE; //直接使用<CcFragment />构造的cc实例, 尝试提取storedKeys, 然后映射注册信息，（注：registerDumb创建的组件已在外部调用过mapRegistrationInfo）

  if (props.__$$regDumb !== true) {
    insType = CC_FRAGMENT;
    const {
      _ccClassKey,
      _connect,
      _watchedKeys
    } = mapRegistrationInfo(module, ccClassKey, renderKeyClasses, CC_CLASS, watchedKeys, connect, true);
    target_watchedKeys = _watchedKeys;
    target_ccClassKey = _ccClassKey;
    target_connect = _connect;
  }

  buildRefCtx(ref, {
    ccKey,
    connect: target_connect,
    state,
    module,
    type: CC_CLASS,
    insType,
    storedKeys,
    watchedKeys: target_watchedKeys,
    tag,
    ccClassKey: target_ccClassKey,
    ccOption,
    id
  }, lite);
  ref.ctx.reactSetState = makeRefSetState(ref);
  ref.ctx.reactForceUpdate = makeRefForceUpdate(ref);
  ref.__$$compareProps = compareProps; //对于concent来说，ctx在constructor里构造完成，此时就可以直接把ctx传递给beforeMount了，
  //无需在将要给废弃的componentWillMount里调用beforeMount

  beforeMount(ref, setup, bindCtxToMethod, cuDesc);
}

const connectToStr = connect => {
  if (!connect) return '';else if (Array.isArray(connect)) return connect.join(',');else if (typeof connect === 'object') return JSON.stringify(connect);else return connect;
};

function isRegChanged(firstRegOpt, curRegOpt) {
  if (typeof firstRegOpt === 'string' && firstRegOpt !== curRegOpt) {
    return true;
  }

  if (firstRegOpt.module !== curRegOpt.module) {
    return true;
  }

  if (connectToStr(firstRegOpt.connect) !== connectToStr(curRegOpt.connect)) {
    return true;
  } // if (firstRegOpt.tag !== curRegOpt.tag) {
  //   return true;
  // }


  return false;
}

const {
  shallowDiffers,
  isFn
} = util;
const nullSpan = React.createElement('span', {
  style: {
    display: 'none'
  }
});

class CcFragment$1 extends React.Component {
  constructor(props, context) {
    super(props, context);
    initCcFrag(this, props);
  }

  componentDidMount() {
    didMount(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const props = getOutProps(nextProps);
    const isPropsChanged = this.__$$compareProps ? shallowDiffers(props, getOutProps(this.props)) : false; // 检测到register已发送变化，需要重新走一把卸载和初始化流程

    if (isPropsChanged && isRegChanged(props.register, this.props.register)) {
      beforeUnmount(this);
      initCcFrag(this, props);
      didMount(this);
      this.ctx.reactForceUpdate();
      return false;
    }

    return this.state !== nextState || isPropsChanged;
  } // componentDidUpdate(prevProps, prevState) {


  componentDidUpdate() {
    didUpdate(this);
  }

  componentWillUnmount() {
    beforeUnmount(this);
  }

  render() {
    // 注意这里，一定要每次都取最新的绑在ctx上，确保交给renderProps的ctx参数里的state和props是最新的
    const thisProps = this.props;
    this.ctx.prevProps = this.ctx.props;
    this.ctx.props = getOutProps(thisProps);
    const {
      children,
      render
    } = thisProps;
    const view = render || children;

    if (isFn(view)) {
      beforeRender(this);
      const {
        __$$regDumb,
        register = {}
      } = thisProps;
      const ctx = this.ctx;

      if (__$$regDumb !== true && register.mapProps) {
        // 直接使用<CcFragment />实例化
        ctx.mapped = register.mapProps(ctx) || {};
        return view(ctx.mapped) || nullSpan;
      }

      return view(ctx) || nullSpan;
    } else {
      if (React.isValidElement(view)) {
        // 直接传递dom，无论state怎么改变都不会再次触发渲染
        throw new Error(`CcFragment's children can not b a react dom`);
      }

      return view;
    }
  }

}

function _registerDumb(Dumb, regOpt) {
  const {
    ccClassKey,
    mapProps,
    props = {}
  } = regOpt;

  const render = ctx => {
    if (mapProps) {
      ctx.mapped = mapProps(ctx);
      return React.createElement(Dumb, ctx.mapped);
    } else {
      return React.createElement(Dumb, ctx);
    }
  }; //ccKey由实例化的Dumb组件props上透传下来


  const passProps = {
    __$$regDumb: true,
    props,
    ccOption: props.ccOption,
    ccClassKey,
    render,
    ccKey: props.ccKey,
    register: regOpt
  };
  return React.createElement(CcFragment$1, passProps);
} // renderKeyClasses, tag, mapProps, module = MODULE_DEFAULT,
// watchedKeys = '*', storedKeys, persistStoredKeys, render: Dumb,
// connect = {}, state = {}, setup, bindCtxToMethod, compareProps, lite,
// bindCtxToMethod


function _registerDumb$1 (registerOption, ccClassKey) {
  const _registerOption = getRegisterOptions$1(registerOption);

  const {
    renderKeyClasses,
    module,
    watchedKeys = '-',
    render: Dumb,
    connect = {}
  } = _registerOption;
  const {
    _module,
    _ccClassKey,
    _connect,
    _watchedKeys
  } = mapRegistrationInfo(module, ccClassKey, renderKeyClasses, CC_FRAGMENT, watchedKeys, connect, true);
  _registerOption.module = _module;
  _registerOption.watchedKeys = _watchedKeys;
  _registerOption.ccClassKey = _ccClassKey;
  _registerOption.connect = _connect;

  function buildCcFragComp(Dumb) {
    //避免react dev tool显示的dom为Unknown
    const ConnectedFragment = props => {
      _registerOption.props = props;
      return _registerDumb(Dumb, _registerOption);
    };

    return ConnectedFragment;
  }

  if (Dumb) {
    return buildCcFragComp(Dumb);
  } else {
    return Dumb => buildCcFragComp(Dumb);
  }
}

function _connectDumb (connectSpec, ccClassKey) {
  const connect = connectSpec || [];
  return _registerDumb$1({
    connect
  }, ccClassKey);
}

let firstCall = true;
let isStrictMode = false;
function markFalse() {
  isStrictMode = false;
}
function isStrict (cursor) {
  // 首次调用，即可确认是不是严格模式了
  if (firstCall) {
    firstCall = false;
    isStrictMode = cursor % 2 === 0;
  }

  return isStrictMode;
}

/**
 * http://react.html.cn/docs/strict-mode.html
 * https://frontarm.com/daishi-kato/use-ref-in-concurrent-mode/
 */
const {
  ccUKey2ref
} = ccContext$1;
const cursor2hookCtx = {};
let refCursor = 1;

function getUsableCursor() {
  const toReturn = refCursor;
  return toReturn;
}

function incCursor() {
  refCursor = refCursor + 1;
}

function CcHook(state, hookSetter, props, hookCtx) {
  // new CcHook时，这里锁定的hookSetter就是后面一直可以用的setter
  // 如果存在期一直替换hookSetter，反倒会造成打开react-dev-tool，点击面板里的dom后，视图便不再更新的bug
  this.setState = hookSetter;
  this.forceUpdate = hookSetter;
  this.state = state;
  this.isFirstRendered = true;
  this.props = props;
  this.hookCtx = hookCtx;
} // rState: resolvedState, iState: initialState


function buildRef(ref, insType, hookCtx, rState, iState, regOpt, hookState, hookSetter, props, extra, ccClassKey) {
  incCursor();
  cursor2hookCtx[hookCtx.cursor] = hookCtx; // when single file demo in hmr mode trigger buildRef, rState is 0 
  // so here call evalState again

  const state = rState || evalState$4(iState);
  const {
    renderKeyClasses,
    module,
    watchedKeys = '-',
    connect = {},
    setup,
    lite,
    cuDesc,
    bindCtxToMethod
  } = regOpt;
  const {
    _module,
    _ccClassKey,
    _connect,
    _watchedKeys
  } = mapRegistrationInfo(module, ccClassKey, renderKeyClasses, CC_HOOK, watchedKeys, connect, true);
  const hookRef = ref || new CcHook(hookState, hookSetter, props, hookCtx);
  hookCtx.hookRef = hookRef;
  const params = Object.assign({}, regOpt, {
    module: _module,
    watchedKeys: _watchedKeys,
    state,
    type: CC_HOOK,
    insType,
    extra,
    ccClassKey: _ccClassKey,
    connect: _connect,
    ccOption: props.ccOption,
    id: props.id,
    ccKey: props.ccKey
  });
  hookRef.props = props; // keep shape same as class

  buildRefCtx(hookRef, params, lite); // in buildRefCtx cc will assign hookRef.props to ctx.prevProps

  hookRef.ctx.reactSetState = makeRefSetState(hookRef);
  hookRef.ctx.reactForceUpdate = makeRefForceUpdate(hookRef);
  const refCtx = hookRef.ctx;
  refCtx.props = props; // attach props to ctx

  beforeMount(hookRef, setup, bindCtxToMethod, cuDesc);
  hookCtx.prevCcUKey = hookCtx.ccUKey;
  hookCtx.ccUKey = hookRef.ctx.ccUniqueKey; // rewrite useRef for CcHook

  refCtx.useRef = function useR(refName) {
    //give named function to avoid eslint error
    const ref = React.useRef(null);
    refCtx.refs[refName] = ref;
    return ref;
  };

  return hookRef;
}

function replaceSetter(ctx, hookSetter) {
  ctx.__boundSetState = hookSetter;
  ctx.__boundForceUpdate = hookSetter;
}

function getHookCtxCcUKey(hookCtx) {
  return hookCtx.prevCcUKey || hookCtx.ccUKey;
}

const tip = 'react version is LTE 16.8'; // TODO, 访问 process.env.NODE_ENV 非生产模式为没有传tag的组件自动创建loc
// 用于辅助判断 isStrictMode 是否正确

function _useConcent(registerOption = {}, ccClassKey, insType) {
  const cursor = getUsableCursor();

  const _registerOption = getRegisterOptions$1(registerOption); // ef: effectFlag


  const hookCtxContainer = React.useRef({
    cursor,
    prevCcUKey: null,
    ccUKey: null,
    regOpt: _registerOption,
    ef: 0
  });
  const hookCtx = hookCtxContainer.current;
  const {
    state: iState = {}
  } = _registerOption;
  const {
    props = {},
    mapProps,
    layoutEffect = false,
    extra
  } = _registerOption;
  const reactUseState = React.useState;

  if (!reactUseState) {
    throw new Error(tip);
  }

  const isFirstRendered = cursor === hookCtx.cursor;
  const state = isFirstRendered ? evalState$4(iState) : 0;
  const [hookState, hookSetter] = reactUseState(state);

  const cref = ref => buildRef(ref, insType, hookCtx, state, iState, _registerOption, hookState, hookSetter, props, extra, ccClassKey);

  let hookRef; // 组件刚挂载 or 渲染过程中变化module或者connect的值，触发创建新ref

  if (isFirstRendered || isRegChanged(hookCtx.regOpt, _registerOption)) {
    hookCtx.regOpt = _registerOption;
    hookRef = cref();
  } else {
    hookRef = ccUKey2ref[hookCtx.ccUKey];

    if (!hookRef) {
      // single file demo in hot reload mode
      hookRef = cref();
    } else {
      const refCtx = hookRef.ctx;
      refCtx.prevProps = refCtx.props;
      refCtx.props = props;
      hookRef.props = props;

      if (isObject$2(extra)) {
        Object.assign(refCtx.extra, extra);
      }
    }
  }

  const refCtx = hookRef.ctx;
  const effectHandler = layoutEffect ? React.useLayoutEffect : React.useEffect; // after first render of hookRef just created 

  effectHandler(() => {
    const hookCtx = hookRef.hookCtx;
    hookCtx.ef = 1; // 辅助非StrictMode包裹的区域，在随后的判断里可以逃出被删除逻辑
    // mock componentWillUnmount

    return () => {
      const toUnmountRef = ccUKey2ref[getHookCtxCcUKey(hookCtx)];
      hookCtx.prevCcUKey = null;

      if (toUnmountRef) {
        beforeUnmount(toUnmountRef);
      }

      delete cursor2hookCtx[cursor];
    };
  }, [hookRef]); // 渲染过程中变化module或者connect的值，触发卸载前一刻的ref
  // after every render

  effectHandler(() => {
    replaceSetter(refCtx, hookSetter); // 热加载模式下会触发卸载，这里需要核实ccUKey_ref_

    if (!hookRef.isFirstRendered && ccUKey2ref[getHookCtxCcUKey(hookCtx)]) {
      // mock componentDidUpdate
      didUpdate(hookRef);
    } else {
      // mock componentDidMount
      hookRef.isFirstRendered = false;
      didMount(hookRef);
    } // dobule-invoking 机制导致初始化阶段生成了一个多余的hookRef
    // 虽然未存储到refs上，但是收集到的依赖存储到了waKey2uKeyMap上
    // 这里通过触发beforeUnmount来清理多余的依赖


    const cursor = hookCtx.cursor;

    if (isStrict(cursor) && !hookCtx.clearPrev) {
      hookCtx.clearPrev = true;
      const prevCursor = cursor - 1;
      const prevHookCtx = cursor2hookCtx[prevCursor];

      if (prevHookCtx && prevHookCtx.ef === 0) {
        // 根组件useConcent 根组件包裹的子组件也useConcent
        // 此时先触发子组件的effectHandler，同时cursor也是2
        // 浅比较一下两者的注册参数，可以反推出是非strict模式
        if (shallowDiffers$2(prevHookCtx.regOpt, hookCtx.regOpt)) {
          return markFalse();
        } // 确保是同一个类型的实例


        if (prevHookCtx.hookRef.ctx.ccClassKey === hookCtx.hookRef.ctx.ccClassKey) {
          delete cursor2hookCtx[prevCursor]; // 让来自于concent的渲染通知只触发一次, 注意prevHookRef没有被重复触发过diMount逻辑
          // 所以直接用prevHookCtx.hookRef来执行beforeUnmount

          beforeUnmount(prevHookCtx.hookRef);
        }
      }
    }
  });
  beforeRender(hookRef); // before every render

  if (mapProps) {
    const mapped = mapProps(refCtx);

    if (!isPJO$7(mapped)) {
      throw new Error(`mapProps ret ${INAJ}`);
    }

    refCtx.mapped = mapped;
  }

  return refCtx;
}
/**
 * 仅供内部 component/Ob 调用
 */


function useConcentForOb(registerOption, ccClassKey) {
  // 只针对Ob组件实例化检查时，reg参数是否已变化
  return _useConcent(registerOption, ccClassKey, CC_OB);
} // 写为具名函数，防止react-dev-tool里显示.default

function useConcent$1(registerOption, ccClassKey) {
  return _useConcent(registerOption, ccClassKey, CC_CUSTOMIZE);
}

function registerHookComp$1(options, ccClassKey) {
  let _options = getRegisterOptions$1(options);

  if (isFn$4(_options.state)) {
    _options = Object.assign({}, _options);
    _options.state = _options.state();
  }

  function buildCcHookComp(Dumb) {
    const {
      memo = true
    } = _options;
    delete _options.memo;

    const getComp = () => {
      return function CcHookComp(props) {
        _options.props = props;
        const ctx = useConcent$1(_options, ccClassKey); // 和registerDumb保持一致，如果定义了mapProps，传递mapProps的结果给Dumb

        if (_options.mapProps) {
          return React.createElement(Dumb, ctx.mapped);
        } else {
          return React.createElement(Dumb, ctx);
        }
      };
    };

    if (memo && React.memo) {
      return React.memo(getComp());
    } else {
      return getComp();
    }
  }

  const Dumb = _options.render;

  if (Dumb) {
    return buildCcHookComp(Dumb);
  } else {
    return Dumb => buildCcHookComp(Dumb);
  }
}

/****
 * if you are sure the input state is really belong to global state, call cc.setGlobalState,
 * note! cc will filter the input state to meet global state shape and only pass the filtered state to global module
 */

function setGlobalState$1 (state, cb, renderKey, delay) {
  const ref = pickOneRef();
  ref.ctx.setGlobalState(state, cb, renderKey, delay);
}

function throwApiCallError() {
  throw new Error(`api doc: cc.setState(module:string, state:object, renderKey:string | string[], delayMs?:number, skipMiddleware?:boolean, throwError?:boolean)`);
}

function _setState (module, state, renderKey, delayMs = -1, skipMiddleware, throwError = false) {
  if (module === undefined && state === undefined) {
    throwApiCallError();
  }

  if (typeof module !== 'string') {
    throwApiCallError();
  }

  setState$1(module, state, renderKey, delayMs, skipMiddleware);
}

function _set (moduledKeyPath, val, renderKey, delay) {
  const dispatcher = pickOneRef();
  dispatcher.ctx.set(moduledKeyPath, val, renderKey, delay);
}

var _getState = (module => {
  return ccContext$1.store.getState(module);
});

const getGlobalState$1 = ccContext$1.store.getGlobalState;

const _computedValues$1 = ccContext$1.computed._computedValues;
var _getGlobalComputed = (() => {
  return _computedValues$1[MODULE_GLOBAL];
});

const _computedValues = ccContext$1.computed._computedValues;
var _getComputed = (module => {
  if (module) return _computedValues[module];else return _computedValues;
});

function getOneModuleCu(moduleName) {
  const moduleCuRaw = ccContext$1.computed._computedRaw[moduleName];
  const map = {};
  if (!moduleCuRaw) return map;
  const cuKeys = okeys$e(moduleCuRaw);
  cuKeys.forEach(key => map[key] = _getComputed(moduleName)[key]);
  return map;
}

function _debugComputed (moduleName) {
  if (moduleName) return getOneModuleCu(moduleName);
  const allModules = okeys$e(ccContext$1.store._state);
  const map = {};
  allModules.forEach(key => map[key] = getOneModuleCu(key));
  return map;
}

function _emit (event, ...args) {
  if (!event) return;
  const ref = pickOneRef();
  if (ref) ref.ctx.emit(event, ...args);
}

/** @typedef {import('../types-inner').IRef} Ref */
function _off (event, offOptions) {
  /** @type {Ref} */
  const ref = pickOneRef();
  if (ref) ref.ctx.off(event, offOptions);
}

/* eslint-disable camelcase */
function getRefs$1 (filters) {
  const ccUKey2ref = ccContext$1.ccUKey2ref;
  let _filters = {};
  if (typeof filters === 'string') _filters = {
    ccClassKey: filters
  };else if (isObject$2(filters)) _filters = filters;
  const {
    ccClassKey,
    tag,
    moduleName,
    includeNotMount = false
  } = _filters;
  const refs = [];
  const ukeys = okeys$e(ccUKey2ref);
  const len = ukeys.length;

  const isEqual = (passedVal, ctxVal) => {
    if (!passedVal) return true;
    return passedVal === ctxVal;
  };

  for (let i = 0; i < len; i++) {
    /** @type Ref */
    const ref = ccUKey2ref[ukeys[i]];
    const mountStatus = ref.__$$ms;

    if (includeNotMount) {
      // allow NOT_MOUNT, MOUNTED
      if (mountStatus === UNMOUNTED$1) continue;
    } else {
      // only allow MOUNTED
      if (mountStatus !== MOUNTED$1) continue;
    }

    const ctx = ref.ctx;

    if (isEqual(ccClassKey, ctx.ccClassKey) && isEqual(tag, ctx.tag) && isEqual(moduleName, ctx.module)) {
      refs.push(ref);
    }
  }

  return refs;
}

var _execute = ((filters, ...args) => {
  const refs = getRefs$1(filters);
  refs.forEach(ref => {
    if (ref.ctx.execute) ref.ctx.execute(...args);
  });
});

var _executeAll = ((...args) => {
  const refs = getRefs$1();
  refs.forEach(ref => {
    if (ref.ctx.execute) ref.ctx.execute(...args);
  });
});

const appendState$1 = ccContext$1.store.appendState;

const _caller = ccContext$1.reducer._caller;

/**
 * inspired by mobx's <Observer>{state=>state.name}</Observer>
 */

const obView = () => 'miss render prop or children';

let TargetComp = () => React.createElement('h1', {}, 'Ob component needs react ver lte 16.8');

if (React.memo) {
  TargetComp = React.memo(function (props) {
    const {
      module,
      connect,
      classKey,
      render,
      children
    } = props;

    if (module && connect) {
      throw new Error(`module, connect can not been supplied both`);
    } else if (!module && !connect) {
      throw new Error(`module or connect should been supplied`);
    }

    const view = render || children || obView;
    const register = module ? {
      module
    } : {
      connect
    }; // 设置为1，最小化ctx够造过程，仅附加状态数据，衍生数据、和reducer相关函数

    register.lite = 1;
    const ctx = useConcentForOb(register, classKey);
    const {
      mr,
      cr,
      r
    } = ctx;
    let state, computed;

    if (module) {
      state = ctx.moduleState;
      computed = ctx.moduleComputed;
    } else {
      state = ctx.connectedState;
      computed = ctx.connectedComputed;
    }

    return view([state, computed, {
      mr,
      cr,
      r
    }]);
  });
}

var _Ob = TargetComp;

if (typeof window === 'undefined') {
  // eslint-disable-next-line
  global && (global.window = {});
}

const _getRef = filters => {
  const refs = getRefs$1(filters);

  return refs[0];
};

const cloneModule = _cloneModule;
const run = _run;
const connect = _connect;
const connectDumb = _connectDumb;
const register = _register;
const registerDumb = _registerDumb$1;
const registerHookComp = registerHookComp$1;
const configure = _configure;
const setGlobalState = setGlobalState$1;
const setState = _setState;
const set = _set;
const getState = _getState;
const getGlobalState = getGlobalState$1;
const getComputed$1 = _getComputed;
const debugComputed = _debugComputed;
const getGlobalComputed = _getGlobalComputed;
const emit = _emit;
const off = _off;
const dispatch = _dispatch;
const ccContext = ccContext$1;
const execute = _execute;
const executeAll = _executeAll;
const getRefs = getRefs$1;
const getRef = _getRef;
const reducer$1 = _caller;
const clearContextIfHot = _clearContextIfHot;
const CcFragment = CcFragment$1;
const Ob = _Ob;
const cst = _cst;
const appendState = appendState$1;
const useConcent = useConcent$1;
const defComputed = (fn, defOptions) => makeFnDesc(fn, defOptions);
const defLazyComputed = (fn, defOptions) => {
  const desc = makeFnDesc(fn, defOptions);
  desc.lazy = true;
  return desc;
};
const defComputedVal = val => ({
  fn: () => val,
  depKeys: []
});
/** @type {import('./types').defWatch} */

const defWatch = (fn, defOptions) => makeFnDesc(fn, defOptions);
const defaultExport = {
  cloneModule,
  emit,
  off,
  connect,
  connectDumb,
  register,
  registerDumb,
  registerHookComp,
  configure,
  dispatch,
  run,
  setGlobalState,
  setState,
  set,
  getGlobalState,
  getState,
  getComputed: getComputed$1,
  debugComputed,
  getGlobalComputed,
  ccContext,
  execute,
  executeAll,
  getRefs,
  getRef,
  reducer: reducer$1,
  clearContextIfHot,
  CcFragment,
  Ob,
  cst,
  appendState,
  useConcent,
  bindCcToMcc,
  defComputed,
  defLazyComputed,
  defComputedVal,
  defWatch
};
let multiCcContainer = null;
function bindCcToMcc(name) {
  if (!multiCcContainer) {
    throw new Error('current env is not multi concent ins mode');
  }

  if (multiCcContainer[name]) {
    throw new Error(`ccNamespace[${name}] already existed in window.mcc`);
  }

  setCcNamespace(name);
  bindToWindow$1(name, defaultExport, multiCcContainer);
}

function avoidMultiCcInSameScope() {
  const winCc = getWinCc();

  if (winCc) {
    if (winCc.ccContext && winCc.ccContext.info) {
      const existedVersion = winCc.ccContext.info.version;
      const newVersion = ccContext.info.version; //webpack-dev-server模式下，有些引用了concent的插件或者中间件模块，如果和当前concent版本不一致的话，会保留另外一个concent在其包下
      //路径如 node_modules/concent-middleware-web-devtool/node_modules/concent（注，在版本一致时，不会出现此问题）
      //这样的就相当于隐形的实例化两个concent 上下文，这是不允许的

      if (existedVersion !== newVersion) {
        throw new Error(`concent ver conflict! cur[${existedVersion}]-new[${newVersion}], refresh browser or reinstall some concent-eco-lib`);
      }
    }
  }
} // 微前端机构里，每个子应用都有自己的cc实例，需要绑定到mcc下，防止相互覆盖


if (window) {
  multiCcContainer = window.mcc;

  if (multiCcContainer) {
    // 1秒后concent会检查ccns，如果不存在，说明用户忘记调用bindCcToMcc了
    setTimeout(() => {
      const ccns = getCcNamespace();

      if (!ccns) {
        throw new Error('detect window.mcc, but user forget call bindCcToMcc in bundle entry');
      } else {
        avoidMultiCcInSameScope();
      }
    }, 1000);
  } else {
    avoidMultiCcInSameScope();
    bindToWindow$1('cc', defaultExport);
  }
}

var state = {
  lang: "",
  message: {}
};

/**
 * 判断类型
 * @param {*} target
 */
function getType(target) {
  var ret = _typeof(target);

  var template = {
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Number]": "number",
    "[object Boolean]": "boolean",
    "[object String]": "string"
  };

  if (target === null) {
    return "null";
  } else if (ret === "object") {
    var str = Object.prototype.toString.call(target);
    return template[str];
  } else {
    return ret;
  }
}
/**
 * 深拷贝
 * @param target 拷贝对象
 */

function deepClone(target) {
  var result;

  if (_typeof(target) === "object") {
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

/**
 * 设置使用的语言包
 * @param {string} newLang i18n state message key
 */

function setLang$1(newLang, _, f) {
  if (!newLang) {
    console.warn("cxy-react-i18n \u8BBE\u7F6E\u8BED\u8A00 \u503C\u4E0D\u80FD\u4E3A\u7A7A");
  } else if (getType(newLang) !== "string") {
    console.warn("cxy-react-i18n \u8BBE\u7F6E\u8BED\u8A00 \u65B0\u8BED\u8A00\u7C7B\u578B\u683C\u5F0F\u9519\u8BEF,\u671F\u671B:string");
  } else if (!f.moduleComputed.i18nLangObj[newLang]) {
    console.warn("cxy-react-i18n \u8BBE\u7F6E\u8BED\u8A00 \u65B0\u8BED\u8A00\u7C7B\u578B\u7684\u5305\u672A\u5B9A\u4E49");
  } else {
    return {
      lang: deepClone(newLang)
    };
  }
}
/**
 * 设置新的语言包-覆盖性
 * @param {object} newMessage 新的完整的语言包 object
 */

function setMessage$1(newMessage, _, f) {
  if (!newMessage) {
    console.warn("cxy-react-i18n \u8BBE\u7F6E\u8BED\u8A00\u5305 \u503C\u4E0D\u80FD\u4E3A\u7A7A");
  } else if (getType(newMessage) !== "object") {
    console.warn("cxy-react-i18n \u8BBE\u7F6E\u8BED\u8A00\u5305 \u503C\u7684\u7C7B\u578B\u4E0D\u6B63\u786E,\u9700\u8981\u4E00\u4E2A\u5BF9\u8C61");
  } else if (_.lang && !newMessage[_.lang]) {
    console.warn("cxy-react-i18n \u8BBE\u7F6E\u8BED\u8A00\u5305 \u5F53\u524D\u6B63\u5728\u4F7F\u7528\u7684\u8BED\u8A00\u5728\u65B0\u8BED\u8A00\u5305\u4E2D\u4E0D\u5B58\u5728,\u8BF7\u8865\u5145/\u5148\u91CD\u7F6E\u6B63\u5728\u4F7F\u7528\u7684\u8BED\u8A00\u5305");
  } else {
    return {
      message: _objectSpread2({}, newMessage)
    };
  }
}
/**
 * 批量添加不存在的语言包-已有的不添加
 * @param {*} newMesaage 不存在的语言包
 */

function addMessage$1(messageItems, _, f) {
  // 新语言包需要做已有语言包的内容比对，新语言包必须只能包含已存在语言包的key-排除已有语言包
  if (!messageItems) {
    console.warn("cxy-react-i18n \u6DFB\u52A0\u65B0\u8BED\u8A00\u5305 \u503C\u4E0D\u80FD\u4E3A\u7A7A");
  } else if (getType(messageItems) !== "object") {
    console.warn("cxy-react-i18n \u6DFB\u52A0\u65B0\u8BED\u8A00\u5305 \u503C\u7684\u7C7B\u578B\u4E0D\u6B63\u786E,\u9700\u8981\u4E00\u4E2A\u5BF9\u8C61");
  } else {
    return {
      message: deepClone(_objectSpread2(_objectSpread2({}, _.message), messageItems))
    };
  }
}
/**
 * 删除单个语言包
 * @param {string} messageKey 已存在的语言类型
 */

function deleteMessage$1(messageKey, _, f) {
  var _f$moduleComputed$i = f.moduleComputed.i18nLangObj,
      i18nLangObj = _f$moduleComputed$i === void 0 ? {} : _f$moduleComputed$i;

  if (!messageKey) {
    console.warn("cxy-react-i18n \u5220\u9664\u8BED\u8A00\u5305 \u503C\u4E0D\u80FD\u4E3A\u7A7A");
  } else if (getType(messageKey) !== "string") {
    console.warn("cxy-react-i18n \u5220\u9664\u8BED\u8A00\u5305 \u503C\u7C7B\u578B\u9519\u8BEF");
  } else if (!i18nLangObj[messageKey]) {
    console.warn("cxy-react-i18n \u5220\u9664\u8BED\u8A00\u5305 \u6307\u5B9A\u7684\u8BED\u8A00\u5305key\u4E0D\u5B58\u5728");
  } else {
    var nowMessage = deepClone(_.message);
    delete nowMessage[messageKey];
    return {
      message: nowMessage
    };
  }
}
/**
 * 批量添加语言包内容-增量性
 * @param {object} messageItems 新的语言包,当前已存在的语言包
 */

function addMessageText$1(messageItems, _, f) {
  // 还需要判断数据结构
  if (!messageItems) {
    console.warn("cxy-react-i18n \u6DFB\u52A0\u5DF2\u6709\u8BED\u8A00\u5305\u5185\u5BB9 \u503C\u4E0D\u80FD\u4E3A\u7A7A");
  } else if (getType(messageItems) !== "object") {
    console.warn("cxy-react-i18n \u6DFB\u52A0\u5DF2\u6709\u8BED\u8A00\u5305\u5185\u5BB9 \u503C\u7684\u7C7B\u578B\u4E0D\u6B63\u786E,\u9700\u8981\u4E00\u4E2A\u5BF9\u8C61");
  } else {
    var i18nLangKey = f.moduleComputed.i18nLangKey;

    if (i18nLangKey && i18nLangKey.length) {
      var nowMessage = deepClone(_.message);
      i18nLangKey.forEach(function (msgKey) {
        nowMessage[msgKey] = _objectSpread2(_objectSpread2({}, nowMessage[msgKey]), messageItems[msgKey]);
      });
      return {
        message: nowMessage
      };
    } else {
      return {
        message: deepClone(messageItems)
      };
    }
  }
}
/**
 * 更新当前已存在的语言包信息-增量性
 * @param {*} messageItems 新的语言包,当前已存在的语言包
 */

function updateMessageText$1(messageItems, _, f) {
  // 要进行格式验证
  if (!messageItems) {
    console.warn("cxy-react-i18n \u66F4\u65B0\u8BED\u8A00\u5305\u5185\u5BB9 \u503C\u4E0D\u80FD\u4E3A\u7A7A");
  } else if (getType(messageItems) !== "object") {
    console.warn("cxy-react-i18n \u66F4\u65B0\u8BED\u8A00\u5305\u5185\u5BB9 \u503C\u7684\u7C7B\u578B\u4E0D\u6B63\u786E,\u9700\u8981\u4E00\u4E2A\u5BF9\u8C61");
  } else {
    var nowMessage = deepClone(_.message);
    var notLnag = [];

    for (var key in messageItems) {
      if (nowMessage[key]) {
        for (var textKey in messageItems[key]) {
          nowMessage[key][textKey] = messageItems[key][textKey];
        }
      } else {
        notLnag.push(key);
      }
    }

    if (notLnag.length) {
      console.warn("cxy-react-i18n \u6DFB\u52A0\u8BED\u8A00\u5305 \u672A\u6DFB\u52A0\u7684\u8BED\u8A00\u5305\u7C7B\u578B:".concat(notLnag.join("、"), ",\u539F\u56E0\uFF1A\u5DF2\u6709\u8BED\u8A00\u7C7B\u578B\u4E2D\u4E0D\u5B58\u5728\u8FD9\u4E9B\u8BED\u8A00\u7C7B\u578B"));
    }

    return {
      message: nowMessage
    };
  }
}
/**
 * 删除某语言包下面的文字key
 * @param {object} _ i18n state
 * @param {*} messageTextKey 语言包下的对照文字key
 * @returns boolean
 */

function deleteMessageItemText$1(messageTextKey, _, f) {
  if (!messageTextKey) {
    console.warn("cxy-react-i18n \u5220\u9664\u8BED\u8A00\u5305\u5BF9\u5E94\u6587\u672C \u503C\u4E0D\u80FD\u4E3A\u7A7A");
  } else if (getType(messageTextKey) !== "string") {
    console.warn("cxy-react-i18n \u5220\u9664\u8BED\u8A00\u5305\u5BF9\u5E94\u6587\u672C \u503C\u7C7B\u578B\u9519\u8BEF");
  } else if (f.moduleComputed.I18nMessageKeys.indexOf(messageTextKey) === -1) {
    console.warn("cxy-react-i18n \u5220\u9664\u8BED\u8A00\u5305\u5BF9\u5E94\u6587\u672C \u503C\u4E0D\u5B58\u5728\u4E8E\u5F53\u524D\u8BED\u8A00\u5305\u5185");
  } else {
    var nowMessage = deepClone(_.message);

    for (var key in nowMessage) {
      delete nowMessage[key][messageTextKey];
    }

    return {
      message: nowMessage
    };
  }
}

var reducer = /*#__PURE__*/Object.freeze({
  __proto__: null,
  setLang: setLang$1,
  setMessage: setMessage$1,
  addMessage: addMessage$1,
  deleteMessage: deleteMessage$1,
  addMessageText: addMessageText$1,
  updateMessageText: updateMessageText$1,
  deleteMessageItemText: deleteMessageItemText$1
});

/**
 * 当前使用的语言包
 */
var i18nMessage = {
  fn: function fn(_ref, o, fnCtx) {
    var lang = _ref.lang,
        message = _ref.message;

    try {
      return message[lang] ? message[lang] : {};
    } catch (error) {
      console.warn("cxy-react-i18n error:", error);
      return {};
    }
  },
  depKeys: ["lang", "message"],
  compare: true
};
/**
 * 当前所有的语言包类型对象
 */

function i18nLangObj(_ref2) {
  var message = _ref2.message;

  try {
    var lang = {};

    for (var key in message) {
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

function i18nLangKey(_ref3) {
  var message = _ref3.message;

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

function I18nMessageKeys(_ref4, o, f) {
  var message = _ref4.message;

  try {
    var _i18nLangKey = f.cuVal.i18nLangKey;

    if (_i18nLangKey[0]) {
      return Object.keys(message[_i18nLangKey[0]]);
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
}

var computed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  i18nMessage: i18nMessage,
  i18nLangObj: i18nLangObj,
  i18nLangKey: i18nLangKey,
  I18nMessageKeys: I18nMessageKeys
});

/**
 * 根据当前lang的存在性重置lang
 */
var watch_lang_message = {
  fn: function fn(_ref, o, f) {
    var lang = _ref.lang,
        message = _ref.message;

    if (lang && !message[lang] && f.cuVal.i18nLangKey[0]) {
      f.refCtx.mr.setLang(f.cuVal.i18nLangKey[0]);
    }
  },
  depKeys: ["lang", "message"],
  compare: true,
  immediate: true
};

var watch = /*#__PURE__*/Object.freeze({
  __proto__: null,
  watch_lang_message: watch_lang_message
});

var I18n = {
  state: state,
  reducer: reducer,
  computed: computed,
  watch: watch
};

var runStore = function runStore() {
  return run({
    I18n: I18n
  }, {
    middlewares: [],
    plugins: [],
    isHot: true,
    isStrict: false,
    log: false,
    alwaysRenderCaller: true,
    computedCompare: true,
    watchCompare: true,
    watchImmediate: true,
    reComputed: true,
    objectValueCompare: true,
    nonObjectValueCompare: true,
    localStorage: true
  });
};

function RenderI18nKeyToText(props) {
  var i18nKey = props.i18nKey;

  var _useConcent = useConcent({
    module: "I18n"
  }),
      moduleComputed = _useConcent.moduleComputed;

  var i18nMessage = moduleComputed.i18nMessage;

  if (i18nKey && i18nMessage[i18nKey]) {
    return i18nMessage[i18nKey];
  } else {
    return i18nKey;
  }
}

/**
 * 转换指定key的国际化文本
 * @param {string} i18nKey 国际化对应key
 * @returns string
 */

var renderI18nKeyToText = function renderI18nKeyToText(i18nKey) {
  return /*#__PURE__*/React__default['default'].createElement(RenderI18nKeyToText, {
    i18nKey: i18nKey
  });
}; // 注册机

var i18nRun = runStore; // 语言

var setLang = function setLang() {
  var _ccReducer$I18n;

  return (_ccReducer$I18n = reducer$1.I18n).setLang.apply(_ccReducer$I18n, arguments);
}; // 语言包

var setMessage = function setMessage() {
  var _ccReducer$I18n2;

  (_ccReducer$I18n2 = reducer$1.I18n).setMessage.apply(_ccReducer$I18n2, arguments);
};
var addMessage = function addMessage() {
  var _ccReducer$I18n3;

  return (_ccReducer$I18n3 = reducer$1.I18n).addMessage.apply(_ccReducer$I18n3, arguments);
};
var deleteMessage = function deleteMessage() {
  var _ccReducer$I18n4;

  return (_ccReducer$I18n4 = reducer$1.I18n).deleteMessage.apply(_ccReducer$I18n4, arguments);
}; // 语言包文本内容

var addMessageText = function addMessageText() {
  var _ccReducer$I18n5;

  return (_ccReducer$I18n5 = reducer$1.I18n).addMessageText.apply(_ccReducer$I18n5, arguments);
};
var updateMessageText = function updateMessageText() {
  var _ccReducer$I18n6;

  return (_ccReducer$I18n6 = reducer$1.I18n).updateMessageText.apply(_ccReducer$I18n6, arguments);
};
var deleteMessageItemText = function deleteMessageItemText() {
  var _ccReducer$I18n7;

  return (_ccReducer$I18n7 = reducer$1.I18n).deleteMessageItemText.apply(_ccReducer$I18n7, arguments);
}; // 获取数据

var getLang = function getLang() {
  return getState("I18n").lang;
};
var getMessage = function getMessage() {
  return getState("I18n").message;
};
var getComputed = function getComputed(computedName) {
  try {
    if (computedName) {
      return getComputed$1("I18n")[computedName];
    }

    return null;
  } catch (err) {
    return null;
  }
}; // 简写

var ir = i18nRun;
var fr = renderI18nKeyToText;
var gl = getLang;
var sl = setLang;
var gm = getMessage;
var sm = setMessage;
var am = addMessage;
var dm = deleteMessage;
var at = addMessageText;
var ud = updateMessageText;
var dt = deleteMessageItemText;
var gc = getComputed;

var exportFns = /*#__PURE__*/Object.freeze({
  __proto__: null,
  renderI18nKeyToText: renderI18nKeyToText,
  i18nRun: i18nRun,
  setLang: setLang,
  setMessage: setMessage,
  addMessage: addMessage,
  deleteMessage: deleteMessage,
  addMessageText: addMessageText,
  updateMessageText: updateMessageText,
  deleteMessageItemText: deleteMessageItemText,
  getLang: getLang,
  getMessage: getMessage,
  getComputed: getComputed,
  ir: ir,
  fr: fr,
  gl: gl,
  sl: sl,
  gm: gm,
  sm: sm,
  am: am,
  dm: dm,
  at: at,
  ud: ud,
  dt: dt,
  gc: gc
});

var xposeds = _objectSpread2({}, exportFns);

module.exports = xposeds;
