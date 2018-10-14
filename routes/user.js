var express = require('express');
var router = express.Router();

/* GET home page. */
var data = {};
router.post('/data', function(req, res, next) {
  console.log(req.body);
  data.id = 1;
  res.send(data);
});

router.get('/data', function(req, res, next) {
  console.log(req.body);
  data.id = 1;
  res.send(data);
});

module.exports = router;