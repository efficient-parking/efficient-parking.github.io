(() => {
  const translations = {
    'Menu': 'Menu', 'Informazioni': 'About', 'Scarica ora': 'Download', 'Supporto': 'Support', 'Accedi': 'Log in',
    'Parcheggiare, con semplicità': 'Parking, made simple', 'Tutto quello che ti serve': 'Everything you need',
    'Design Semplice': 'Simple design', 'Abbiamo creato un design semplice che ti permetta di completare le operazioni di pagamento velocemente.': 'We created a simple design so you can complete payments quickly.',
    'Facile da trovare': 'Easy to find', "Dove ho lasciato l'automobile? Non preoccuparti, ritrova il parcheggio attraverso l'applicazione.": 'Where did I leave my car? Find your parking spot again in the app.',
    'Pagamento PayPal': 'PayPal payments', 'Abbiamo integrato il circuito di pagamento online PayPal, salta la coda alla cassa con la nostra applicazione.': 'Pay online with PayPal and skip the queue at the payment desk.',
    'I tuoi dati rimangono con noi.': 'Your data stays with us.', 'I dati immagazzinati nel nostro database non vengono condivisi con altre aziende. Le password non sono salvate in chiaro e sono cifrate con un metodo di crittografia one-way di ultima generazione.': 'We never share database information with other companies. Passwords are never stored in plain text and are protected with modern one-way encryption.',
    'Semplice da usare': 'Easy to use', 'Super organizzato': 'Well organized', 'Non perdere il ticket': 'Never lose your ticket', 'Con noi sei sicuro di non perdere il ticket. Un vantaggio per te e per l’ambiente.': 'With us, you will never lose your ticket. It is better for you and the environment.',
    'Organizzazione semplice': 'Simple organization', "L'interfaccia è strutturata in modo chiaro e semplice. Accedi e paga. Niente di più.": 'The interface is clear and simple. Log in and pay. That is all.',
    'Senza preoccuparti del parcheggio.': 'No need to worry about parking.', 'Puoi goderti questi luoghi': 'Enjoy these places', 'Il team': 'The team', 'Chi siamo:': 'About us',
    'Studente della 5AIT, frequentante il corso Telecomunicazioni. Mi sono occupato principalmente dello sviluppo del software del Raspberry Pi e dello sviluppo del sito web.': 'A fifth-year Telecommunications student. I mainly worked on the Raspberry Pi software and website development.',
    'Studente della 5AIT, frequentante il corso Telecomunicazioni. Mi sono occupato principalmente dello sviluppo dell’Android app e dell’implementazione del database.': 'A fifth-year Telecommunications student. I mainly worked on the Android app and database implementation.', 'Studente': 'Student',
    'Sempre con te': 'Always with you', 'Download per Android': 'Download for Android', 'Accedi a Efficient Parking Web': 'Log in to Efficient Parking Web',
    "L'intero codice è stato caricato su GitHub ed è open source": 'The complete code is available on GitHub as open source.', 'Visita il vecchio sito ↗': 'Visit the old website ↗', 'Sito precedente': 'Previous website',
    '← Torna alla home': '← Back to home', 'Parcheggiare, con semplicità.': 'Parking, made simple.', 'Accedi a Efficient Parking per gestire il tuo parcheggio dal web.': 'Log in to Efficient Parking to manage your parking online.',
    'Bentornato': 'Welcome back', 'Benvenuto': 'Welcome', 'Accesso demo: targa': 'Demo login: license plate', 'Targa non esistente': 'License plate not found', 'Password errata': 'Incorrect password', 'Targa': 'License plate', 'Password': 'Password', 'La tua password': 'Your password',
    'Mostra o nascondi password': 'Show or hide password', 'Non hai un account?': 'Don’t have an account?', 'Iscriviti': 'Sign up', 'Hai dimenticato la password?': 'Forgot your password?', 'Recuperala': 'Reset it',
    'Registrati': 'Sign up', 'Registrati subito': 'Create your account', 'Inizia a parcheggiare con facilità.': 'Start parking with ease.', 'Crea il tuo account Efficient Parking per usare il servizio da PC e smartphone.': 'Create an Efficient Parking account to use the service on your computer or smartphone.', 'Il tuo account': 'Your account', 'Il tuo account è stato registrato, verrai reindirizzato tra pochi istanti': 'Your account has been created. You will be redirected shortly.', 'Il tuo account non è stato registrato, inserisci valori validi': 'Your account could not be created. Please enter valid details.', 'Targa già utilizzata': 'License plate already in use', 'Email già utilizzata': 'Email already in use', 'Nome e cognome': 'Full name', 'Indirizzo e-mail': 'Email address', 'Numero di telefono': 'Phone number', 'Scegli un username': 'Choose a username', 'Crea una password': 'Create a password', 'Hai già un account?': 'Already have an account?',
    'Recupero password': 'Password reset', 'Ritrova l’accesso al tuo account.': 'Get back into your account.', 'Puoi utilizzare il servizio Efficient Parking sia da PC sia da smartphone.': 'You can use Efficient Parking on your computer or smartphone.', 'Assistenza account': 'Account support', 'Hai dimenticato la password?': 'Forgot your password?', 'Inserisci il tuo indirizzo email dove ti invieremo un link per recuperare la password.': 'Enter your email address and we will send you a password reset link.', 'Email': 'Email', 'Invia': 'Send', 'Il recupero password non è attivo nella modalità demo.': 'Password reset is unavailable in demo mode.', 'Ti sei ricordato la password?': 'Remember your password?',
    'Il tuo profilo': 'Your profile', 'Dati utente': 'User details', 'Contatore': 'Timer', 'Mappa': 'Map', 'Pagamento': 'Payment', 'Esci': 'Log out', 'Le informazioni del tuo parcheggio, raccolte in un solo posto.': 'Your parking information, all in one place.', 'Parcheggio': 'Parking spot', 'Data di entrata': 'Entry date', 'Tempo di sosta': 'Parking duration', 'Ore': 'Hours', 'Minuti': 'Minutes', 'Secondi': 'Seconds', 'Vicino a te': 'Near you', 'Riepilogo': 'Summary', 'Data di uscita': 'Exit date', 'Tempo trascorso': 'Time elapsed', 'Costo': 'Cost', 'Torna al sito ↗': 'Back to website ↗', 'Nessun parcheggio attivo': 'No active parking session',
    'Il metodo più efficiente e veloce per parcheggiare, basta solo il tuo smartphone o il tuo PC.': 'The fastest and easiest way to park, using only your smartphone or computer.',
    'Mostra o nascondi password': 'Show or hide password', 'Es. AB123CD': 'e.g. AB123CD', 'nome@esempio.it': 'name@example.com', 'Nome e cognome': 'Full name', 'Numero di telefono': 'Phone number'
  };

  const attributeTranslations = {
    'Efficient Parking, home': 'Efficient Parking, home',
    'Schermate dell’app Efficient Parking': 'Efficient Parking app screens',
    'Efficient Parking su smartphone': 'Efficient Parking on a smartphone',
    'Interfaccia organizzata dell’app': 'Organized app interface',
    'Luogo da visitare': 'A place to visit',
    'Efficient Parking sul tuo smartphone': 'Efficient Parking on your smartphone',
    'Mappa del Park Fogazzaro a Vicenza': 'Map of Park Fogazzaro in Vicenza'
  };
  const italianTitle = document.title;
  const titleMap = {
    'Efficient Parking': 'Efficient Parking',
    'Accedi | Efficient Parking': 'Log in | Efficient Parking',
    'Registrati | Efficient Parking': 'Sign up | Efficient Parking',
    'Recupero password | Efficient Parking': 'Password reset | Efficient Parking',
    'Il tuo profilo | Efficient Parking': 'Your profile | Efficient Parking'
  };

  function applyLanguage(language) {
    const english = language === 'en';
    document.documentElement.lang = language;
    document.title = english ? (titleMap[italianTitle] || italianTitle) : italianTitle;
    document.querySelectorAll('.language-toggle').forEach((button) => {
      button.textContent = english ? 'IT' : 'EN';
      button.setAttribute('aria-label', english ? 'Passa all’italiano' : 'Switch to English');
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.__italianText) node.__italianText = node.nodeValue;
      const original = node.__italianText.trim();
      if (!original || !translations[original]) continue;
      const leading = node.__italianText.match(/^\s*/)[0];
      const trailing = node.__italianText.match(/\s*$/)[0];
      node.nodeValue = leading + (english ? translations[original] : original) + trailing;
    }
    document.querySelectorAll('[placeholder]').forEach((element) => {
      const original = element.dataset.itPlaceholder || element.getAttribute('placeholder');
      element.dataset.itPlaceholder = original;
      if (english) element.setAttribute('placeholder', translations[original] || original);
      else element.setAttribute('placeholder', original);
    });
    document.querySelectorAll('[alt], [title], [aria-label]').forEach((element) => {
      ['alt', 'title', 'aria-label'].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        const key = `it${attribute[0].toUpperCase()}${attribute.slice(1)}`;
        const original = element.dataset[key] || element.getAttribute(attribute);
        element.dataset[key] = original;
        if (english) element.setAttribute(attribute, attributeTranslations[original] || translations[original] || original);
        else element.setAttribute(attribute, original);
      });
    });
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      const italianDescription = 'Efficient Parking: il metodo più efficiente e veloce per parcheggiare, basta solo il tuo smartphone o il tuo PC.';
      description.content = english ? 'Efficient Parking: the fastest and easiest way to park, using only your smartphone or computer.' : italianDescription;
    }
    localStorage.setItem('epLanguage', language);
  }

  document.querySelectorAll('.language-toggle').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(document.documentElement.lang === 'it' ? 'en' : 'it'));
  });
  applyLanguage(localStorage.getItem('epLanguage') || 'it');
})();
