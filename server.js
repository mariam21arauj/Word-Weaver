const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const axios = require('axios')
require('dotenv').config();
require('./config/database')
const app = express();
const cors = require('cors')

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

app.get('/api/:searchQuery', (req,res)=>{    
  const options = {
      method: 'GET',
      url: `https://wordsapiv1.p.rapidapi.com/words/${req.params.searchQuery}`,
      headers: {
          'X-RapidAPI-Key':process.env.API_KEY,
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
 };
  axios.request(options).then(function (response) {
      res.json(response.data);
  }).catch(function (error) {
      console.error(error);
  });
})

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});




const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});