const { handleDbResponse } = require('../util/handleDbResponse');

const removeItem = model => id =>
  new Promise((resolve, reject) => {
    model.findByIdAndDelete(id, handleDbResponse(resolve, reject));
  });

const removeItemsByDocumentQuery = model => documentQuery =>
  new Promise((resolve, reject) => {
    model.deleteMany(documentQuery, handleDbResponse(resolve, reject));
  });

module.exports = {
  removeItem,
  removeItemsByDocumentQuery
};
