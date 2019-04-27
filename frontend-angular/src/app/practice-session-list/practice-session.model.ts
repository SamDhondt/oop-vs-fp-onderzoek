export class PracticeSession {
  private _id: number;
  private _tempo: number;
  private _duration: string;

  constructor(id: number, tempo: number, duration: string) {
    this._id = id;
    this._tempo = tempo;
    this._duration = duration;
  }

  get tempo(): number {
    return this._tempo;
  }

  get duration(): string {
    return this._duration;
  }

  get id(): number {
    return this._id;
  }
}
