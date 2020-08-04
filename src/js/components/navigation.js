import { newLink, newContainer } from './helpers';

const createLinks = (dataItems) => {
  const arrayLinks = dataItems.map((item) => {
    const menuLink = newLink(item.href, item.text, ['nav__menu-link']);
    const menuItem = newContainer('li', [menuLink], ['nav__menu-item']);
    return menuItem;
  });
  return arrayLinks;
};

const mainNavigation = (data) => {
  // Create menu button
  const menuButton = document.createElement('button');
  menuButton.classList.add('nav__button-menu');

  // Create menu icon
  const menuIcon = document.createElement('img');
  menuIcon.src = data.buttonMenu.image.src;
  menuIcon.alt = data.buttonMenu.image.alt;

  // Insert menu icon in menu button
  menuButton.appendChild(menuIcon);

  const iconClose = document.createElement('img');
  iconClose.src = 'icon-close.svg';
  iconClose.alt = 'Close menu button';

  const iconCloseButton = document.createElement('button');
  iconCloseButton.classList.add('nav__button-close');

  // Insert icons in buttons
  iconCloseButton.appendChild(iconClose);

  // Create links
  const linksMenu = createLinks(data.items);
  const menu = newContainer('ul', linksMenu, ['nav__menu']);
  const navOverlay = newContainer('nav', [menu, iconCloseButton], ['nav__overlay', 'js-nav']);

  const menuWrapper = newContainer('div', [menuButton, navOverlay], ['nav']);

  // Listeners
  menuButton.addEventListener('click', () => {
    navOverlay.classList.add('nav__overlay--active');
  });

  iconCloseButton.addEventListener('click', () => {
    navOverlay.classList.remove('nav__overlay--active');
  });

  return menuWrapper;
};

export default mainNavigation;
