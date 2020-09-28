import { newContainer, newText } from '../helpers/helpers';

const infographicSectionHeader = (data) => {
  const infographicTitle = newText('h2', data.title, [
    'display',
    'display-2',
    'infographic-container__title-header',
  ]);

  const section = newContainer('section', [infographicTitle], ['grid', 'infographic-container']);

  return section;
};

export { infographicSectionHeader };
