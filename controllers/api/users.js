const User = require('../../models/user')
const jwt = require ('jsonwebtoken')
const bcrypt = require('bcrypt');
// const { search } = require('../../routes/api/users');


module.exports = {
    create,
    login,
    checkToken,
    addFavoriteWord
  };
  
  // controllers/api/users.js

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    user.favoriteWord = []
    const token = createJWT(user);
    res.json(token);

  } catch (err) {
    console.log(err)
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json({ error: err.message });
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

function checkToken(req, res) {
  // req.user will always be ther for you when a token is sent!
  console.log('req.user ', req.user);
  res.json(req.exp);
}

async function addFavoriteWord(req, res) {
  try {
    const user = req.user;
    const { word, definition, example } = req.body;
    user.favoriteWord.push({ word, definition, example });
    await user.save();
    res.json(user.favoriteWord);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });;
  }
}



