const axios = require('axios')

module.exports = {
  getData
};

function getData(req, res){
    const options = {
      method: 'GET',
      url: `https://wordsapiv1.p.rapidapi.com/words/${req.params.searchQuery}`,
      headers: {
          'X-RapidAPI-Key':process.env.API_KEY,
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
  };
  axios.request(options).then(function (response) {
  
    return res.json(response.data);
  }).catch(function (error) {
      console.error(error);
  });
  
  }