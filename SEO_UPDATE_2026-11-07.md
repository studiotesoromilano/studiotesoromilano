# 意大利语搜索需求优化 · 2026-11-07

基于 GitHub main 提交 a0de8b9，未上线。解压后将全部文件上传仓库根目录，覆盖同名文件。

## 改动
- 首页标题、H1、摘要强调 traduzione giurata cinese a Milano，保留 CTU 1354、司法部查询、法学博士、两组语言资质和律师／公证员服务。
- 保留原网址 /it/traduzione-giurata/，完善文件、费用构成、时间、交付、FAQ和页内导航；不虚构固定价格、客户评价或排名保证。
- 加强首页到服务页的链接；服务页结构化数据区分服务和工作室，加入面包屑。
- 意大利语内页清除残留“在线提交附件”提示，保留邮件咨询和 WhatsApp。
- 中文和英文文件与本次基线逐字节一致。保留全部25个页面、三语切换、品牌口号及中文入口。

## 检查
HTML结构、唯一标题/H1、重复ID、内部链接及锚点、canonical、双向hreflang、JSON-LD、JS语法检查通过。sitemap含22个可收录页面；3个隐私页保留原有noindex，不列入sitemap。robots允许抓取。
浏览器预览确认首页和服务页可打开、服务链接可跳转，并检查桌面显示。手机响应式样式保留，新增导航可换行；本次未完成真实手机视口测试。
线上首页和服务页HTTP 200；未访问Search Console，不能确认Google实际收录状态、选定canonical或未排名原因。

## 上传后
1. 等部署成功，确认首页显示新标题。
2. 在Search Console“网址检查”分别检查首页及 /it/traduzione-giurata/，核对Google选定的canonical，并请求编入索引。
3. 检查 https://www.studiotesoromilano.com/sitemap.xml 提交状态。
4. 在效果报告按页面、查询观察展示与点击：traduzione giurata cinese、traduzione giurata cinese italiano、traduzione giurata cinese Milano、CTU cinese Milano、traduzione documenti cinesi。这些是需求词分组，并非搜索量测量。
5. 以数周趋势评估，避免每天改标题或网址。收录不等于特定关键词排名，不能保证立即进入前列。

## 参考
https://www.traduzionecinese.com/
https://www.traduzionecinese.com/services/
参考文件分类、身份展示和咨询路径，不复制其介绍、客户或资历。
https://developers.google.com/search/docs/fundamentals/seo-starter-guide
https://tribunale-milano.giustizia.it/it/traduzioni_e_perizie.page
