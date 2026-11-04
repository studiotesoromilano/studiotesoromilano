# Studio TesoroMilano — 首页服务入口与页脚正式化升级（2026-11-05）

本包基于此前完整的“三语自驾旅行 / 五类驾照 / 动态交付网络”版本；包含全部网站页面、`style.css`、`delivery-network.svg`、`robots.txt`、`sitemap.xml`。

## 本次改动

- 意大利语和英语首页顶部的中文服务按钮改为 **“意大利宣誓翻译服务入口”**，并正确链接 `/zh/sworn-translation/`。中文首页保留宣誓翻译综合入口，另将驾照专项按钮改为 **“中国驾照宣誓翻译”**。
- **所有页面**页脚统一改为简洁的 Studio TesoroMilano 品牌、Milano、邮件、隐私政策与 LinkedIn 入口，不再显示原有测试占位提示。
- 新增真实可打开的三语隐私说明页：`/it/privacy/`、`/zh/privacy/`、`/en/privacy/`。这些页面描述了当前 mailto 咨询表单、Vercel 托管和 Google Fonts 等情况。它们是待您核对经营及数据处理实际情况的初步文本，不应视为已获得个案法律合规审查。

## 上线前务必处理的事项（重要）

1. **Partita IVA**：如您以意大利增值税纳税主体经营，适用规定要求在网站首页展示 Partita IVA（DPR 633/1972 第35条第1款）。因为您未提供号码，我没有猜测或虚构，更没有声称已完成此项义务。请在发布前将真实 Partita IVA 添加在三个首页页脚，亦可加到全站页脚。
2. 核对隐私说明中的经营主体（个人执业/公司）、联系方式、使用的平台、实际数据保留政策；若之后接入 analytics、广告像素或在线收件表单，请重新审查 Cookie/隐私与同意要求。
3. 原有咨询表单使用 `mailto:` 唤起用户邮箱，不会直接将表单提交到服务器；若改为托管表单要同步更新隐私说明。

## GitHub 上传

1. 备份现有仓库，解压本包。
2. 上传根目录和 `zh/`、`en/`、`it/` 完整文件夹，确保新增 `it/privacy/index.html`、`zh/privacy/index.html`、`en/privacy/index.html` 也存在。
3. GitHub 提交到 `main`，Vercel Deployments 等待 `Ready`。
4. 查看 `https://www.studiotesoromilano.com/` 首页按钮与页脚，再查看 `/zh/`、`/en/` 和三个 `/privacy/` 页面。
5. 本次新建的隐私页标为 `noindex`，无需把它们加入 Sitemap，其他已收录地址不变。


## 本版新增：微信公众号
- 官网顶栏在客服微信后新增 **微信公众号 tesoromilano**，点击复制账号，在微信中搜索关注。
- **客服微信 studiotesoromilano** 保留且不混淆。
- 中文／意大利语／英文三个首页的联系区也分别列出公众号账号。
- 尚未提供经过确认的公众号网页主页地址，故不做虚假的直达链接。

## 本次新增：微信公众号文章直达
- 公众号搜索号：`tesoromilano`（原有点击复制功能保留）
- 新增“公众号文章 ↗”链接：https://mp.weixin.qq.com/s/mE45X-Ix-wkWT_wCDHjWgA
- 注意：这是单篇文章地址，并非公众号主页；网页标题与文章内容尚未独立核验。
- 链接加入三语首页和所有带官方平台栏的服务页，未修改原有链接结构与 SEO 地址。
