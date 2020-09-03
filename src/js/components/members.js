import { newMultimedia, newContainer, newText } from './helpers';

const createElementsMembers = (members) => {
  return members.map((member) => {
    const membersText = newText('h3', member.name, ['heading', 'heading-3']);
    const membersProfession = newText('p', member.job, [
      'text',
      'text-large',
      'members__profession',
    ]);
    const containerPerson = newContainer(
      'div',
      [membersText, membersProfession],
      ['members__container-text'],
    );

    const picture = newMultimedia('img', member.image.src, member.image.alt, ['members__image']);
    const containerPicture = newContainer(
      'div',
      [picture, containerPerson],
      ['members__container-person'],
    );

    return containerPicture;
  });
};

const membersSection = (data) => {
  const arrayMembers = createElementsMembers(data.members);
  const containerMembers = newContainer('div', arrayMembers, ['members__container']);
  const title = newText('h2', data.title, ['heading', 'heading-2', 'members__title']);
  const section = newContainer('section', [title, containerMembers], ['container', 'members']);

  return section;
};

export { membersSection };
