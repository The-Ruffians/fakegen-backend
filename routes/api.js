var express = require('express');
var router = express.Router();

const { 
  getBrief,
} = require('../controllers/briefController');

// Redirect if endpoint is not given
router.get('/', function(req, res, next) {
  res.redirect('/');
});

// Get a random brief
router.get('/brief', getBrief);

module.exports = router;