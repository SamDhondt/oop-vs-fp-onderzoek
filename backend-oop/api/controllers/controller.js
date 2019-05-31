module.exports = class Controller {
  constructor(model) {
    if (!model) {
      throw new Error('Cannot instantiate this object directly');
    }
    this._model = model;
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      this._model.find({}, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

  async getById(id) {
    return new Promise((resolve, reject) => {
      this._model.findById(id, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

  async add(body) {
    return new Promise((resolve, reject) => {
      const newItem = new this._model(body);
      newItem.save((err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
};
