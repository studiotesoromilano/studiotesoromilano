# Studio TesoroMilano | GitHub + Vercel 完整网站升级包

## 此次含有的内容
- 首页：`index.html`（意大利语入口）与独立中文 `/zh/`、英文 `/en/` 首页
- 中文宣誓翻译综合页：`zh/sworn-translation/index.html`
- 对应意大利语：`it/traduzione-giurata/index.html`
- 对应英语：`en/sworn-translation/index.html`
- 中意英驾照翻译独立页面
- 公司设立、Apostille 三语专业服务页面
- `style.css`、`robots.txt`、`sitemap.xml`
- 顶部小红书、微信、淘宝、闲鱼入口；淘宝和闲鱼 App 提示窗口

## 部署到既有 GitHub 仓库（请先备份）
1. 打开已有 GitHub 仓库，先下载当前仓库 ZIP 作为备份。无需新建仓库或 Vercel 项目。
2. 解压本 ZIP；将**解压后所有文件和三个语言文件夹**放到仓库根目录，不要只上传 ZIP。
3. 覆盖已存在的 `index.html`、`style.css`、`sitemap.xml`、`robots.txt`；如 GitHub 上传页面无法覆盖同名文件，请逐个点开原文件，使用铅笔编辑器替换内容。
4. 保持目录结构，例如 `zh/sworn-translation/index.html`。不要把 `zh` 内文件移到仓库根目录。
5. Commit directly to `main`，提交说明建议：`Update multilingual sworn translation SEO pages`。
6. 到 Vercel > Deployments 等最新部署为 Ready，检查：
   - https://www.studiotesoromilano.com/zh/
   - https://www.studiotesoromilano.com/zh/sworn-translation/
   - https://www.studiotesoromilano.com/zh/driving-licence/
   - https://www.studiotesoromilano.com/sitemap.xml
7. 仅在确认四个网址可以打开后，前往 Google Search Console > Sitemaps 提交完整网站地图 URL，并用 URL Inspection 检查 `/zh/sworn-translation/`，请求收录。

## 重要说明
- 此包基于此前为您制作的完整版。如果您此后自行修改过线上文件，直接覆盖可能丢失新更改；请先备份对比。
- 淘宝/闲鱼分享链接可能被引导至登录页，故设置先提示使用对应 App，并提供复制选项，但无法保证浏览器一定启动 App。
- 联系表单调用用户本地邮件客户端（mailto），不是服务器自动收件。
- 正式网站请补充适用的隐私政策、经营主体与税务信息。
- Google 收录和搜索排名需要时间，部署并不保证立即提升排名。


## 2026-11 LinkedIn 更新
- 负责人 LinkedIn：https://www.linkedin.com/in/studiotesoromilano/
- 所有15个页面顶部增加 LinkedIn · Lea Xu 真实链接。
- 意大利语、中文、英文首页的负责人介绍增加相应语言按钮。
- 首页 ProfessionalService 结构化数据补充负责人资料链接。
- GitHub 原有仓库根目录上传解压后的文件并提交到 main，Vercel 自动部署；请先备份旧版本。
