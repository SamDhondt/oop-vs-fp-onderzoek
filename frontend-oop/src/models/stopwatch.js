export default class StopWatch {
  constructor() {
    this._start = 0;
    this._end = 0;
  }

  get time() {
    const totalInSeconds = Math.floor((this._end - this._start) / 1000);
    const minutes = Math.floor(totalInSeconds / 60);
    const seconds = totalInSeconds % 60;
    return `${minutes}m ${seconds}s`;
  }

  start() {
    this._start = performance.now();
    this._end = 0;
  }

  stop() {
    this._end = performance.now();
  }
}
