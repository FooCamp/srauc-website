const createElement = (typeTag, classList) => {
  const element = document.createElement(typeTag);
  element.classList.add(classList);
  return element;
};

export { createElement };
