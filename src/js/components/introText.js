import { createElement } from '../helpers/helpers';

//Create a paragraph
function createParagraph(paragraph){
  const paragraphContainer = createElement('p', 'intro-text__paragraph');
  paragraphContainer.innerText = paragraph.text;
  return paragraphContainer; 
}

 const introText = (data) => {
  const section = createElement('section', 'intro-text');
  const paragraphs = data.paragraphs.map(createParagraph);

  paragraphs.forEach((paragraph) => {
    section.appendChild(paragraph);
  });
  
  return section;
};

export { introText };

