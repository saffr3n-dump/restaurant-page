const title = document.createElement('h1');
title.textContent = 'Contact Us';

const info = document.createElement('p');
info.textContent = 'Some contact information goes here...';

const contact = document.createElement('div');
contact.append(title, info);

export default contact;
