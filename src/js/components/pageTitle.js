import { newText, newContainer } from '../helpers/helpers';

const pageTitle = (data) => {
  const eyebrow = newText('p', data.eyebrow, ['text', 'text-normal', 'page-title__eyebrow']);
  const heading = newText('h1', data.heading, ['heading', 'heading-1', 'page-title__heading']);
  const wrapper = newContainer('div', [eyebrow, heading], ['container']);
  const section = newContainer('section', [wrapper], ['page-title']);

  return section;
};

export { pageTitle };
