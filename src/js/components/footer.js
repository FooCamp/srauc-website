import { createElement } from '../helpers/helpers';

const footerSection = (data) => {
  const footer = createElement('footer', 'footer');
  const container = createElement('div', 'footer__container');
  const tittleText = createElement('h2', 'footer__title');
  const tittleLink = createElement('a', 'footer__title--link');
  const containerInformation = createElement('div', 'footer__container--text');
  const text = createElement('p', 'footer__text');
  const email = createElement('p', 'footer__email');
  const phone = createElement('p', 'footer__phone');
  const socialLink = createElement('a', 'footer__link');
  const socialIcon = createElement('img', 'footer__link--icon');

  tittleText.innerText = data.footer.title.text;
  tittleLink.href = data.footer.title.url;
  text.innerText = data.footer.text;
  email.innerText = data.footer.email;
  phone.innerText = data.footer.phone;
  socialLink.href = data.footer.socialLinks.href;
  socialIcon.src = data.footer.socialLinks.icon;

  tittleLink.appendChild(tittleText);
  containerInformation.appendChild(text);
  containerInformation.appendChild(email);
  containerInformation.appendChild(phone);
  socialLink.appendChild(socialIcon);
  container.appendChild(tittleText);
  container.appendChild(containerInformation);
  container.appendChild(socialLink);
  footer.appendChild(container);

  return footer;
};

export { footerSection };
