var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getUser', function(req, res, next){
  var jsonObj = {
    name : "fatih",
    username : "4fath",
    phone : "539"
  };

  res.setHeader('content-type', 'text/javascript');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(jsonObj);
});

router.post('/getUser', function (req, res, next) {
  var name = req.body.name;
  var username = req.body.username;

  console.log("====== BODY START======");
  console.log(req.body);
  console.log("====== BODY END======");

  var jsonObj = {
    name : "fatih",
    username : "4fath",
    phone : "539"
  };
  var jsonObjAnony = {
    name : "unKnown",
    username : "unKnown",
    phone : "unKnown"
  };

  if(username == '4fath'){
    res.send(jsonObj);
  }else {
    res.send(jsonObjAnony);
  }

});

module.exports = router;
