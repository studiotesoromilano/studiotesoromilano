# 三语在线询价与附件

2026-11-07，基于GitHub main bc42fd2并合并前次交付的Formspree修复。

意大利语/中文/英文首页均通过 https://formspree.io/f/xoeezjkg 提交姓名、邮箱、服务、留言及可选附件；各服务页页脚链接到对应语言首页contact区。保留WhatsApp与全部原服务页面。表单附website_language字段区分来源。

前端规则：最多5文件，总计10,000,000字节，PDF/JPG/PNG/DOC/DOCX。空附件也可提交。客户端限制用于减少误操作，不替代Formspree服务端规则。收到明确成功响应后才清空；错误或超时保留内容。不能将“服务已接收”等同于Gmail已送达。

## 发布前必须确认
Formspree附件功能仅在Personal/Professional/Business套餐提供。此包未购买、升级或读取您的套餐，无法确认已开通。若仍是免费套餐，请在后台开通支持附件的套餐后再推广上传入口。服务商允许在Submissions查看/下载已接受文件，不承诺把文件作为Gmail原始附件发送；邮件中的通知/下载方式由服务商决定。
官方说明：https://help.formspree.io/articles/building-your-form/file-uploads/

确认xoeezjkg的Target Email为studiotesoromilano@gmail.com且已验证，邮件通知与submission storage启用、存储配额足够。可在Workflow对attachment配置服务端文件类型校验（支持的规则以后台为准）。

## 验收
上传完整包并部署后，分别从三语首页提交一个非敏感测试PDF和文字。检查Formspree后台记录、文件可下载及Gmail通知真实到达。仅在这三项通过后视为实际收件完成。不要上传身份证件、法院卷宗或其他敏感材料做测试。

当前执行环境上一次请求被Formspree防护拦截(403)，没有绕过或重试。本次只完成本地检查，未真实上传或证实邮箱收到。

## 检查结果
25页内部链接/锚点/canonical/hreflang/JSON-LD检查通过。三语POST/multipart/字段/脚本检查通过。21项模拟测试涵盖三语无附件、有效附件、类型/大小/数量拒绝、服务错误及网络失败。JavaScript语法与git diff --check通过。未做浏览器移动端实测。
