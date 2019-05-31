const mongoose = require('mongoose');
const Controller = require('./controller');
const PracticeSession = mongoose.model('PracticeSessions');

module.exports = class PracticeSessionController extends Controller {
  constructor() {
    super(PracticeSession);
  }

  async getPracticeSessionsForRudiment(rudimentId) {
    return new Promise((resolve, reject) => {
      PracticeSession.find(
        { rudiment: rudimentId },
        (err, practiceSessions) => {
          if (err) reject(err);
          resolve(practiceSessions);
        }
      );
    });
  }
};
