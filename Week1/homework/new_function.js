function createAndAppend(tagName, parent, options = {}) {
  const elem = document.createElement(tagName);
  parent.appendChild(elem);
  for (const key of Object.keys(options)) {
    const value = options[key];
    if (key === 'text') {
      elem.textContent = value;
    } else {
      elem.setAttribute(key, value);
    }
  }
  return elem;
}
