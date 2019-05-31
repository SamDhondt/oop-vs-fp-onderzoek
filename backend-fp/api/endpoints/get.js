const { handleDbResponse } = require('../util/handleDbResponse');

const getAll = model =>
  new Promise((resolve, reject) => {
    model.find({}, handleDbResponse(resolve, reject));
  });

const getById = model => id =>
  new Promise((resolve, reject) => {
    model.findById(id, handleDbResponse(resolve, reject));
  });

const getByDocumentQuery = model => documentQuery =>
  new Promise((resolve, reject) => {
    model.find(documentQuery, handleDbResponse(resolve, reject));
  });

module.exports = {
  getAll,
  getById,
  getByDocumentQuery
};
