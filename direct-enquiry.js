(() => {
 const form = document.getElementById('direct-enquiry-form');
 if (!form) return;
 const file = form.querySelector('#attachment');
 const checkFile = () => {
  const selected = file.files && file.files[0];
  let message = '';
  if (selected && selected.size > 10000000) message = 'L’allegato supera 10 MB. Riduci il file o contattaci via e-mail.';
  else if (selected && !/\.(pdf|jpe?g|png)$/i.test(selected.name)) message = 'Seleziona un file PDF, JPG o PNG.';
  file.setCustomValidity(message);
 };
 file.addEventListener('change', checkFile);
 form.addEventListener('submit', (event) => {
  checkFile();
  if (!form.reportValidity()) event.preventDefault();
 });
})();
