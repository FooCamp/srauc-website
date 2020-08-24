import { newMultimedia, newContainer, newText } from './helpers';

const createElementsMembers = (images) => {
  const arrayMultimedia = images.map((image) => {
    const membersText = newText('h3', image.name, ['heading', 'heading-3', 'members__name']);
    const membersProfession = newText('p', image.job, ['text', 'text-largue', 'members__profession']);
    const containerPersons = newContainer('div', [membersText, membersProfession], ['members__container-text']);

    const picture = newMultimedia('img', image.image.src, image.image.alt, ['members__image']);
    const containerPicture = newContainer('div', [picture, containerPersons], ['members__container-persons']);

    return containerPicture
  });
  return arrayMultimedia
};

const membersSection = (data) => {
  const arrayMembers = createElementsMembers(data.members);
  const containerMembers = newContainer('div', arrayMembers, ['members__container']);
  const title = newText('h2', data.title, ['heading', 'heading-2','members__title']);
  const section = newContainer('section', [title, containerMembers], ['grid', 'members']);

  return section
};

export { membersSection };
