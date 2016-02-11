var express = require('express');
var router = express.Router();

var dbService = require('../service/dbService');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  //connect to db
  //load what i need
  res.send('records');
});

router.get('/gameTypes', function(req, res, next) {
  dbService.getGameTypes(function(result) {
    res.send(result);
  });
});

router.get('/records', function(req, res, next) {
  //connect to db
  //load what i need
  res.send('records');
});

module.exports = router;
