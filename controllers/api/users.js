const User = require('../../models/user')
const jwt = require ('jsonwebtoken')
const bcrypt = require('bcrypt');
const { search } = require('../../routes/api/users');


module.exports = {
    create,
    login,
    getData
  };
  
  // controllers/api/users.js

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);

  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) res.status(400).json(error);
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) res.status(400).json(error);
    const token = createJWT(user)
    res.json(token);
  } catch(error) {
    res.status(400).json('Bad Credentials');
  }
}

/*-- Helper Functions --*/

function createJWT(user) {
  console.log(user)
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

function getData(){
  const options = {
    method: 'GET',
    url: 'https://wordsapiv1.p.rapidapi.com/words/house',
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

