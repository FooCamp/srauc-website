import { createElement, newContainer } from '../helpers/helpers';

//Create a timeLineItem
function createtimelineItem(timelineItem) {
  const timeLineItemTitle = createElement('h2', 'instruction__time-line-item-title');
  const timeLineItemDescription = createElement('p', 'instruction__time-line-item-text');
  const timeLineImageContainer = createElement('div', 'instruction__time-line-image-container');
  const timeLineImage = createElement('img', 'instruction__time-line-image');
  timeLineImage.src = timelineItem.image.src;
  timeLineImage.alt = timelineItem.image.alt;
  timeLineImageContainer.appendChild(timeLineImage);
  timeLineItemTitle.innerText = timelineItem.title;
  if (timelineItem.text) {
    timeLineItemDescription.innerText = timelineItem.text;
  }
  const titleDescriptionContainer = newContainer(
    'div',
    [timeLineItemTitle, timeLineItemDescription],
    ['instruction__title-description-container'],
  );
  const timelineItemContainer = newContainer(
    'div',
    [titleDescriptionContainer, timeLineImageContainer],
    ['instruction__time-line-item'],
  );

  return timelineItemContainer;
}

const instructionsStep1 = (data) => {
  const timelineHeader = createElement('h1', 'instruction__time-line-header');
  const timelineSeparator = createElement('div', 'instruction__separator');
  const timelineIconStep3 = createElement('div', 'instruction__indicator');
  timelineIconStep3.classList.add('instruction__indicator-step-3');
  const timelineIconStep2 = createElement('div', 'instruction__indicator');
  timelineIconStep2.classList.add('instruction__indicator-step-2');
  const timelineContainer = createElement('div', 'instruction__time-lines-container');
  //Create Icon
  const icon = createElement('img', 'time-line-icon');
  icon.src = data.icon;
  //Adding the icon into a div container
  const timelineIconContainer = createElement('div', 'instruction__time-line-icon-container');
  timelineIconContainer.appendChild(icon);

  const stepsContainer = newContainer(
    'div',
    [timelineIconContainer, timelineSeparator, timelineIconStep3, timelineIconStep2],
    ['instruction__stepsContainer'],
  );

  if (data.timelineHeader) {
    timelineHeader.innerText = data.timelineHeader;
  }
  const timeLine = createtimelineItem(data);
  timelineContainer.appendChild(timeLine);
  const section = newContainer(
    'section',
    [timelineHeader, stepsContainer, timelineContainer],
    ['instruction'],
  );
  return section;
};

export { instructionsStep1 };
