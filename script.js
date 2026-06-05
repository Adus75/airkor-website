const btn = document.getElementById('menuButton');
const nav = document.getElementById('nav');
btn?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
