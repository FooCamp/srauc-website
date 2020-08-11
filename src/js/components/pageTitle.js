const pageTitle = (data) => {
  const section = document.createElement('section');
  const eyebrow = document.createElement('p');
  const heading = document.createElement('h1');

  section.classList.add('page-title');
  eyebrow.innerText = data.eyebrow;
  eyebrow.classList.add('text', 'text-normal', 'page-title__eyebrow');
  heading.innerText = data.heading;
  heading.classList.add('heading', 'heading-1', 'page-title__heading');

  section.appendChild(eyebrow);
  section.appendChild(heading);

  return section;
};

export { pageTitle };
