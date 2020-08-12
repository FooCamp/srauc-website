/**
 * @param {object} data contains the expected page content data
 * returns a default component to show the provided information.
 */
const defaultComp = (data) => {
  const section = document.createElement('SECTION');
  const title = document.createElement('H1');
  const text = document.createElement('P');
  title.innerText = data.component;
  text.innerText = JSON.stringify(data, null, 2);
  section.classList.add('default');
  section.appendChild(title);
  section.appendChild(text);

  return section;
};

export default defaultComp;
