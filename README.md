# Tugu Jogja Heritage

一个面向游客的 **Astro + Tailwind CSS + TypeScript** 三语单页网站。默认语言为印尼语，另有完整英语页面 `/en/` 与中文页面 `/zh/`；页面内容按语言路由分离，包含本地化语言切换、`hreflang`、`TouristAttraction` / `LocalBusiness` 和 `FAQPage` JSON-LD。

## 技术与验证

| 项目 | 锁定版本 / 状态 |
| --- | --- |
| Astro | 7.2.2 |
| Tailwind CSS | 4.3.3 |
| TypeScript | 6.0.3（位于 `@astrojs/check` 的官方支持范围） |
| 包管理器 | pnpm 10.15.1 |
| Node.js | 22.13.0（`.node-version` 与 `engines` 已固定） |
| 部署目标 | Cloudflare Workers 静态资源模式 |
| 干净环境验证 | `CI=1 corepack pnpm install --frozen-lockfile`、`pnpm check`、`pnpm build` 已通过 |

## 本地开发与构建

```bash
corepack pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
```

## Cloudflare Workers 部署

本项目使用静态构建，并通过 Wrangler 将 `dist/` 作为 Workers 静态资源部署：

```bash
pnpm deploy
```

请先在 Cloudflare 登录状态下运行部署命令。项目不会自动发布。

## 域名与 sitemap 配置

唯一的站点 URL 配置入口是 `astro.config.mjs` 中的 `PUBLIC_SITE_URL` 环境变量。未配置时，构建仍会正常完成；canonical 与 Open Graph 绝对 URL 会优雅降级，且 `@astrojs/sitemap` 不会生成站点地图。确定域名后仅需重新构建：

```bash
PUBLIC_SITE_URL=https://your-domain.id pnpm build
```

此时 canonical、Open Graph、JSON-LD 站点 URL 与 sitemap 均从同一 `site` 配置派生；项目不包含占位域名或编造的 `lastmod`。

## 图片与资料来源

网站使用 Wikimedia Commons 中由 **CEphoto, Uwe Aranas** 拍摄的真实 Tugu Yogyakarta 图片，并在页面中提供相邻署名；授权为 **CC BY-SA 3.0**。原创标志与纹样视觉用于补充版面，不替代地点摄影。网页内的历史概要参考日惹省文化遗产系统与 Kraton Yogyakarta 的公开资料。

| 用途 | 来源 |
| --- | --- |
| Tugu 真实照片 | [Wikimedia Commons — Tugu Yogyakarta 01](https://commons.wikimedia.org/wiki/File:Yogyakarta_Indonesia_Tugu-Yogyakarta-01.jpg)；[02](https://commons.wikimedia.org/wiki/File:Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg) |
| 历史与文化背景 | [Jogja Cagar — Tugu Pal Putih](https://jogjacagar.jogjaprov.go.id/detail/645/displayrecords-i-nama-warisan)；[Kraton Yogyakarta — Tugu Golong Gilig](https://www.kratonjogja.id/tata-rakiting/11-tugu-golong-gilig-simbol-persatuan-raja-dan-rakyat/) |

## 内容说明

“费用”“停车”“最佳游览时段”等信息均以开放式公共地标的实用提示呈现，不将临时交通情况或可能变化的商业信息写成固定承诺。页面 footer 已明确声明该站点为非官方独立信息站点。
