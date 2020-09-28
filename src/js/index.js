// Component imports
import { pageTitle } from './components/pageTitle';
import defaultComp from './components/default';
import { headerComp } from './components/header';
import { initialMessageComp } from './components/initialMessage';
import { membersSection } from './components/members';
import { featuredMessageComp } from './components/featuredMessage';
import { introText } from './components/introText';
import { pageData } from '../data/data';
import { galleryComp } from './components/galleryComp';
import { registerComp } from './components/registerComp';
import { infographicSectionHeader } from './components/infographicHeader';
import { infographicSectionSiphon } from './components/infographicSiphon';
import { infographicSectionCan } from './components/infographicCan';
import { infographicSectionPan } from './components/infographicPan';
import { sliderComp } from './components/sliderComp';
import { footerSection } from './components/footer';
import { instructions } from './components/instructions';

/**
 * Component map
 * each component name is mapped to its template.
 */
const components = {
  header: headerComp,
  default: defaultComp,
  pageTitle: pageTitle,
  textBlockComp: initialMessageComp,
  teamMembersComp: membersSection,
  warningComp: featuredMessageComp,
  introductionTextComp: introText,
  registerFormComp: registerComp,
  timeline: instructions,
  percentTimelineHeader: infographicSectionHeader,
  percentTimelineItemSiphon: infographicSectionSiphon,
  percentTimelineItemCan: infographicSectionCan,
  percentTimelineItemPan: infographicSectionPan,
  slider: sliderComp,
  galleryComp: galleryComp,
  footer: footerSection,
};

const getCurrentPage = () => {
  const path = window.location.href.split('/');
  const location = path.slice(-1)[0].replace('.html', '') || 'home';
  if (!pageData[location] || location === 'common') {
    window.location.replace('/');
  }
  return location;
};

/**
 * Find and return the microPage initial wrapper
 */
const getPageWrapper = () => document.querySelector('#root');

/**
 *
 * @param {NodeElement} wrapper container of the sections
 * @param {array} sections element to append in the wrapper
 */
const appendSections = (sections) => {
  const pageWrapper = getPageWrapper();

  if (!pageWrapper) {
    console.log('NO PAGE WRAPPER FOUND, PAGE CANT BE RENDERED');
    return;
  }

  // TODO : Don't do appendChild in every forEach loop
  sections.forEach((section) => {
    if (components[section.component]) {
      pageWrapper.appendChild(components[section.component](section));
      // eslint-disable-next-line no-console
      console.log(section.component, 'loaded!');
    } else {
      pageWrapper.appendChild(components.default(section));
      // eslint-disable-next-line no-console
      console.log(section.component, 'not found, loading default component!');
    }
  });
};

/**
 *
 * @param {object} data contains the expected page content data
 * @param {object} layout
 * @param {object} layout.initalSections common elements in top of the page
 * @param {object} layout.finalSections common elements at the end of the page
 */
const pageInit = (data, { initalSections, finalSections }) => {
  appendSections(initalSections);
  appendSections(data.sections);
  appendSections(finalSections);
};

pageInit(pageData[getCurrentPage()], pageData.common);
