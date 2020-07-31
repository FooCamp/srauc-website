import { createElement } from "../helpers/helpers.js";

const headerSection = (data) => {
  const header = createElement("header", "header");
  const headerContainer = createElement("div", "header__container");
  const headerLink = createElement("a", "header__link");
  const logo = createElement("img", "header__logo");

  logo.src = data.image.src;
  logo.alt = data.image.alt;
  headerLink.href = data.item.href;

  headerLink.appendChild(logo);
  headerContainer.appendChild(headerLink);
  header.appendChild(headerContainer);

  return header;
};

export { headerSection };
