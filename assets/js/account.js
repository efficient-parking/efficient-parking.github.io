const plate = sessionStorage.getItem('epDemoPlate');

if (plate !== 'AB123CD') {
  window.location.replace('login.html');
} else {
  document.getElementById('targa').textContent = plate;
  document.getElementById('parcheggio').textContent = 'Nessun parcheggio attivo';
  document.getElementById('entrata').textContent = '—';
  document.getElementById('uscita').textContent = '—';
  document.getElementById('durata').textContent = '—';
  document.getElementById('costo').textContent = '—';
}

document.getElementById('logout')?.addEventListener('click', () => {
  sessionStorage.removeItem('epDemoPlate');
});
