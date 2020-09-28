import { newMultimedia, newContainer, newText } from '../helpers/helpers';

const infographicSectionSiphon = (data) => {
  const infographicPercent = newText('h2', data.percent || '', [
    'display',
    'display-1',
    'infographic-container__percent',
  ]);
  const infographicTitle = newText('h2', data.title, [
    'heading',
    'heading-2',
    'infographic-container__title',
  ]);
  const infographicTitleDesktop = newText('h2', data.title, [
    'heading',
    'heading-2',
    'infographic-container__title-desktop',
  ]);
  const infographicText = newText('p', data.text || '', [
    'text',
    'text-normal',
    'infographic-container__text',
  ]);
  const infographicTextDesktop = newText('p', data.text || '', [
    'text',
    'text-normal',
    'infographic-container__text-desktop',
  ]);
  const infographicContinerText = newContainer(
    'div',
    [infographicTitleDesktop, infographicTextDesktop],
    ['infographic-container__container-text-desktop'],
  );
  const infographicImage = newMultimedia('img', data.image.src, data.image.alt, [
    'infographic-container__image-siphon',
  ]);

  const section = newContainer(
    'section',
    [
      infographicPercent,
      infographicTitle,
      infographicText,
      infographicImage,
      infographicContinerText,
    ],
    ['grid', 'infographic-container'],
  );

  return section;
};

export { infographicSectionSiphon };
