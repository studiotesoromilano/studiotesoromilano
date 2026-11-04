# Studio TesoroMilano｜国际专业客户 SEO + Duomo 地铁站取件升级版

## 升级摘要
- 新增意大利语专业页面：`/it/interpretariato-giuridico-cinese-milano/`、`/it/coordinamento-notarile-societario/`。
- 新增英语专业页面：`/en/legal-interpreting-milan/`、`/en/cross-border-notarial-coordination/`。
- 意大利语首页优先面向公证员、律师、会计师；英文首页优先面向国际律所、企业及跨境顾问；中文保留驾照与企业服务入口。
- 三语首页和三语驾照/宣誓翻译服务页突出了 **Duomo 地铁站出口附近，工作日工作时间可领取已经办理完成的纸质文件**；具体地点和时间以订单确认的信息为准。并非地铁站内设柜台，也不意味着无需提前办理翻译。
- 保留原网站的动态文件交付网络、微信公众号及文章入口、小红书、微信、淘宝、闲鱼、LinkedIn、中文版中国驾照第135条科普与旅游 SEO。
- sitemap.xml 根据实际目录重新生成，包含所有 HTML 页的规范 URL 与相互对应的首页、旅行及新专业页面语言标注；robots.txt 引用 sitemap。

## GitHub / Vercel
1. **先备份**现有 GitHub `main` 分支。
2. 解压后将包内**内容**上传至仓库根目录（不要连同外层文件夹上传）。
3. Commit 到部署分支，等待 Vercel Production Ready。
4. 检查四个新增网址、`/sitemap.xml`、`/robots.txt`。
5. 在 Google Search Console 使用 URL Inspection 的 Live Test，并检查 Sitemap 能否由 Google 抓取。提交 sitemap 不保证 Google 收录或排名。

## 法律/业务范围
- 公证、法律、税务等法定保留业务由相关专业人士承担；工作室承担语言服务、文件准备与跨专业沟通协调。
- 米兰 Duomo 取件针对 **已完成文件**，并限于工作日工作时间；具体地点和时间须按订单确认。
- 无法直接从网站 HTML 判定 Search Console 的“无法抓取”根因；如果继续报错，需检查 Vercel 的 HTTP 状态及 Google 抓取详情。


## 本版文字调整
已将三语网站所有重点取件宣传统一为「米兰 DUOMO 区域取件 / Milan Duomo area collection / ritiro in zona Duomo a Milano」。删除原来“地铁站出口”“出站即取”“地铁站内外柜台”等易误解的表述；具体取件地点及安排以订单确认为准。保留既有三语专业SEO、动态地图及网站结构。


## 2026-11-05：Duomo 区域办公室取件用语升级
中文：米兰市中心 DUOMO 区域办公室｜便捷取件。意大利语：Ufficio in zona Duomo, nel centro di Milano | Comodo ritiro documenti。英语：Office in Milan’s Duomo Area | Convenient Document Pickup。适用于网站中原有的取件展示模块。具体取件地点和时间以订单安排为准。


## 2026-11-05：意大利语首页双中文入口优化
- 左上角品牌标识下方新增中文按钮「意大利宣誓翻译服务入口 ↗」；按钮直接进入 /zh/sworn-translation/。
- 首页主视觉语言入口区新增金色中文按钮「🇨🇳 意大利宣誓翻译服务入口 ↗」，与原意大利语及英语入口并列。
- 手机端也可直接看到这两个中文入口，避免华人客户进入意大利语首页后找不到中文服务。
- 不改动网站路由、其他三语页面、动态地图、SEO 和社交渠道。
