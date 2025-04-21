function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-' + lang + ']');
    
    elements.forEach(element => {
      element.innerText = element.getAttribute('data-' + lang);
    });
  }