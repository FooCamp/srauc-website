import { newContainer, newMultimedia, newText } from '../helpers/helpers';

const createSlides = (slidesdata) => {
  const arraySlides = slidesdata.map((slide) => {
    //creates slide description
    const sliderSlideDescription = newText('p', slide.text.description, [
      'text', 'text-normal', 'slider__slide-description',
    ]);

    //creates slide headline
    const sliderSlideHeadline = newText('h3', slide.text.headline, ['heading', 'heading-3', 'slider__slide-headline']);

    //creates slide info
    const sliderSlideInfo = newContainer(
      'div',
      [sliderSlideHeadline, sliderSlideDescription],
      ['slider__slide-info'],
    );

    //creates slide image
    const sliderSlideImg = newMultimedia('img', slide.image.src, slide.image.alt, ['slider__slide-img']);

    //creates slide
    const sliderSlide = newContainer('div', [sliderSlideImg, sliderSlideInfo], ['slider__slide']);

    return sliderSlide;
  });

  return arraySlides;
};

const sliderComp = (data) => {

  const slides = createSlides(data.slides);
  const sliderSlideGroup = newContainer('div', slides, ['slider__slides-group']);

  const sliderHeadline = newText('h2', data.title, ['slider__headline', 'heading', 'heading-2']);

  const sliderContainer = newContainer('div', [sliderHeadline, sliderSlideGroup], ['slider__container', 'grid']);

  const slider = newContainer('Section', [sliderContainer], ['slider']);

  return slider;
};

export { sliderComp };
