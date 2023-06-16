// routes/api/users.js

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.post('/favorite-word', ensureLoggedIn, usersCtrl.addFavoriteWord)
router.get('/show-favorite-word', ensureLoggedIn, usersCtrl.showFavoriteWords)
router.delete('/delete-favorite-word/:id', ensureLoggedIn, usersCtrl.deleteFavoriteWord)
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;