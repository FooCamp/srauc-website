import { createElement } from '../helpers/helpers';

const footerSection = (data) => {
  const footer = createElement('footer', 'footer');
  const Container = createElement('div', 'footer__container');
  const Tittle = createElement('a', 'footer__title');
  const containerInformation = createElement('div', 'footer__container--text');
  const text = createElement('p', 'footer__text');
  const email = createElement('p', 'footer__email');
  const phone = createElement('p', 'footer__phone');
  const socialMedia = createElement('img', 'footer__');
