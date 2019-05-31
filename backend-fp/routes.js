const mongoose = require('mongoose');
const Rudiment = mongoose.model('Rudiments');
const {
  getAllRudiments,
  getRudimentById,
  addPracticeSessionToRudiment,
  removePracticeSessionsFromRudiment,
  removePracticeSessionFromRudiment
} = require('./api/modules/rudiments');
const {
  getPracticeSessionsForRudiment
} = require('./api/modules/practiceSessions');

const {
  handleRequestAndResponse
} = require('./api/util/handleRequestAndResponse');

module.exports = function(app) {
  app.route('/rudiments').get(handleRequestAndResponse(getAllRudiments));
  app
    .route('/rudiments/:rudimentId')
    .get((req, res) =>
      handleRequestAndResponse(() => getRudimentById(req.params.rudimentId))(
        req,
        res
      )
    );

  app
    .route('/rudiments/:rudimentId/practiceSessions')
    .get((req, res) =>
      handleRequestAndResponse(() =>
        getPracticeSessionsForRudiment(req.params.rudimentId)
      )(req, res)
    )
    .post((req, res) =>
      handleRequestAndResponse(() =>
        addPracticeSessionToRudiment(req.params.rudimentId, req.body)
      )(req, res)
    )
    .delete((req, res) =>
      handleRequestAndResponse(() =>
        removePracticeSessionsFromRudiment(req.params.rudimentId)
      )(req, res)
    );

  app
    .route('/rudiments/:rudimentId/practiceSessions/:practiceSessionId')
    .delete((req, res) =>
      handleRequestAndResponse(() =>
        removePracticeSessionFromRudiment(
          req.params.rudimentId,
          req.params.practiceSessionId
        )
      )(req, res)
    );
};
