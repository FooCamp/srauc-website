import { newText, newContainer, newMultimedia } from './helpers';

const footerSection = (data) => {
  const text = newText('p', data.text, ['footer__text']);
  const email = newText('p', data.email.text,  ['footer__email']);
  const emailLabel = newText('span', data.email.label, ['footer__email-label']);
  const emailContainer = newContainer('div', [emailLabel, email], []);
  const phone = newText('p', data.phone.text, ['footer__phone']);
  const phoneLabel = newText('span', data.phone.label, ['footer__phone-label']);
  const phoneContainer = newContainer('div', [phoneLabel, phone], []);
  const containerInformation = newContainer('div', [text, emailContainer, phoneContainer], ['footer__container--text']);

  const tittleText = newText('h2', data.title.text, ['footer__title']);
  const tittleLink = newContainer('a', [tittleText], ['footer__title--link']);
  tittleLink.href = data.title.url;

  const socialIcon = newMultimedia('img', data.socialLinks[0].icon, data.socialLinks[0].alt, ['footer__link--icon']);
  const socialLink = newContainer('a', [socialIcon], ['footer__link']);
  socialLink.href = data.socialLinks[0].href;
  socialLink.target = '_blank';

  const container = newContainer('div', [tittleLink, containerInformation, socialLink], ['footer__container']);

  const footer = newContainer('footer', [container], ['footer']);

  return footer;
};

export { footerSection };
