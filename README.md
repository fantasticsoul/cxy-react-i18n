# 适用于 react 的 I18n 动态化解决方案

## 任何建议、问题

<a href="https://github.com/cxy2019731/cxy-react-i18n">https://github.com/cxy2019731/cxy-react-i18n</a>

## 更新日志

<a href="https://github.com/cxy2019731/cxy-react-i18n/blob/master/logs.md">https://github.com/cxy2019731/cxy-react-i18n/blob/master/logs.md</a>

## 注意

1.使用时需要注意 cxy-react-i18n 的版本和主要依赖 concent 的版本。需要保持一致。 2.当前支持的 concent 版本为:^2.14.12

## 开始

```javascript
    yarn add cxy-react-i18n   or   npm i cxy-react-i18n
```

## 使用

1.导入注册器

```javascript
// 项目中未使用concent
import { i18nRun } from "cxy-react-i18n";
i18nRun();
// 项目中使用了concent
import { i18nRunModel } from "cxy-react-i18n";
i18nRunModel();
```

2.注册文本

```javascript
import { setMessage } from "cxy-react-i18n";
const messages = {
    zhCN:{
        test:"测试",
        ...
    },
    enUS:{
        test:"test",
        ...
    },
    ...
};
setMessage(messages);
```

3.设置语言

```javascript
import { setLang } from "cxy-react-i18n";
setLang("zhCN");
```

4.使用文本

```javascript
import { renderI18nKeyToText } from "cxy-react-i18n";
renderI18nKeyToText("test");
// lang = zhCN
测试;
// lang = enUS
test;
```



## 全部 API

### `i18nRun`---------注册器，初始化,适用于未使用 concent 的项目

1.简写：

```javascript
i18nRun === ir;
```

2.导入

```javascript
import { i18nRun } from "cxy-react-i18n";
i18nRun();
// 或者
import { ir } from "cxy-react-i18n";
ir();
```

3.注意

```javascript
1.应尽可能在最顶层逻辑调用--推荐入口文件。
2.全局只需调用一次,和`i18nRunModel`冲突
```

### `i18nRunModel`---------注册器，初始化,效果同上,适用于已使用 concent 的项目

1.简写：

```javascript
i18nRunModel === irm;
```

2.导入

```javascript
import { i18nRunModel } from "cxy-react-i18n";
i18nRunModel();
// 或者
import { ir } from "cxy-react-i18n";
ir();
```

3.注意

```javascript
1.应尽可能在最顶层逻辑调用--推荐入口文件。
2.全局只需调用一次,和`i18nRun`冲突
```

### `i18nModel`----------注册器 model,初始化,效果同上,适用于已使用 concent 的项目

1.简写：

```javascript
i18nModel === im;
```

2.导入

```javascript
import { run } from "concent";
import { i18nModel, MODEL_NAME } from "cxy-react-i18n";
// 你的run函数调用处
run({
  ...你的models,
  [MODEL_NAME]: i18nModel,
});
// 或者
import { im, MODEL_NAME } from "cxy-react-i18n";
// 你的run函数调用处
run({
  ...你的models,
  [MODEL_NAME]: im,
});
```

3.注意

```javascript
1.应尽可能在最顶层逻辑调用--推荐入口文件。
2.全局只需调用一次,和`i18nRun`冲突
```

### `renderI18nKeyToText`---------转换器，转换指定 key 的文本

1.简写：

```javascript
renderI18nKeyToText === fr;
```

2.导入

```javascript
import { renderI18nKeyToText } from "cxy-react-i18n";
renderI18nKeyToText("需要转换的key");
// 或者
import { fr } from "cxy-react-i18n";
ir("需要转换的key");
```

3.注意

```javascript
1.尽可能保证传入的key在调用之前存储进message中。
2.负责将key转换为对应文本
```

### `setLang`----------设置采用的语言 lang

1.简写：

```javascript
setLang === sl;
```

2.导入

```javascript
import { setLang } from "cxy-react-i18n";
setLang("已存在的语言包的key");
// 或者
import { sl } from "cxy-react-i18n";
sl("已存在的语言包的key");
```

3.注意

```javascript
1.传入的key需要在设置之前存储进message中,保证设置的message中存在设置的key的语言包。
2.切换显示的文本采用的语言包
```

### `getLang`---------获取当前采用的语言的 key

1.简写：

```javascript
getLang === gl;
```

2.导入

```javascript
import { getLang } from "cxy-react-i18n";
getLang();
// 或者
import { gl } from "cxy-react-i18n";
gl();
```

3.注意

```javascript

```

### `getMessage`---------获取当前所有的语言包对象

1.简写：

```javascript
getMessage === gm;
```

2.导入

```javascript
import { getMessage } from "cxy-react-i18n";
getMessage();
// 或者
import { gm } from "cxy-react-i18n";
gm();
```

3.注意

```javascript
1.空对象表示未设置
```

### `setMessageItem`---------设置语言包内容

1.简写：

```javascript
setMessageItem === smi;
```

2.导入

