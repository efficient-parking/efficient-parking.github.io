document.getElementById('recoveryForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('recoveryNotice').hidden = false;
});
