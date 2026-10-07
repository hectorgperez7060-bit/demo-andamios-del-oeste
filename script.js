const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');
const dialog = document.querySelector('#demo-dialog');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.js-demo-contact').forEach((button) => {
  button.addEventListener('click', () => dialog.showModal());
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-ok').addEventListener('click', () => dialog.close());

document.querySelector('#quote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  dialog.showModal();
});
