(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{173:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("No UI 组件库系统 「 弹窗组件 」。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),s("p",[t._v("因为组件只有最基础的交互样式，所以在实际使用需要根据设计需求进行二次样式封装。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("nu-dialog 这边只是约定了 几个 CSS Hooks 的方案，所以对于使用方来说，可以使用任意js框架（原生js，jquery, react, vue ...）去切换这些API的属性即可。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("可以看到我们这里的弹窗组件只做了特别少的事情，甚至看起来什么都没有做。")]),t._v(" "),s("p",[t._v("而这也正是我们 nu-system 区别于其它 UI 组件库的地方。")]),t._v(" "),s("p",[t._v("我们更希望提供的是一个规范，这样才能在不同的项目中定制属于自己的 UI 。")]),t._v(" "),t._m(22),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://yued-fe.github.io/nu-react/packages/button",target:"_blank",rel:"noopener noreferrer"}},[t._v("nu-dialog-react"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://yued-fe.github.io/nu-vue/packages/dialog",target:"_blank",rel:"noopener noreferrer"}},[t._v("nu-dialog-vue"),s("OutboundLink")],1)])]),t._v(" "),t._m(23),t._v(" "),t._m(24)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"nu-dialog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nu-dialog","aria-hidden":"true"}},[this._v("#")]),this._v(" nu-dialog")])},function(){var t=this.$createElement,a=this._self._c||t;return a("iframe",{staticStyle:{width:"100%"},attrs:{height:"600",scrolling:"no",title:"nu-dialog-js",src:"//codepen.io/ziven27/embed/joKGvJ/?height=265&theme-id=dark&default-tab=html,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/ziven27/pen/joKGvJ/"}},[this._v("nu-dialog-js")]),this._v(" by ziven27\n  ("),a("a",{attrs:{href:"https://codepen.io/ziven27"}},[this._v("@ziven27")]),this._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"怎么用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么用","aria-hidden":"true"}},[this._v("#")]),this._v(" 怎么用?")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("$ npm i @y-fe/nu-dialog\n$ yarn add @y-fe/nu-dialog\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("@y-fe/nu-dialog/css\n├── core.css        // 核心代码\n└── position\n    ├── top.css     // 居上显示\n    ├── right.css   // 居右显示\n    ├── bottom.css  // 居底显示\n    ├── left.css    // 居左显示\n    └── middle.css  // 居中显示\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"子组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 子组件")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("选择器")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(".nu_dialog_wrap")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("整个弹窗主容器")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(".nu_dialog_mask")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("弹窗遮罩")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(".nu_dialog")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("弹窗主体")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(".nu_dialog_close")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("弹窗关闭按钮")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("和其它 UI 库的弹窗组件不同的是，在 Nu-system 中，我们并没有将 "),s("code",[t._v("title")]),t._v(","),s("code",[t._v("header")]),t._v(","),s("code",[t._v("body")]),t._v(","),s("code",[t._v("footer")]),t._v(" 列为弹窗的范畴。\n在我们看来这几个组件的覆盖面都太小了。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-HTML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nu_dialog_wrap _middle _open"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nu_dialog_mask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nu_dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nu_dialog_close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token entity",title:"&times;"}},[t._v("&times;")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这是放弹窗内容的地方 --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("为了无障碍可访问性，这边推荐使用 "),a("code",[this._v("label")]),this._v(" 标签作为 "),a("code",[this._v("mask")]),this._v(" 和 "),a("code",[this._v("close")]),this._v(" 的标签。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("选择器")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(".nu_dialog_wrap._open .nu_dialog")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("控制弹窗的显示隐藏")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(".nu_dialog_wrap._top .nu_dialog")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("弹窗居上")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(".nu_dialog_wrap._right .nu_dialog")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("弹窗居右")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(".nu_dialog_wrap._bottom .nu_dialog")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("弹窗居下")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(".nu_dialog_wrap._left .nu_dialog")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("弹窗居左")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(".nu_dialog_wrap._middle .nu_dialog")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("弹窗居中")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("body.nu_dialog_open")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("用于控制弹窗底层滚动条")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("strong",[t._v("注")]),t._v(": 为了防止底层滚动条滚动，可以在弹窗显示的时候在滚动容器上添加 "),s("code",[t._v("body")]),t._v(" | "),s("code",[t._v("html")]),t._v("  上添加 "),s("code",[t._v(".nu_dialog_open")]),t._v("。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"如何添加动效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何添加动效","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何添加动效?")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".nu_dialog_wrap._middle .nu_dialog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("360deg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate3D")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".nu_dialog_wrap._middle._open .nu_dialog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate3D")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("iframe",{staticStyle:{width:"100%"},attrs:{height:"600",scrolling:"no",title:"nu-dialog-ani",src:"//codepen.io/ziven27/embed/KLemVx/?height=265&theme-id=dark&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/ziven27/pen/KLemVx/"}},[this._v("nu-dialog-ani")]),this._v(" by ziven27\n  ("),a("a",{attrs:{href:"https://codepen.io/ziven27"}},[this._v("@ziven27")]),this._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"someting-awesome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#someting-awesome","aria-hidden":"true"}},[this._v("#")]),this._v(" Someting awesome")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-HTML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn-show-dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialogSwitch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("显示弹窗"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialogSwitch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nu_dialog_switch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nu_dialog_wrap _middle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialogMiddleCssSwitch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nu_dialog_mask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nu_dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialogMiddleCssSwitch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nu_dialog_close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token entity",title:"&times;"}},[t._v("&times;")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这是放弹窗内容的地方 --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("iframe",{staticStyle:{width:"100%"},attrs:{height:"600",scrolling:"no",title:"nu-dialog-css",src:"//codepen.io/ziven27/embed/zQaZay/?height=265&theme-id=dark&default-tab=html,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/ziven27/pen/zQaZay/"}},[this._v("nu-dialog-css")]),this._v(" by ziven27\n  ("),a("a",{attrs:{href:"https://codepen.io/ziven27"}},[this._v("@ziven27")]),this._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("nu-dialog Api 因为简单，你甚至可以通过 "),a("code",[this._v(":checked")]),this._v(" 属性实现纯 CSS 控制弹窗的显示和隐藏。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("注")]),this._v(": 当然这里只是用这个来举例说明 nu-dialog 的拓展性，并不推荐在实际开发环境采用这种方式。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"do-less-but-can-be-more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-less-but-can-be-more","aria-hidden":"true"}},[this._v("#")]),this._v(" Do less but can be more")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"logic-only"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logic-only","aria-hidden":"true"}},[this._v("#")]),this._v(" Logic Only")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"npm-cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-cdn","aria-hidden":"true"}},[this._v("#")]),this._v(" Npm CDN")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-HTML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/@y-fe/nu-dialog/css/core.min.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/@y-fe/nu-dialog/css/position/top.min.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/@y-fe/nu-dialog/css/position/right.min.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/@y-fe/nu-dialog/css/position/bottom.min.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/@y-fe/nu-dialog/css/position/left.min.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/@y-fe/nu-dialog/css/position/middle.min.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);a.default=e.exports}}]);