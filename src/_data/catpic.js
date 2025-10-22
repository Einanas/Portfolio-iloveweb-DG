const axios = require("axios");

module.exports = async () => {
  const result = await axios.get("https://api.thecatapi.com/v1/images/search");

  return result.data[0].url;
  // return result.data.file;
};