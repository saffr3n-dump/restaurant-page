import home from './home';
import menu from './menu';
import contact from './contact';

const content = document.querySelector('.content');
content.appendChild(home);

const nav = document.querySelector('nav');
nav.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  content.innerHTML = '';

  switch (e.target.textContent) {
    case 'Home'   : return content.appendChild(home);
    case 'Menu'   : return content.appendChild(menu);
    case 'Contact': return content.appendChild(contact)
  }
});
