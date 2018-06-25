# vuempa

> A Vue.js project
>如果你调研服务器端渲染(SSR)只是用来改善少数营销页面（例如 /, /about, /contact 等）的 SEO，那么你可能需要预渲染。无需使用 web 服务器实时动态编译 HTML，而是使用预渲染方式，在构建时(build time)简单地生成针对特定路由的静态 HTML 文件。优点是设置预渲染更简单，并可以将你的前端作为一个完全静态的站点。
>如果你使用 webpack，你可以使用 [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin) 轻松地添加预渲染。它已经被 Vue 应用程序广泛测试 - 事实上，作者是 Vue 核心团队的成员。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


---
# 从无到有

---
## 安装vue-cli 脚手架

- npm install vue-cli -g
- vue init webpack
    - ? Generate project in current directory? Yes
    - ? Project name jia-vue
    - ? Project description A Vue.js project
    - ? Author JiaLe1 <948962131@qq.com>
    - ? Vue build standalone
    - ? Install vue-router? Yes
    - ? Use ESLint to lint your code? No
    - ? Set up unit tests No
    - ? Setup e2e tests with Nightwatch? No
    - ? Should we run `npm install` for you after the project has been created? (recom
        mended) npm


---
## 调整 `/src` 下的目录结构

- 在 `/src` 下新建页面目录 `pages` ，用来存放各个页面


---
## 可配置 build 输出多页面

- npm install prerender-spa-plugin --save
- 修改 `/build/webpack.prod.conf.js` 文件，引入插件 [`prerender-spa-plugin`](https://www.npmjs.com/package/prerender-spa-plugin)，并配置路由（与 vue-router 配置的路由 `path` 保持一直）

    ``` javascript
    ...
    const PrerenderSpaPlugin = require('prerender-spa-plugin')
    ...
    plugins: [
        ...
        new PrerenderSpaPlugin(
        // build 目录
        path.join(__dirname, '../dist'),
        // 配置需要渲染的页面
        ['/demo', '/test']
        )
    ]
    ```
