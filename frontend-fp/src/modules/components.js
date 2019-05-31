export function createButton(text, onClick) {
  const buttonEl = document.createElement('button');
  const textNode = document.createTextNode(text);
  buttonEl.onclick = onClick;
  buttonEl.appendChild(textNode);
  return buttonEl;
}

export function createOption(value) {
  const optionEl = document.createElement('option');
  optionEl.value = value;
  const textNode = document.createTextNode(value);
  optionEl.appendChild(textNode);
  return optionEl;
}
