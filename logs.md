### 2020.03.18

    1.删除`i18nRunModel`API。
    2.处理`MODEL_NAME`引用错误。
    3.暂时请勿使用`i18nModel`手动注册的方式,请使用`i18nRun`自动注册
    4.新增hook API---具体使用请看README.md
        useI18nState
        useI18nReducer
        useI18nComputed
        useI18nKeyToText

### 2021.03.17

    1.新增 `i18nRunModel`(简写=irm)方法,和`i18Run`方法效果一样,二选其一,区别于:已经使用了concent的项目使用`i18nRunModel`，未使用concent的项目使用`i18Run`
    2.API名称变更
        am  =>  ami
        dm  =>  dmi
        ud  =>  ut
        setMessage  =>  setMessageItem
        addMessage  =>  addMessageItem
        updateMessageItemText  =>  updateMessageText
        I18nMessageKeys  =>  i18nMessageKeys
    3.新增注册方式`i18nModel`(简写=im),非注册器，也无需导入其他注册器。适用于已使用concent的项目,直接将`i18nModel`放入在项目中`run`的models中即可。
    4.新增变量`MODEL_NAME`，配置`i18nModel`进行自注册的时候使用。
    5.优化变量名...
    6.修复变量名未应用完全导致无法读取数据报错

## 2021.03.16 初版上传 github

地址:<a href="https://github.com/cxy2019731/cxy-react-i18n">https://github.com/cxy2019731/cxy-react-i18n</a>
