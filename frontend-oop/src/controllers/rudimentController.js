import Rudiment from '../models/rudiment';
import PracticeSession from '../models/practiceSession';
import NetworkRequest from '../util/networkRequest';

const BACKEND_URL = 'http://localhost:3001/rudiments/';

export default class RudimentController extends EventTarget {
  constructor(rudimentListNode) {
    super();
    this._rudiments = [];
    this._rudimentListNode = rudimentListNode;
  }

  async addPracticeSessionToRudiment(rudimentId, practiceSession) {
    const response = await fetch(
      `${BACKEND_URL}${rudimentId}/practiceSessions`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(practiceSession)
      }
    );
    return response.json();
  }

  async showRudiments(filter) {
    if (this._rudiments.length === 0) {
      const response = await fetch(BACKEND_URL);
      const rudiments = await response.json();
      this._rudiments = [];
      rudiments.forEach(rudJson =>
        this._rudiments.push(Rudiment.fromJSON(rudJson))
      );
    }
    this._rudimentListNode.innerHTML = '';
    let filteredRudiments = [];
    this._rudiments.forEach(rudiment => {
      if (rudiment.name.indexOf(filter) >= 0) {
        filteredRudiments.push(rudiment);
      }
    });

    filteredRudiments.forEach(rudiment => {
      const listEl = document.createElement('li');
      const anchorEl = document.createElement('a');
      anchorEl.setAttribute('href', '#');
      anchorEl.addEventListener('click', () => {
        const event = new CustomEvent('rudimentselect', {
          detail: rudiment
        });
        this.dispatchEvent(event);
      });
      const textNode = document.createTextNode(
        `${rudiment.name} - ${rudiment.sticking}`
      );
      anchorEl.appendChild(textNode);
      listEl.appendChild(anchorEl);
      this._rudimentListNode.appendChild(listEl);
    });
  }

  async removePracticeSessionFromRudiment(rudimentId, practiceSessionId) {
    try {
      const response = await fetch(
        `${BACKEND_URL}${rudimentId}/practiceSessions/${practiceSessionId}`,
        { method: 'delete' }
      );
    } catch (err) {
      console.log(err);
    }
  }

  async removeAllPracticeSessionsFromRudiment(rudimentId) {
    console.log(rudimentId);
    try {
      await fetch(`${BACKEND_URL}${rudimentId}/practiceSessions`, {
        method: 'delete'
      });
    } catch (err) {
      console.log(err);
    }
  }
}
