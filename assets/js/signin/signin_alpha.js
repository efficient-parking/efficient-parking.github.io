const DEMO_PLATE = 'AB123CD';
const DEMO_PASSWORD = 'parking123';

document.getElementById('contactForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const plate = document.getElementById('targa').value.trim().toUpperCase();
  const password = document.getElementById('password').value;
  const plateError = document.querySelector('.alert-targa');
  const passwordError = document.querySelector('.alert-password');

  plateError.style.display = 'none';
  passwordError.style.display = 'none';

  if (plate !== DEMO_PLATE) {
    plateError.style.display = 'block';
    return;
  }
  if (password !== DEMO_PASSWORD) {
    passwordError.style.display = 'block';
    return;
  }

  sessionStorage.setItem('epDemoPlate', DEMO_PLATE);
  window.location.href = 'account.html';
});
