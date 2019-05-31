var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PracticeSessionSchema = new Schema({
  tempo: {
    type: Number
  },
  duration: {
    type: String
  },
  rudiment: {
    type: Schema.Types.ObjectId,
    ref: 'Rudiments'
  }
});

module.exports = mongoose.model('PracticeSessions', PracticeSessionSchema);
