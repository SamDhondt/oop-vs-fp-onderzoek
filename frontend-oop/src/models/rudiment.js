import PracticeSession from './practiceSession';

export default class Rudiment {
  constructor(id, name, sticking, practiceSessions) {
    this._id = id;
    this._name = name;
    this._sticking = sticking;
    this._practiceSessions = practiceSessions;
  }

  get name() {
    return this._name;
  }

  get sticking() {
    return this._sticking;
  }

  get practiceSessions() {
    return this._practiceSessions;
  }

  get id() {
    return this._id;
  }

  addPracticeSession(practiceSession) {
    this._practiceSessions.push(practiceSession);
  }

  resetPracticeSessions() {
    this._practiceSessions = [];
  }

  static fromJSON(json) {
    const practiceSessions = [];
    json.practiceSessions.forEach(psJson =>
      practiceSessions.push(PracticeSession.fromJSON(psJson))
    );
    return new Rudiment(json._id, json.name, json.sticking, practiceSessions);
  }
}
