const handleDbResponse = (resolve, reject) => (err, data) => {
  if (err) reject(err);
  resolve(data);
};

module.exports = {
  handleDbResponse
};
