export const assingClasses = (element, classes = []) => {
  classes.forEach((className) => {
    element.classList.add(className);
  });
  return element;
};

export const createTagWithClasses = (tag, classes) => {
  let element = document.createElement(tag);
  element = assingClasses(element, classes);
  return element;
};

export const newText = (type, content, classes = []) => {
  const oneElement = createTagWithClasses(type, classes);
  oneElement.innerText = content;
  return oneElement;
};

export const newContainer = (type, content = [], classes = []) => {
  const oneElement = createTagWithClasses(type, classes);
  content.forEach((element) => {
    oneElement.appendChild(element);
  });
  return oneElement;
};

export const newLink = (href, text, classes = []) => {
  const oneElement = createTagWithClasses('a', classes);
  oneElement.innerText = text;
  oneElement.href = href;
  return oneElement;
};

export const newMultimedia = (type, src, alt, classes = []) => {
  const oneElement = createTagWithClasses(type);
  const container = newContainer('div', [oneElement], classes);
  oneElement.src = src;
  oneElement.alt = alt;
  return container;
};
