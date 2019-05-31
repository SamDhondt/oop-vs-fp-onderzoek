const handleRequestAndResponse = endpoint => async (req, res) => {
  try {
    const result = await endpoint();
    res.json(result);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  handleRequestAndResponse
};
