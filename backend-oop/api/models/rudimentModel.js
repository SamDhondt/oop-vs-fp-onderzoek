var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RudimentSchema = new Schema({
  name: {
    type: String
  },
  sticking: {
    type: String
  },
  practiceSessions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'PracticeSessions'
    }
  ]
});

module.exports = mongoose.model('Rudiments', RudimentSchema);
