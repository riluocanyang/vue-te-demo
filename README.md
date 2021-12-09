# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.


## 关联git
### …or create a new repository on the command line
echo "# vue-te-demo" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/riluocanyang/vue-te-demo.git
git push -u origin main
### …or push an existing repository from the command line
git remote add origin https://github.com/riluocanyang/vue-te-demo.git
git branch -M main
git push -u origin main

### 我的操作方法
git remote add origin https://github.com/riluocanyang/vue-te-demo.git
git add .
git commit -m 'feat: first commit'
git push -u origin master

## Install and use
### Install
#### pnpm
pnpm create vite vue-ts-demo（项目名称） -- --template vue-ts
cd vue-ts-demo
yarn install
yaran serve 

npm/pnpm  install
npm run dev

## Commit 规范化
### 规范 commit 命令行工具 – commitizen
yarn add  commitizen -D
pnpm install commitizen --save-dev

### ps：不同源造成的bug 
#### To recreate the modules directory using the new settings, run "pnpm install".
yarn add commitizen -g

pnpm install -g 
pnpm install -g commitizen
清除缓存：pnpm store prune

### 通过以下命令来初始化项目以使用cz-conventional-changelog适配器（每个项目和构建过程都有不同的要求，因此commitizen通过适配器的方式，来保持Commitizen的扩展性）：
commitizen init cz-conventional-changelog --save-dev --save-exact  --force(如果之前已经安装过)
该命令作用：
安装cz-conventional-changelog适配器npm模块
将其保存到package.json的依赖项或devDependencies
将config.commitizen配置添加到package.json的根目录，该配置告诉commitizen，当我们尝试提交此仓库时，我们实际上希望使用哪个适配器

我们可以通过执行git cz命令，来提交 git commit：

### 强制执行commit规范 - commitlint + husky
yarn add @commitlint/config-conventional @commitlint/cli -D
pnpm add @commitlint/config-conventional @commitlint/cli --save-dev
commitlint.config.js
{  
  "commitlint": {
    "extends": ["@commitlint/config-conventional"]
  }
}

yarn add husky -D
pnpm install husky --save-dev
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged", // 校验代码规范
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS" // 校验commit message规范
    }
  }
}
这段配置告诉了git hooks，当我们在当前项目中执行 git commit -m '测试提交' 时将触发commit-msg事件钩子并通知husky，从而执行 commitlint -E HUSKY_GIT_PARAMS命令，也就是我们刚开始安装的./node_modules/.bin/commitlint，它将读取commitlint.config.js配置规则并对我们刚刚提交的测试提交这串文字进行校验，若校验不通过，则在终端输出错误，commit终止。

### 自动生成 CHANGELOG – conventional-changelog-cli

yarn add conventional-changelog-cli -D
yarn add conventional-changelog-cli -g
pnpm install -g conventional-changelog-cli

过执行以下命令，则可以生成 CHANGELOG.md 文件：
conventional-changelog -p angular -i CHANGELOG.md -s

我们也可以将该命令配置到scripts中，就可以通过执行npm run changelog命令来生成 CHANGELOG 了:
{
  "scripts": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"
  }
}




## 代码约束
### eslint 安装
yarn add eslint -D
### eslint 插件安装
yarn add eslint-plugin-vue -D

yarn add @typescript-eslint/eslint-plugin -D

yarn add eslint-plugin-prettier -D

###  typescript parser
yarn add @typescript-eslint/parser -D

### 新建  .eslintrc.js, .eslintignore

### prettier 安装(更漂亮的)
yarn add prettier -D

### prettier 插件安装
yarn add eslint-plugin-prettier -D

eslint-plugin-prettier插件会调用prettier对你的代码风格进行检查，其原理是先使用prettier对你的代码进行格式化，然后与格式化之前的代码进行对比，如果出现了不一致，这个地方就会被prettier进行标记。
我们需要在rules中添加，"prettier/prettier": "error"，表示被prettier标记的地方抛出错误信息。
//.eslintrc.js
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}

### 解决 eslint 和 prettier 冲突
解决 ESLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效
#### 安装插件 eslint-config-prettier
yarn add eslint-config-prettier -D

通过使用eslint-config-prettier配置，能够关闭一些不必要的或者是与prettier冲突的lint选项。这样我们就不会看到一些error同时出现两次。使用的时候需要确保，这个配置在extends的最后一项。
//.eslintrc.js
{
  extends: [
    'standard', //使用standard做代码规范
    "prettier",
  ],
}

### 命令行配置
package.json 配置:
{
  "script": {
    "lint": "eslint src --fix --ext .ts,.tsx,.vue,.js,.jsx",
    "prettier": "prettier --write ."
  }
}

### 安装 lint-staged
yarn add lint-staged -D

## less 
yarn add less -D

vite.config.js 
css:{
  preprocessorOptions:{
    less:{
      additionalData:'@import "@/assets/style/mian.less";',
      javascriptEnabled: true,
    }
  }
},
全局样式文件全局注入到项目中, 不需要任何引入可以直接使用全局less定义的变量

## 安装支持vue3语法的 vue-router
yarn add vue-router@next





