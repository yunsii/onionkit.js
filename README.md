# Onionkit.js

> JS/TS SDK for [CODING OPEN API](https://coding.net/help/openapi)

[![NPM version](https://img.shields.io/npm/v/onionkit?color=a1b858&label=)](https://www.npmjs.com/package/onionkit)

## 开发环境

### 环境变量

新增环境变量配置文件 `.env.local`，另外 token 尽量赋予尽可能多的权限方便测试用例调试。

```
VITE_ONIONKIT_TOKEN='your-token'
VITE_DEPOT_PATH='/your-team-name/your-project-name/your-depot-name'
```

## 打包发布

- `npm run build`
- `npx changeset`
- `npx changeset version`
- `git commit`
- `npx changeset publish`
- `git push --follow-tags`

> [`changeset` 预发布文档](https://github.com/changesets/changesets/blob/main/docs/prereleases.md)

## License

[MIT](./LICENSE) License © 2022 [Yuns](https://github.com/yunsii)
