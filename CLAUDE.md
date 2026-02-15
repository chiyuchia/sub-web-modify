# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

订阅转换前端工具，基于 [CareyWang/sub-web](https://github.com/CareyWang/sub-web) 的增强修改版。支持 Clash、Surge、V2Ray、Quantumult X、Sing-Box 等多客户端订阅转换，提供暗黑/亮色主题、短链接生成、自定义配置上传等功能。

## 开发命令

```bash
npm run serve   # 启动开发服务器
npm run build   # 生产环境构建
```

无 lint、test 脚本。无 ESLint 配置。

## 技术栈

- Vue 2.7 + Vue Router 3（history 模式，单路由）
- Element UI 2.15（中文 locale，size: small）
- Axios（HTTP 请求）
- Webpack 5 + Vue CLI 5
- SCSS（主题样式）
- SVG Sprite Loader（图标系统，`src/icons/svg/`）

## 架构要点

这是一个单页单视图应用，无 Vuex/Pinia 状态管理，所有状态在组件内管理。

- `src/views/Subconverter.vue` — 整个应用 UI（~1300 行），包含表单、URL 生成、短链接、主题切换、配置上传等全部逻辑
- `src/config.js` — 数据核心：后端服务器列表、远程规则配置预设（~445 行）
- `src/utils.js` — 工具函数（默认后端信息获取、HTML 响应检测等）
- `src/plugins/` — 全局 Vue 插件注册（axios、clipboard、base64、设备检测、Element UI、particles）
- `src/main.js` — 入口文件，通过 `require()` 注册所有插件，导入 CSS 主题和图标

## 主题系统

通过切换 `<body>` 的 CSS class（`light-mode` / `dark-mode`）实现，对应样式文件：
- `src/assets/css/light.min.css`
- `src/assets/css/dark.min.css`

支持 localStorage 持久化和系统偏好检测。

## 环境变量

配置在 `.env` 文件中（已提交到仓库），`VUE_APP_` 前缀：
- `VUE_APP_SUBCONVERTER_DEFAULT_BACKEND` — 默认订阅转换后端地址
- `VUE_APP_SUBCONVERTER_REMOTE_CONFIG` — 默认远程配置 URL
- `VUE_APP_MYURLS_DEFAULT_BACKEND` — 短链接服务后端
- `VUE_APP_CONFIG_UPLOAD_BACKEND` — 配置上传 API 后端
- `VUE_APP_PROJECT` / `VUE_APP_BOT_LINK` / `VUE_APP_BILIBILI_LINK` / `VUE_APP_YOUTUBE_LINK` — 社交链接

## 部署

Dockerfile 采用两阶段构建：`node:18-alpine` 构建 + `nginx:1.24-alpine` 部署 `/dist`。

## 提交规范

使用约定式提交（Conventional Commits），格式：

```
<type>(<scope>): <description>
```

type 类型：
- feat: 新功能
- fix: 修复 bug
- refactor: 重构（不涉及功能变更或 bug 修复）
- style: 样式调整（CSS、UI 相关）
- docs: 文档变更
- chore: 构建、依赖、配置等杂项
- perf: 性能优化
- test: 测试相关

scope 可选，表示影响范围，如 `ui`、`config`、`backend` 等。

description 使用中文，简洁描述改动内容。

示例：
- `feat(ui): 新增暗黑模式切换按钮`
- `fix(config): 修复远程配置链接失效问题`
- `refactor: 抽取公共工具函数到 utils.js`
