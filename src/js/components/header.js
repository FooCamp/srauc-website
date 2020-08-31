import { createElement, newContainer, newLink } from '../helpers/helpers';

const createLinks = (dataItems) => {
  const arrayLinks = dataItems.map((item) => {
    const menuLink = newLink(item.href, item.text, ['heading', 'heading-3', 'header__menu-link']);
    const menuItem = newContainer('li', [menuLink], ['header__menu-item']);
    return menuItem;
  });
  return arrayLinks;
};


const headerSection = (data) => {

  //Create icon close
  const iconClose = document.createElement('img');
  iconClose.src = "icon-close.svg";
  iconClose.alt = "Close menu button";

  //Create icon close button
  const closeButton = createElement('button', 'header__button-close');

  //Insert icon close in button
  closeButton.appendChild(iconClose);

  //Create links
  const headerMenuLinks = createLinks(data.items);

  //Create menu
  const headerMenu = newContainer('ul', headerMenuLinks, ['header__menu']);

  //Create navigation
  const headerNav = newContainer('nav', [headerMenu], ['header__nav', 'js-nav']);

  //Create logo
  const logo = createElement('img', 'header__logo');
  logo.src = data.image.src;
  logo.alt = data.image.alt;

  //Create link logo
  const headerLogo = createElement('a', 'header__link');
  headerLogo.href = data.item.href;

  //Insert logo in link
  headerLogo.appendChild(logo);

  //Create icon menu
  const menuIcon = document.createElement('img')
  menuIcon.src = data.buttonMenu.image.src;
  menuIcon.alt = data.buttonMenu.image.alt;

  //Create button menu
  const menuButton = createElement('button', 'header__menu-btn');

  // Insert icon menu in button
  menuButton.appendChild(menuIcon);
  console.log(menuButton);

  //Create header container
  const headerContainer = newContainer('div', [menuButton, headerLogo, headerNav, closeButton], ['header__container'])

  //Create header
  const header = createElement('header', 'header');

  header.appendChild(headerContainer);

  console.log(header);

  // Listeners
  let pagePositionTop = 0;

  menuButton.addEventListener('click', () => {
    pagePositionTop = window.pageYOffset || document.documentElement.scrollTop;
    const bodyPage = document.body;
    bodyPage.classList.add('lock-scroll');
    bodyPage.style.top = `${pagePositionTop}px`;
    headerNav.classList.add('header__nav--active');
  });

 closeButton.addEventListener('click', () => {
    const bodyPage = document.body;
    bodyPage.classList.remove('lock-scroll');
    window.scroll(0, pagePositionTop);
    headerNav.classList.remove('header__nav--active');
  });

  return header;
};


export { headerSection };
