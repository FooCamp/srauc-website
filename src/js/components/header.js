import { createElement } from '../helpers/helpers';

const headerSection = (data) => {
  const header = createElement('HEADER', 'header');
  const headerContainer = createElement('DIV', 'header__container');
  const headerLink = createElement('A', 'header__link');
  const logo = createElement('IMG', 'header__logo');

  logo.src = data.image.src;
  logo.alt = data.image.alt;
  headerLink.href = data.item.href;

  headerLink.appendChild(logo);
  headerContainer.appendChild(headerLink);
  header.appendChild(headerContainer);

  return header;
};

export { headerSection };
