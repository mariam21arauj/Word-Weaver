const express = require('express');
const router = express.Router();
const searchCtrl = require('../../controllers/api/search');

router.get('/:searchQuery', searchCtrl.getData)

module.exports = router;