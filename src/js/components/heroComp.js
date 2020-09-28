import { createTagWithClasses, newContainer, newMultimedia, newText } from '../helpers/helpers';

const heroComp = (data) => {
  const heroButton = createTagWithClasses('a', ['hero__button']);
  heroButton.innerText = data.button.text;
  heroButton.href = data.button.href;

  const heroDescription = newText('p', data.text, ['hero__description', 'text', 'text-normal']);

  const heroHeadline = newText('span', data.title, ['hero__headline', 'display', 'display-2']);

  const heroInfo = newContainer('div', [heroHeadline, heroDescription, heroButton], ['hero__info']);

  const heroImg = newMultimedia('img', data.image.src, data.image.alt, ['hero__img']);

  const heroContainer = newContainer('div', [heroImg, heroInfo], ['hero__container', 'grid']);

  const hero = newContainer('section', [heroContainer], ['hero']);

  return hero;
};

export { heroComp };
