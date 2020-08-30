import { createElement } from '../helpers/helpers';

const featuredMessageComp = (data) => {
  const section = createElement('section', 'featured-message');
  
  if (data.icon){
    section.classList.add('featured-message--warning');
    let icon = createElement('img', 'featured-message__icon');
    icon.src = data.icon;
    icon.alt = 'Warning Icon';
    section.appendChild(icon);
  }

  if (data.title){
    let title = createElement('h1', 'featured-message__title');
    title.textContent = data.title;
    if (data.icon) title.classList.add('featured-message__title--warning')
    section.appendChild(title);
  }
  
  return section;
};

export { featuredMessageComp };
