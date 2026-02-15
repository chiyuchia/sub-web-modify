# Sub-Web-Modify

<div align="center">
  <h3>🚀 全网最美观的订阅转换前端界面</h3>
  <p>基于 Vue.js 开发的现代化订阅转换 Web 前端</p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2018-brightgreen)](https://nodejs.org/)
  [![Vue Version](https://img.shields.io/badge/vue-2.7.16-green)](https://vuejs.org/)
</div>

## 📖 项目简介

Sub-Web-Modify 是基于 [CareyWang/sub-web](https://github.com/CareyWang/sub-web) 项目的增强版本，专为订阅转换服务设计的现代化前端界面。感谢原作者 [youshandefeiyang](https://github.com/youshandefeiyang) 的出色工作，本项目在其基础上进行了进一步优化。

### 🌟 主要特性

- 🎨 **现代化界面设计** - 全新重制的 CSS 样式，更加美观易用
- 🌓 **智能主题切换** - 支持亮色/暗色主题，可自动适应系统主题
- 📱 **响应式设计** - 完美适配桌面端和移动端设备
- 🔗 **多种订阅格式支持** - 支持 Clash、Surge、V2Ray、Quantumult X 等主流客户端
- 🛠 **高级功能** - 节点筛选、重命名、配置定制等高级选项
- 📝 **多行订阅输入** - 支持动态增减订阅链接，每条独立管理
- 🏷️ **Provider 命名** - SubConverter-Extended 后端支持为订阅设置自定义名称

## 🖥️ 界面预览

![效果预览](https://raw.githubusercontent.com/youshandefeiyang/webcdn/main/sub-web-modify.GIF)

## 🚀 快速部署

### 方式一：Cloudflare Pages 部署（推荐）

1. **Fork 本仓库** 到你的 GitHub 账户
2. **修改配置文件**：
   - 编辑 `.env` - 设置后端地址、短链接服务等环境变量
   - 编辑 `src/config.js` - 自定义后端列表和远程配置预设
3. **连接到 Cloudflare Pages**：
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 进入 Pages → 创建项目 → 连接到 Git
   - 选择你 Fork 的仓库
4. **配置构建设置**：
   ```
   框架预设：Vue
   构建命令：npm run build
   构建输出目录：/dist
   ```
5. **部署完成** - 自动部署，每次推送代码都会自动更新

### 方式二：EdgeOne Pages 部署

1. **Fork 本仓库** 到你的 GitHub 账户
2. **修改配置文件**：
   - 编辑 `.env` - 设置后端地址、短链接服务等环境变量
   - 编辑 `src/config.js` - 自定义后端列表和远程配置预设
3. **连接到 EdgeOne Pages**：
   - 登录 [EdgeOne 控制台](https://console.cloud.tencent.com/edgeone)
   - 进入 Pages → 新建项目 → 连接 Git 仓库
   - 选择你 Fork 的仓库
4. **配置构建设置**：
   ```
   框架预设：Vue
   根目录：./
   输出目录：dist
   编译命令：npm run build
   安装命令：npm install
   ```
5. **部署完成** - 自动部署，每次推送代码都会自动更新

## 🔧 配置说明

部署前需要修改以下配置文件：

### 1. .env
设置环境变量：
```env
# 默认后端地址
VUE_APP_SUBCONVERTER_DEFAULT_BACKEND=https://your-backend-url.com

# 默认远程配置
VUE_APP_SUBCONVERTER_REMOTE_CONFIG=https://your-remote-config-url

# 短链接服务
VUE_APP_MYURLS_DEFAULT_BACKEND=https://your-short-url-service.com

# 配置上传后端
VUE_APP_CONFIG_UPLOAD_BACKEND=https://your-config-upload-backend.com

# 社交链接
VUE_APP_PROJECT=https://github.com/your-repo
VUE_APP_BOT_LINK=https://t.me/your-channel
VUE_APP_BILIBILI_LINK=https://space.bilibili.com/your-id
VUE_APP_YOUTUBE_LINK=https://www.youtube.com/@your-channel
```

### 2. src/config.js
自定义后端服务器列表和远程配置预设。支持为后端添加 `extended: true` 标记以启用 Provider 命名功能（仅 SubConverter-Extended 后端支持）。

## 📋 支持的客户端

| 客户端 | 平台 | 状态 |
|--------|------|------|
| Clash | Windows/macOS/Linux | ✅ |
| Surge | iOS/macOS | ✅ |
| Quantumult X | iOS | ✅ |
| V2Ray | 全平台 | ✅ |
| Sing-Box | 全平台 | ✅ |

## 🛠️ 主要功能

- **订阅链接转换** - 支持各种格式的订阅链接相互转换
- **多行订阅管理** - 动态增减订阅链接，每条独立输入和管理
- **Provider 命名** - Extended 后端支持为每条订阅设置自定义名称（仅支持订阅链接，不支持单节点链接）
- **节点筛选** - 通过关键字或正则表达式筛选节点
- **节点重命名** - 批量重命名节点，支持正则替换
- **自定义配置** - 支持上传自定义的远程配置文件
- **短链接生成** - 集成短链接服务，方便分享
- **响应式设计** - 完美适配各种屏幕尺寸

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目！

## 📞 支持与反馈

- 🐛 **Bug 报告**：[Issues](https://github.com/youshandefeiyang/sub-web-modify/issues)
- 💡 **功能建议**：[Issues](https://github.com/youshandefeiyang/sub-web-modify/issues)

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源协议。

## 🙏 致谢

- 特别感谢原作者 [youshandefeiyang](https://github.com/youshandefeiyang) 的杰出贡献
- 感谢 [CareyWang/sub-web](https://github.com/CareyWang/sub-web) 提供的原始项目基础
- 感谢所有贡献者的辛勤付出

