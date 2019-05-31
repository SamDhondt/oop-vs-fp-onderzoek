const { handleDbResponse } = require('../util/handleDbResponse');

const updateByDocumentQuery = model => id => documentQuery =>
  new Promise((resolve, reject) => {
    model.findByIdAndUpdate(
      id,
      documentQuery,
      handleDbResponse(resolve, reject)
    );
  });

module.exports = {
  updateByDocumentQuery
};
