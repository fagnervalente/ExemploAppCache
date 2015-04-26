var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  	res.setHeader("Content-Type", "text/cache-manifest");
	fs.readFile('./manifest.appcache', function (err, data) { 
  		if (err) throw err; 
  		res.send(data);
  	});
});

module.exports = router;
