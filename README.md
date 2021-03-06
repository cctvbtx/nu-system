# NU-system

[HomePage](https://nu-system.github.io/)

No UI 组件库系统 nu-system，是一个 推崇 UI 和 Logic 完全分离的组件系统。

主要由 UI Just + Logic only 两部分组成，UI 和 Logic 由对应接口关联，也可以完全独立。

我们更希望 NU-system 是一个开放的平台，只要你的组件符合我们的规范，就可以和我们一起将它丰富起来。

## UI Just

UI Just 分为 UI Core 和 Skin library。

- **UI Core:** UI 核心样式，是对通用 UI 的进一步抽象，以便于其他人在定义 Skin 的时候可以写更少样式代码，更像是一个 UI 接口规范。
- **Skin library:** skin 是基于 UI Core 提供的样式接口进行开发的可替换的皮肤。以至于符合相同规范的任意 skin 之间可以互换，甚至是作为一种资源被其它人使用。

目前 UI Just 部分以及文档都放在了 [nu-system](https://github.com/yued-fe/nu-system) 仓库中。

NU-system 本身并没有对UI语言做限制，所以可以使用任意 UI 语言创建 UI Just 部分。

只是目前 CSS 比较容易实现这套理念，所以 ui-system 目前提供 css 的方式。

- nu-css-in-js 规划之中；
   
## Logic Only
  
因为逻辑和 UI 的分离，意味着可以使用任意的 JS 框架去实现 UI Core 的规范。

同理也可以基于 Logic Only 的规范创建 UI Core。

NU-system 本身并没有对逻辑语言做限制，所以可以使用任意 JS 语言创建 Logic Only 部分。

- [nu-vue](https://yued-fe.github.io/nu-vue/) 是 Logic Only 的 Vue 实现版本;
- [nu-react](https://yued-fe.github.io/nu-react/) 是 Logic Only 的 React 实现版本;
- nu-jquery 规划之中;
- nu-js 规划之中;
