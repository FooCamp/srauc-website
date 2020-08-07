/**
 * @param {object} data contains the expected page content data
 * returns a default component to show the provided information.
 */
const defaultComp = (data) => {
  // TODO : Use pre instead of section
  const section = document.createElement('pre');
  section.classList.add('default');
  section.textContent = JSON.stringify(data, null, 2);
  return section;
};

export default defaultComp;
