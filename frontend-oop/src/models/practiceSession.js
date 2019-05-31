export default class PracticeSession {
  constructor(id, tempo, duration) {
    this._id = id;
    this._tempo = tempo;
    this._duration = duration;
  }

  get tempo() {
    return this._tempo;
  }

  get duration() {
    return this._duration;
  }

  get id() {
    return this._id;
  }

  static fromJSON(json) {
    return new PracticeSession(json._id, json.tempo, json.duration);
  }

  toJSON() {
    return {
      tempo: this._tempo,
      duration: this._duration
    };
  }
}
