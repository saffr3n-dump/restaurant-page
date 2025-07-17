const title = document.createElement('h1');
title.textContent = 'Home Page';

const description = document.createElement('p');
description.textContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a massa eu ante fermentum auctor. Nunc nec sapien ac purus lacinia faucibus sit amet eleifend risus. Etiam ipsum mauris, viverra ac rhoncus ut, bibendum in dui. Phasellus eu arcu ac arcu sodales porttitor. Nam pharetra, libero varius vestibulum vehicula, odio dolor pretium elit, vitae tincidunt nunc mauris non sapien. Quisque id pellentesque leo. Suspendisse ac turpis in felis congue semper. Curabitur orci orci, egestas sed accumsan et, ultricies ut mauris. Phasellus ac lacinia orci. Curabitur non erat gravida quam interdum semper. Aenean eu velit sed ligula condimentum lobortis. Nullam nec venenatis mauris.';

const home = document.createElement('div');
home.append(title, description);

export default home;
