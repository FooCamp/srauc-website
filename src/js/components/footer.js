import { newText, newContainer, newMultimedia } from './helpers';

const footerSection = (data) => {
  const text = newText('p', data.text, ['footer__text']);
  const email = newText('p', data.email.text,  ['footer__email']);
  const emailLabel = newText('span', data.email.label, ['text-normal--bold', 'footer__email-label']);
  const emailContainer = newContainer('div', [emailLabel, email], ['footer__container-email']);
  const phone = newText('p', data.phone.text, ['footer__phone']);
  const phoneLabel = newText('span', data.phone.label, ['text-normal--bold', 'footer__phone-label']);
  const phoneContainer = newContainer('div', [phoneLabel, phone], ['footer__container-phone']);
  const containerInformation = newContainer('div', [text, emailContainer, phoneContainer], ['text', 'text-normal', 'footer__container-text']);

  const tittleText = newText('h2', data.title.text, ['heading', 'heading-2','footer__title']);
  const tittleLink = newContainer('a', [tittleText], ['footer__title-link']);
  tittleLink.href = data.title.url;

  const socialIcon = newMultimedia('img', data.socialLinks[0].icon, data.socialLinks[0].alt, ['footer__link-icon']);
  const socialLink = newContainer('a', [socialIcon], ['footer__link']);
  socialLink.href = data.socialLinks[0].href;
  socialLink.target = '_blank';

  const container = newContainer('div', [tittleLink, containerInformation, socialLink], ['grid','footer__container']);

  const footer = newContainer('footer', [container], ['footer']);

  return footer;
};

export { footerSection };
