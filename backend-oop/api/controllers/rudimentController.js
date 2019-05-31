const mongoose = require('mongoose');
const Rudiment = mongoose.model('Rudiments');
const PracticeSession = mongoose.model('PracticeSessions');
const Controller = require('./controller');

module.exports = class RudimentController extends Controller {
  constructor() {
    super(Rudiment);
  }

  async addPracticeSessionToRudiment(rudimentId, body) {
    return new Promise((resolve, reject) => {
      const newPracticeSession = new PracticeSession(body);
      Rudiment.findById(rudimentId, (err, rudiment) => {
        if (err) reject(err);
        newPracticeSession.rudiment = mongoose.Types.ObjectId(rudiment._id);
        newPracticeSession.save((err, practiceSession) => {
          if (err) reject(err);
          rudiment.practiceSessions.push(newPracticeSession);
          rudiment.save((err, rud) => {
            if (err) reject(err);
            resolve(practiceSession);
          });
        });
      });
    });
  }

  async removePracticeSession(rudimentId, practiceSessionId) {
    return new Promise((resolve, reject) => {
      Rudiment.findByIdAndUpdate(
        rudimentId,
        { $pull: { practiceSessions: { $in: [practiceSessionId] } } },
        (err, rudiment) => {
          if (err) reject(err);
          PracticeSession.findByIdAndDelete(
            practiceSessionId,
            (err, practiceSession) => {
              if (err) reject(err);
              resolve(practiceSession);
            }
          );
        }
      );
    });
  }

  async removePracticeSessions(rudimentId) {
    return new Promise((resolve, reject) => {
      Rudiment.updateOne(
        { _id: rudimentId },
        { $set: { practiceSessions: [] } },
        (err, data) => {
          if (err) reject(err);
          PracticeSession.deleteMany({ rudiment: rudimentId }, err => {
            if (err) reject(err);
            resolve(data);
          });
        }
      );
    });
  }
};
