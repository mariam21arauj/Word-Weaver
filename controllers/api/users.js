const User = require('../../models/user')
const jwt = require ('jsonwebtoken')
module.exports = {
    create,
    login
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
    console.log(req.body)
    const user = await User.findOne({ email: req.body.email });
    console.log(user)
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

