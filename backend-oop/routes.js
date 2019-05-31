module.exports = function(app) {
  const PracticeSessionController = require('./api/controllers/practiceSessionController');
  const RudimentController = require('./api/controllers/rudimentController');

  const rudimentController = new RudimentController();
  const practiceSessionController = new PracticeSessionController();

  app
    .route('/rudiments')
    .get(async (req, res) => {
      try {
        const rudiments = await rudimentController.getAll();
        res.json(rudiments);
      } catch (err) {
        res.send(err);
      }
    })
    .post(async (req, res) => {
      try {
        const newRudiment = await rudimentController.add(req.body);
        res.json(body);
      } catch (err) {
        res.send(err);
      }
    });

  app.route('/rudiments/:rudimentId').get(async (req, res) => {
    try {
      const rudiment = await rudimentController.getById(req.params.rudimentId);
      res.json(rudiment);
    } catch (err) {
      res.send(err);
    }
  });

  app
    .route('/rudiments/:rudimentId/practiceSessions')
    .delete(async (req, res) => {
      try {
        const result = await rudimentController.removePracticeSessions(
          req.params.rudimentId
        );
        res.json(result);
      } catch (err) {
        res.send(err);
      }
    })
    .post(async (req, res) => {
      try {
        const newPracticeSession = await rudimentController.addPracticeSessionToRudiment(
          req.params.rudimentId,
          req.body
        );
        res.json(newPracticeSession);
      } catch (err) {
        res.send(err);
      }
    })
    .get(async (req, res) => {
      try {
        const practiceSessions = await practiceSessionController.getPracticeSessionsForRudiment(
          req.params.rudimentId
        );
        res.json(practiceSessions);
      } catch (err) {
        res.send(err);
      }
    });

  app
    .route('/rudiments/:rudimentId/practiceSessions/:practiceSessionId')
    .delete(async (req, res) => {
      try {
        const deletedPracticeSession = await rudimentController.removePracticeSession(
          req.params.rudimentId,
          req.params.practiceSessionId
        );
        res.json(deletedPracticeSession);
      } catch (err) {
        res.send(err);
      }
    });

  app.route('/practiceSessions/:practiceSessionId').get(async (req, res) => {
    try {
      const practiceSession = practiceSessionController.getById(
        req.params.practiceSessionId
      );
      res.json(practiceSession);
    } catch (err) {
      res.send(err);
    }
  });
};
