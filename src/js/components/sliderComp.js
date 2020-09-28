import { newContainer, newText } from '../helpers/helpers';

const createSlides = (slides) => {
  const slidesArray = slides.map((slide) => {
    const sliderSlideDescription = newText('p', text.description, ['slider__slide-description']);

    const sliderSlideHeadline = newText('p', text.headline, ['slider__slide-headliner']);

    const sliderSlideInfo = newContainer(
      'div',
      [sliderSlideHeadline, sliderSlideDescription],
      ['slider__slide-info'],
    );
  });
};

const sliderComp = (data) => { };
