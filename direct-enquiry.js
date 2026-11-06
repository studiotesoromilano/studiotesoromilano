(() => {
 const form = document.getElementById('direct-enquiry-form'); if (!form) return;
 const messages = {"it": {"sending": "Invio in corso…", "success": "Richiesta acquisita dal servizio di invio. Grazie, ti risponderemo al recapito indicato.", "error": "Invio non confermato. Controlla i dati o prosegui sulla pagina di verifica. Se sono presenti allegati, puoi rimuoverli e inviare solo il messaggio.", "network": "Connessione interrotta o tempo scaduto. Non possiamo confermare l’invio. I dati e i file selezionati restano disponibili: verifica prima di riprovare.", "count": "Seleziona al massimo 5 file.", "size": "Gli allegati superano 10 MB complessivi.", "type": "Sono ammessi solo PDF, JPG, PNG, DOC e DOCX."}, "en": {"sending": "Sending…", "success": "The submission service has accepted your enquiry. We will reply using the contact details provided.", "error": "Submission not confirmed. Check the fields or continue on the verification page. If files are attached, you can remove them and send only the message.", "network": "Connection interrupted or timed out. Submission is not confirmed. Your details and selected files are retained; check before trying again.", "count": "Select no more than 5 files.", "size": "Attachments exceed 10 MB in total.", "type": "Only PDF, JPG, PNG, DOC and DOCX files are accepted."}, "zh": {"sending": "正在提交…", "success": "提交服务已接收您的咨询，我们会通过您填写的联系方式回复。", "error": "暂未确认提交。请检查信息或前往验证页面；如有附件，可移除附件后仅提交留言。", "network": "连接中断或响应超时，暂不能确认提交。已保留填写内容和所选文件，请核实后再重试。", "count": "最多选择5个文件。", "size": "附件总大小不能超过10 MB。", "type": "仅支持 PDF、JPG、PNG、DOC 和 DOCX 文件。"}};
 const t = messages[form.dataset.language] || messages.it;
 const button = form.querySelector('button[type="submit"]'), label = button.querySelector('span');
 const status = document.getElementById('submission-status'), help = document.getElementById('submission-help');
 const attachment = form.querySelector('#attachment'); let sending = false; const idle = label.textContent;
 const validateFiles = () => {
  const files = Array.from(attachment.files || []); let error = '';
  if (files.length > 5) error = t.count;
  else if (files.reduce((sum, file) => sum + file.size, 0) > 10000000) error = t.size;
  else if (files.some(file => !/\.(pdf|jpe?g|png|docx?)$/i.test(file.name))) error = t.type;
  attachment.setCustomValidity(error);
 };
 attachment.addEventListener('change', validateFiles);
 document.getElementById('submit-native').addEventListener('click', () => {
  validateFiles(); if (sending || !form.reportValidity()) return;
  HTMLFormElement.prototype.submit.call(form);
 });
 form.addEventListener('submit', async event => {
  event.preventDefault(); validateFiles(); if (sending || !form.reportValidity()) return;
  sending = true; button.disabled = true; label.textContent = t.sending; status.textContent = t.sending;
  form.setAttribute('aria-busy', 'true'); help.hidden = true;
  const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), 30000);
  try {
   const body = new FormData(form);
   if (!attachment.files.length) body.delete('attachment');
   const response = await fetch(form.action, {method:'POST',body,headers:{Accept:'application/json'},signal:controller.signal});
   const data = await response.json().catch(() => null);
   if (response.ok && data && data.ok === true) {status.textContent = t.success; form.reset(); attachment.setCustomValidity('');}
   else {status.textContent = t.error; help.hidden = false;}
  } catch {status.textContent = t.network; help.hidden = false;}
  finally {clearTimeout(timer);sending = false;button.disabled = false;label.textContent = idle;form.removeAttribute('aria-busy');status.focus();}
 });
})();