document.getElementById('contactForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const notice = document.querySelector('.alert-negative');
  notice.textContent = document.documentElement.lang === 'en'
    ? 'Registration is unavailable in demo mode. Use license plate AB123CD and password parking123 to log in.'
    : 'La registrazione non è attiva in modalità demo. Usa la targa AB123CD e la password parking123 per accedere.';
  notice.style.display = 'block';
});
