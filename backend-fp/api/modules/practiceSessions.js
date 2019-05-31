const mongoose = require('mongoose');
const PracticeSession = mongoose.model('PracticeSessions');
const { getByDocumentQuery } = require('../endpoints/get');

const getPracticeSessionsForRudiment = async rudimentId =>
  getByDocumentQuery(PracticeSession)({ rudiment: rudimentId });

module.exports = {
  getPracticeSessionsForRudiment
};
