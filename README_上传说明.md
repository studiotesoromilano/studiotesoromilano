# Studio TesoroMilano · 海外华人意大利自驾与五类驾照服务升级版

本文件包保留现有三语官网、动态意大利取件网络 SVG、LinkedIn、小红书、淘宝/闲鱼 App 提示、Apostille 与企业服务，并新增 3 个独立旅行指南页面。

## 新增网址
- `/zh/italy-road-trip/`：中文旅行攻略，面向海外华人与中国、加拿大、美国加州、新加坡、台湾驾照
- `/en/italy-road-trip/`：英文旅行与驾照文件准备
- `/it/viaggio-in-auto-italia/`：意大利语旅行与外国驾照翻译

已有三语首页及三语驾照服务页均新增指向这些页面的内链；Sitemap 增加这 3 条 URL。保留 `delivery-network.svg` 的动画，未改动未证实城市的服务状态。

## GitHub / Vercel 更新方式
1. 在 GitHub 备份目前 main 分支（或保存旧文件）。
2. 下载 ZIP 并解压，上传其中**所有内容**到仓库根目录，而不是 ZIP 本身；覆盖同名文件。
3. 必须保留 `delivery-network.svg`、`style.css`、`index.html` 同级，以及 `zh/`、`en/`、`it/` 目录。
4. Commit directly to `main`，等待 Vercel Production Deployments 显示 Ready。
5. 手动打开新增三个旅行页、中文驾照页与动态地图，检查手机端、语言链接及淘宝/闲鱼弹窗。
6. 在 Google Search Console 提交 `/sitemap.xml`，分别检查和请求抓取新旅行页。索引/排名不会即时或保证。

## 重要法律区分
意大利道路交通法第135条在特定条件下允许有效非欧盟／欧洲经济区驾照随附 IDP 或意大利语官方翻译；驾驶资格、居留期限和租车公司接受条件须另核实。加拿大政府明确认可官方宣誓翻译替代 IDP 的路径；新加坡意大利使馆对使馆认证翻译有专门说明；台湾与美国加州依文件和实际使用场景逐案确认。请勿将“译文办理”宣传成“保证租车成功”或“全欧洲通用”。

## 核心官方参考
- https://aci.gov.it/codice-della-strada/art-135/
- https://mit.gov.it/traduzione-ufficiale-della-patente-di-guida
- https://www.international.gc.ca/country-pays/italy-italie/drivers_licenses-permis_de_conduire.aspx?lang=eng
- https://ambsingapore.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-italiano/autoveicoli-e-patenti-di-guida/
