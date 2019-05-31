const { handleDbResponse } = require('../util/handleDbResponse');

const addItem = model => body =>
  new Promise((resolve, reject) => {
    const newItem = new model(body);
    newItem.save(handleDbResponse(resolve, reject));
  });

module.exports = {
  addItem
};
