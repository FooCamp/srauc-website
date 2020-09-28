import { createElement, newContainer } from '../helpers/helpers';
import { featuredMessageComp } from './featuredMessage';

//Function to create icons, circles, bars
function createIconBar(componentRequired, stepStatus, value) {
  let createdComponent;
  if (componentRequired == 'icon') {
    //Create Icon
    const icon = createElement('img', 'time-line-icon');
    icon.src = value;
    //Adding the icon into a div container
    createdComponent = createElement('div', 'instruction__time-line-icon-container');
    createdComponent.appendChild(icon);
  }
  if (componentRequired == 'bar') {
    if (stepStatus == 'dark') {
      createdComponent = createElement('div', 'instruction__separator--dark-step');
    } else {
      createdComponent = createElement('div', 'instruction__separator');
    }
  }
  if (componentRequired == 'circle') {
    if (stepStatus == 'dark') {
      createdComponent = createElement('div', 'instruction__indicator--dark');
    } else {
      createdComponent = createElement('div', 'instruction__indicator');
    }
  }

  return createdComponent;
}

//Create a timeline step
function createTimelineStep(timelineStep) {
  const currentStepContainer = createElement('div', 'instruction__current-step-container');

  function createCurrentStep(steps) {
    steps.forEach((step) => {
      currentStepContainer.appendChild(step);
    });
  }

  if (timelineStep.index == 0) {
    let orderedSteps = [
      createIconBar('icon', '', '01-icono-enfriar.svg'),
      createIconBar('bar', 'default', ''),
      createIconBar('circle', 'default', ''),
      createIconBar('bar', 'default', ''),
      createIconBar('circle', 'default', ''),
    ];
    createCurrentStep(orderedSteps);
  }

  if (timelineStep.index == 1) {
    let orderedSteps = [
      createIconBar('circle', 'dark', ''),
      createIconBar('bar', 'dark', ''),
      createIconBar('icon', '', '02-icono-filtrar.svg'),
      createIconBar('bar', 'default', ''),
      createIconBar('circle', 'default', ''),
    ];
    createCurrentStep(orderedSteps);
  }

  if (timelineStep.index == 2) {
    let orderedSteps = [
      createIconBar('circle', 'dark', ''),
      createIconBar('bar', 'dark', ''),
      createIconBar('circle', 'dark', ''),
      createIconBar('bar', 'dark', ''),
      createIconBar('icon', '', '03-icono-traer.svg'),
    ];
    createCurrentStep(orderedSteps);
  }

  const stepTitle = createElement('h2', 'instruction__step-title');
  const stepDescription = createElement('div', 'instruction__step-description');
  const locationDescription = createElement('div', 'instruction__location-description');

  const stepImageContainer = createElement('div', 'instruction__step-image-container');
  const stepImage = createElement('img', 'instruction__time-line-image');

  if (timelineStep.additional.type == 'image') {
    if (timelineStep.text) {
      stepDescription.innerText = timelineStep.text;
    }
    stepImage.src = timelineStep.additional.image.src;
    stepImage.alt = timelineStep.additional.image.alt;
    stepImageContainer.appendChild(stepImage);
  }

  if (timelineStep.additional.type == 'warning') {
    if (timelineStep.text) {
      stepDescription.innerText = timelineStep.text;
    }
    stepImageContainer.appendChild(featuredMessageComp(timelineStep.additional));
  }

  if (timelineStep.additional.type == 'mapComp') {
    if (timelineStep.text) {
      stepDescription.innerText = timelineStep.text;
      stepDescription.classList.add('instruction__title-description-container--hide');
    }
    const locationInfo1 = createElement('p');
    locationInfo1.innerText = timelineStep.additional.text1;
    const locationInfo2 = createElement('p');
    locationInfo2.innerText = timelineStep.additional.text2;
    const locationInfo3 = createElement('p');
    locationInfo3.innerText = timelineStep.additional.text3;
    locationDescription.appendChild(locationInfo1);
    locationDescription.appendChild(locationInfo2);
    locationDescription.appendChild(locationInfo3);

    const googlemapContainer = createElement('iframe', 'google__map');
    googlemapContainer.src =
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4614141364334!2d-75.5778219368386!3d6.284010627619957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429299903b3ab%3A0x454b09972b0b00fa!2sColegio%20Republic%20of%20Uruguay!5e0!3m2!1sen!2sco!4v1601241474647!5m2!1sen!2sco';

    googlemapContainer.width = '435';
    googlemapContainer.height = '324';
    googlemapContainer.frameborder = '0';
    googlemapContainer.style = 'border:0;';
    googlemapContainer.allowfullscreen = '';
    googlemapContainer.tabindex = '0';

    stepImageContainer.appendChild(googlemapContainer);
  }

  stepTitle.innerText = timelineStep.title;

  const titleDescriptionContainer = newContainer(
    'div',
    [stepTitle, stepDescription],
    ['instruction__title-description-container'],
  );
  const timelineStepContainer = createElement('div', 'instruction__step-container');

  if (timelineStep.additional.type == 'mapComp') {
    timelineStepContainer.appendChild(currentStepContainer);
    timelineStepContainer.appendChild(titleDescriptionContainer);
    timelineStepContainer.appendChild(stepImageContainer);
  } else {
    timelineStepContainer.appendChild(currentStepContainer);
    timelineStepContainer.appendChild(titleDescriptionContainer);
    timelineStepContainer.appendChild(stepImageContainer);
  }

  return timelineStepContainer;
}

const instructions = (data) => {
  const timelineHeader = createElement('h1', 'instruction__time-line-header');

  const allStepsIndicator = createElement('div', 'instruction__all-steps-indicator-container');
  allStepsIndicator.appendChild(createIconBar('icon', 'desktop', '01-icono-enfriar.svg'));
  allStepsIndicator.appendChild(createIconBar('bar', 'desktop', ''));
  allStepsIndicator.appendChild(createIconBar('icon', 'desktop', '02-icono-filtrar.svg'));
  allStepsIndicator.appendChild(createIconBar('bar', 'desktop', ''));
  allStepsIndicator.appendChild(createIconBar('icon', 'desktop', '03-icono-traer.svg'));

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
    [timelineHeader, allStepsIndicator, timelineStepsContainer],
    ['instruction'],
  );

  return section;
};

export { instructions };
