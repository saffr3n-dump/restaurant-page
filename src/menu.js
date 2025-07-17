const title = document.createElement('h1');
title.textContent = 'Menu';

const items = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const name = document.createElement('h2');
  name.textContent = `Meal #${i + 1}`;

  const description = document.createElement('p');
  description.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lacinia nisl. Nam a risus egestas massa suscipit sodales sit amet eget ante.';

  const item = document.createElement('div');
  item.append(name, description);
  items.appendChild(item);
}

const menu = document.createElement('div');
menu.append(title, items);

export default menu;
