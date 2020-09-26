import { createElement, newContainer } from '../helpers/helpers';

//Create a timeline step
function createTimelineStep(timelineStep) {
  //Create Icon
  const icon = createElement('img', 'time-line-icon');
  icon.src = timelineStep.icon;
  //Adding the icon into a div container
  const timelineIconContainer = createElement('div', 'instruction__time-line-icon-container');
  timelineIconContainer.appendChild(icon);

  const timelineSeparator = createElement('div', 'instruction__separator');

  const timelineIconStep2 = createElement('div', 'instruction__indicator');
  timelineIconStep2.classList.add('instruction__indicator-step-2');

  const timelineSeparator2 = createElement('div', 'instruction__separator');

  const timelineIconStep3 = createElement('div', 'instruction__indicator');
  timelineIconStep3.classList.add('instruction__indicator-step-3');

  const stepTitle = createElement('h2', 'instruction__step-title');
  const stepDescription = createElement('p', 'instruction__step-description');

  const stepImageContainer = createElement('div', 'instruction__step-image-container');
  const stepImage = createElement('img', 'instruction__time-line-image');

  const currentStepContainer = createElement('div', 'instruction__current-step-container');

  function createCurrentStep(steps) {
    steps.forEach((step) => {
      currentStepContainer.appendChild(step);
    });
  }

  if (timelineStep.index == 0) {
    let orderedSteps = [
      timelineIconContainer,
      timelineSeparator,
      timelineIconStep2,
      timelineSeparator2,
      timelineIconStep3,
    ];
    createCurrentStep(orderedSteps);
  }

  if (timelineStep.index == 1) {
    let orderedSteps = [
      timelineIconStep2,
      timelineSeparator,
      timelineIconContainer,
      timelineSeparator2,
      timelineIconStep3,
    ];
    createCurrentStep(orderedSteps);
  }

  if (timelineStep.index == 2) {
    let orderedSteps = [
      timelineIconStep2,
      timelineSeparator,
      timelineIconStep3,
      timelineSeparator2,
      timelineIconContainer,
    ];
    createCurrentStep(orderedSteps);
  }

  if (timelineStep.additional.type == 'image') {
    stepImage.src = timelineStep.additional.image.src;
    stepImage.alt = timelineStep.additional.image.alt;
  }

  stepImageContainer.appendChild(stepImage);

  stepTitle.innerText = timelineStep.title;
  if (timelineStep.text) {
    stepDescription.innerText = timelineStep.text;
  }
  const titleDescriptionContainer = newContainer(
    'div',
    [stepTitle, stepDescription],
    ['instruction__title-description-container'],
  );
  const timelineStepContainer = newContainer(
    'div',
    [currentStepContainer, titleDescriptionContainer, stepImageContainer],
    ['instruction__step-container'],
  );

  return timelineStepContainer;
}

const instructions = (data) => {
  const timelineHeader = createElement('h1', 'instruction__time-line-header');
  const timelineStepsContainer = createElement('div', 'instruction__steps-container');
  if (data.title) {
    timelineHeader.innerText = data.title;
  }
  const timelineSteps = data.timelineSteps.map(createTimelineStep);
  timelineSteps.forEach((timelineStep) => {
    timelineStepsContainer.appendChild(timelineStep);
  });
  const section = newContainer(
    'section',
    [timelineHeader, timelineStepsContainer],
    ['instruction'],
  );

  return section;
};

export { instructions };
