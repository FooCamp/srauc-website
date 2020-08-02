// Component imports
import { defaultComp } from './components/default.js';
import { initialMessageComp } from './components/initialmessage';


import { pageData } from '../data/data';

/**
 * Component map
 * each component name is mapped to its template.
 */
const components = {
  default: defaultComp,
  textBlockComp: initialMessageComp
};

const getCurrentPage = () => {
  const path = window.location.href.split('/');
  const location = path.slice(-1)[0] || 'home';
  return location.replace('.html', '');
};

/**
 * Find and return the microPage initial wrapper
 */
const getPageWrapper = () => document.querySelector('#root');

/**
 *
 * @param {object} data contains the expected page content data
 */
const pageInit = (data) => {
  const pageWrapper = getPageWrapper();

  if (pageWrapper) {
    data.sections.forEach((section) => {
      if (components[section.component]) {
        pageWrapper.appendChild(components[section.component](section));
        // eslint-disable-next-line no-console
        console.log(section.component, ' loaded!');
      } else {
        pageWrapper.appendChild(components.default(section));
        // eslint-disable-next-line no-console
        console.log(section.component, ' not found, loading default component!');
      }
    });
  } else {
    // eslint-disable-next-line no-console
    console.log('NO PAGE WRAPPER FOUND, PAGE CANT BE RENDERED');
  }
};

pageInit(pageData[getCurrentPage()]);
