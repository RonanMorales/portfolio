// Le contenu et les liens restent accessibles sans JavaScript.
// Ce script gère uniquement le menu des écrans étroits.
document.documentElement.classList.add('js');
const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
if (button && nav) {
  button.hidden = false;
  nav.dataset.open = 'false';
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    nav.dataset.open = String(open);
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      button.setAttribute('aria-expanded', 'false');
      nav.dataset.open = 'false';
    });
  });
}
