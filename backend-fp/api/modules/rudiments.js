const mongoose = require('mongoose');
const Rudiment = mongoose.model('Rudiments');
const PracticeSession = mongoose.model('PracticeSessions');
const { getAll, getById } = require('../endpoints/get');
const { addItem } = require('../endpoints/post');
const { handleDbResponse } = require('../util/handleDbResponse');
const {
  removeItem,
  removeItemsByDocumentQuery
} = require('../endpoints/delete');
const { updateByDocumentQuery } = require('../endpoints/put');

const getAllRudiments = () => getAll(Rudiment);
const getRudimentById = rudimentId => getById(Rudiment)(rudimentId);
const addPracticeSessionToRudiment = (rudimentId, body) =>
  new Promise(async (resolve, reject) => {
    try {
      const rudiment = await getRudimentById(rudimentId);
      const newPracticeSession = await addItem(PracticeSession)({
        ...body,
        rudiment: mongoose.Types.ObjectId(rudiment._id)
      });
      rudiment.practiceSessions.push(newPracticeSession);
      rudiment.save((err, rud) => {
        if (err) reject(err);
        resolve(newPracticeSession);
      });
    } catch (err) {
      reject(err);
    }
  });

const removePracticeSessionFromRudiment = async (
  rudimentId,
  practiceSessionId
) => {
  try {
    await updateByDocumentQuery(Rudiment)(rudimentId)({
      $pull: { practiceSessions: { $in: [practiceSessionId] } }
    });
    const result = await removeItem(PracticeSession)(practiceSessionId);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const removePracticeSessionsFromRudiment = async rudimentId => {
  try {
    const rudiment = await updateByDocumentQuery(Rudiment)(rudimentId)({
      $set: { practiceSessions: [] }
    });
    return removeItemsByDocumentQuery(PracticeSession)({
      rudiment: rudiment._id
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllRudiments,
  getRudimentById,
  addPracticeSessionToRudiment,
  removePracticeSessionsFromRudiment,
  removePracticeSessionFromRudiment
};
