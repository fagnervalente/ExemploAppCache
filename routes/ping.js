var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.setHeader('cache-control', 'no-cache');
  res.setHeader('Content-Type', 'application/json');
  res.send({
  	timestamp: new Date()
  });
});

module.exports = router;