```javascript
const message ={
    zhCN:{
        test:"测试",
        ...
    },
    enUS:{
        test:"test",
        ...
    },
    ...
}
import { setMessageItem } from "cxy-react-i18n";
setMessageItem(message);
// 或者
import { smi } from "cxy-react-i18n";
smi(message);
```

3.注意

```javascript
1.覆盖性设置，需要包含当前正在使用的语言包所有内容,一般只是第一次初始化语言包内容时使用。
```

### `addMessageItem`---------新增语言包

1.简写：

```javascript
addMessageItem === ami;
```

2.导入

```javascript
const oldMessage ={
    zhCN:{
        test:"测试",
        ...
    },
    enUS:{
        test:"test",
        ...
    },
    ...
}
const new_message={
    zhTW:{
        test:'測試'
    }
}
import { addMessageItem } from "cxy-react-i18n";
addMessageItem(new_message);
// 或者
import { ami } from "cxy-react-i18n";
ami(new_message);
// 结果
={...oldMessage,...new_message}
```

3.注意

```javascript
1.增量性设置，常用语初始化后的其他语言包添加进message
```

### `deleteMessageItem`---------删除语言包

1.简写：

```javascript
deleteMessageItem === dmi;
```

2.导入

```javascript
import { deleteMessageItem } from "cxy-react-i18n";
deleteMessageItem("要删除的语言包的key");
// 或者
import { dmi } from "cxy-react-i18n";
dmi("要删除的语言包的key");
```

3.注意

```javascript
1.删除单个语言包的全部内容
```

### `addMessageText`---------添加已有语言包的内容

1.简写：

```javascript
addMessageText === at;
```

2.导入

```javascript
// 例如已存在zhCN语言包,enUS语言包,现在新增一个key=test2的内容
const addMsgText = {
  zhCN: {
    test2: "测试2",
  },
  enUS: {
    test2: "test2",
  },
};
import { addMessageText } from "cxy-react-i18n";
addMessageText(addMsgText);
// 或者
import { at } from "cxy-react-i18n";
at(addMsgText);
```

3.注意

```javascript
1.一次性新增多个已存在语言包的内容。
2.添加一个key内容需要补全已存在语言包的同key的值，保证同一个key在多个语言包内都存在对应文本。
```

### `updateMessageText`---------更新已有语言包的已存在的 key 的文本值

1.简写：

```javascript
updateMessageText === ud;
```

2.导入

```javascript
// 例如已存在zhCN语言包,enUS语言包,zhTW语言包,语言包都存在test,现在将其修改
const upMsgTest = {
  zhCN: {
    test: "修改后的文本 zhCN test2",
  },
  enUS: {
    test: "修改后的文本 enUS test2",
  },
  // zhTW的不修改可不传
};
import { updateMessageText } from "cxy-react-i18n";
updateMessageText(upMsgTest);
// 或者
import { ud } from "cxy-react-i18n";
ud(upMsgTest);
```

3.注意

```javascript
1.一次性修改多个已存在语言包中已存在的key的文本值。
```

### `deleteMessageText`---------删除已存在的文本对应 key 数据

1.简写：

```javascript
deleteMessageText === dt;
```

2.导入

```javascript
const deleteTextKey = "需要删除的文本对应的key";
import { deleteMessageText } from "cxy-react-i18n";
deleteMessageText(deleteTextKey);
// 或者
import { dt } from "cxy-react-i18n";
dt(deleteTextKey);
```

3.注意

```javascript
1.一次性删除指定key的所有内容，这个只针对语言包内的内容。
2.多个语言包同步删除。
```

### `getComputed`---------获取根据 lang 和 message 计算出的衍生数据

1.简写：

```javascript
getComputed === gc;
```

2.导入

```javascript
const getComputedKey = "已存在的衍生数据的key";
import { getComputed } from "cxy-react-i18n";
getComputed(getComputedKey);
// 或者
import { gc } from "cxy-react-i18n";
gc(getComputedKey);
```

3.注意

```javascript
1.动态更新这些值，但不会动态响应到获取函数...,需要主动获取
2.目前衍生key
    i18nMessage---当前才用的语言包的内容
    i18nLangObj---已存在的语言包的key对象
    i18nLangKey---已存在的语言包的key数组
    i18nMessageKeys---已存在的语言包内容的key数组(默认取message中首个语言包)
```


## 示例(还未完全完善,可能未及时同步,会尽快完善)

<a href="https://codesandbox.io/s/cxy-react-i18n-example-fnqux" target="_blank" style="font-size:30px;">cxy-react-i18n 综合示例</a><br />
<a href="https://codesandbox.io/s/cxy-react-i18n-i18nrunmodel-example-umscl?file=/src/index.js:117-129" target="_blank" style="font-size:30px;">项目中未引入concent的使用示例</a><br />
<a href="https://codesandbox.io/s/cxy-react-i18n-example-fnqux" target="_blank" style="font-size:30px;">项目中已经引入concent的使用示例-自动注册</a><br />
<a href="https://codesandbox.io/s/cxy-react-i18n-i18nmodel-example-ysept?file=/src/concentConfigs/runConcent.js" target="_blank" style="font-size:30px;">项目中已经引入concent的使用示例-手动注册</a><br />
