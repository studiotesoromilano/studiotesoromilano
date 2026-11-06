# 联系功能检查

基准main 62e1b13。
25个HTML页面保留。内部链接/锚点、canonical、hreflang、JSON-LD及唯一标题检查通过；全部页面WhatsApp链接号码正确。原交互脚本保持不变，旧邮件表单脚本因新表单ID不同而不再拦截首页原生POST。
新增脚本语法检查通过；验证正常PDF放行、超限文件和不支持后缀拦截、无附件允许提交。收件端点、POST、multipart、字段name、回复邮箱及默认防垃圾配置检查通过。
本次未进行浏览器移动端检查或真实邮件到件验证；激活和到件测试步骤见ACTIVATE_CONTACT_FORM.md。
ZIP逐文件校验通过。
