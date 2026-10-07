const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');
const whatsappNumber = '5491133786768';

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#quote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const detail = String(data.get('detalle') || '').trim();
  const message = [
    'Hola, quisiera solicitar un presupuesto.',
    '',
    `Equipo: ${data.get('equipo')}`,
    `Tiempo: ${data.get('tiempo')}`,
    `Localidad: ${data.get('localidad')}`,
    detail ? `Detalle: ${detail}` : null,
    '',
    '¿Podrían confirmarme disponibilidad y precio?'
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
