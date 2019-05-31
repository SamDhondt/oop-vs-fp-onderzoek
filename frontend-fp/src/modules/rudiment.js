import { sequence, appendToDOMElement, getItemNodes } from '../utils';
import {
  createPracticeSessionListItem,
  createPracticeSessionList
} from './practiceSession';
import { get, deleteRequest } from './network';
import { createButton } from './components';

export const createRudimentListNode = onClick => rudiment => {
  const listEl = document.createElement('li');
  const anchorEl = document.createElement('a');
  anchorEl.setAttribute('href', '#');
  anchorEl.addEventListener('click', () => onClick(rudiment));
  const textNode = document.createTextNode(
    `${rudiment.name} - ${rudiment.sticking}`
  );
  anchorEl.appendChild(textNode);
  listEl.appendChild(anchorEl);
  return listEl;
};

export const onRudimentClick = (
  practiceSessions,
  placeholder
) => async rudiment => {
  practiceSessions.innerHTML = '';
  const rudimentPracticeSessions = await get(
    `http://localhost:3001/rudiments/${rudiment._id}/practiceSessions`
  );
  practiceSessions.appendChild(
    createPracticeSessionList(practiceSessions)(rudimentPracticeSessions)(
      placeholder
    )
  );
  if (rudimentPracticeSessions.length > 0) {
    practiceSessions.appendChild(
      createButton('Reset', () => {
        const event = new CustomEvent('onrudimentreset', {
          detail: rudiment._id
        });
        practiceSessions.dispatchEvent(event);
      })
    );
  }
  const event = new CustomEvent('onrudimentselect', { detail: rudiment._id });
  practiceSessions.dispatchEvent(event);
};

export const retrieveRudiments = () => get(`http://localhost:3001/rudiments`);
