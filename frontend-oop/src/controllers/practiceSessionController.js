import PracticeSession from '../models/practiceSession';

export default class PracticeSessionController extends EventTarget {
  constructor(practiceSessionsNode) {
    super();
    this._practiceSessionsNode = practiceSessionsNode;
    this._practiceSessionsListNode = document.createElement('ul');
  }

  async showPracticeSessions(rudimentId) {
    const response = await fetch(
      `http://localhost:3001/rudiments/${rudimentId}/practiceSessions`
    );
    const psJson = await response.json();
    const practiceSessions = [];
    psJson.forEach(ps => practiceSessions.push(PracticeSession.fromJSON(ps)));
    this._practiceSessionsNode.innerHTML = '';
    if (practiceSessions && practiceSessions.length > 0) {
      this._practiceSessionsListNode.innerHTML = '';
      practiceSessions.forEach(practiceSession => {
        const listEl = document.createElement('li');
        const textNode = document.createTextNode(
          `${practiceSession.tempo} - ${practiceSession.duration}`
        );
        const buttonEl = document.createElement('button');
        const buttonText = document.createTextNode('Remove');
        buttonEl.appendChild(buttonText);
        buttonEl.onclick = () => {
          const event = new CustomEvent('onRemovePracticeSession', {
            detail: practiceSession.id
          });
          this.dispatchEvent(event);
        };
        listEl.appendChild(textNode);
        listEl.appendChild(buttonEl);
        this._practiceSessionsListNode.appendChild(listEl);
      });
      this._practiceSessionsNode.appendChild(this._practiceSessionsListNode);
      const buttonEl = document.createElement('button');
      const buttonText = document.createTextNode('Reset');
      buttonEl.appendChild(buttonText);
      buttonEl.onclick = () => {
        const event = new CustomEvent('onResetPracticeSessions');
        this.dispatchEvent(event);
      };
      this._practiceSessionsNode.appendChild(buttonEl);
    } else {
      this._practiceSessionsNode.innerText =
        'No practice sessions for this rudiment';
    }
  }
}
