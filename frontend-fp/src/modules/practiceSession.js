import { get } from './network';
import { sequence, appendToDOMElement, getItemNodes } from '../utils';

export const createPracticeSessionListItem = practiceSessions => practiceSession => {
  const listEl = document.createElement('li');
  const textNode = document.createTextNode(
    `${practiceSession.tempo} - ${practiceSession.duration}`
  );
  const buttonEl = document.createElement('button');
  buttonEl.onclick = () => {
    const event = new CustomEvent('onremovepracticesession', {
      detail: practiceSession._id
    });
    practiceSessions.dispatchEvent(event);
  };
  const buttonText = document.createTextNode('Remove');
  buttonEl.appendChild(buttonText);
  listEl.appendChild(textNode);
  listEl.appendChild(buttonEl);
  return listEl;
};

export const createPracticeSessionList = element => practiceSessions => placeholder => {
  if (practiceSessions && practiceSessions.length > 0) {
    const practiceSessionList = document.createElement('ul');
    sequence(
      getItemNodes(createPracticeSessionListItem(element)),
      appendToDOMElement(practiceSessionList)
    )(...practiceSessions);
    return practiceSessionList;
  } else {
    const pEl = document.createElement('p');
    const textNode = document.createTextNode(placeholder);
    pEl.appendChild(textNode);
    return pEl;
  }
};

export const retrievePracticeSessions = rudimentId =>
  get(`http://localhost:3001/rudiments/${rudimentId}/practiceSessions`);
