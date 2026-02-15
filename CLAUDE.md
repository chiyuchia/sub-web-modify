# 提交规范

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
