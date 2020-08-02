/**
 * @param {object} data contains the expected page content data
 * returns a default component to show the provided information.
 */
const initialMessageComp = (data) => {
  const section = document.createElement('SECTION');
  
  if (data.backgroundColor) section.classList.add(`textblockcomp__container--${data.backgroundColor}`);
  
  if (data.title){
    let title = document.createElement('H1');
    title.classList.add('textblockcomp__title');
    title.textContent = data.title;
    section.appendChild(title);
  }
  
  if (data.text){
    let text = document.createElement('P');
    text.classList.add('textblockcomp__text');
    text.textContent = data.text;
    section.appendChild(text);
  }
  
  section.classList.add('textblockcomp__container');
  return section;
};

export { initialMessageComp };

