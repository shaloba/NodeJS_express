var express = require('express');
var router = express.Router();
var vd = require("../videodata.json");
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.method);
  return_obj = { name: 'Shlomy' ,
    food:'Pizza',
    videodata:vd,
    category: {}};
  params = req.query;
  if(req.method == 'GET') {
    if ("categoryID" in params) {
      for (var i = 0; i < vd['categories'].length; i++) {
        if (vd['categories'][i]['categoryID'] == params['categoryID']) {
          return_obj['category'] = vd['categories'][i];
        }

      }
    }
  }
  else{
    return_obj['category'] = {};
  }

  res.render('index', return_obj);
});

router.post('/', function(req, res, next) {
  res.render('index', { name: 'Shlomy' ,
    food:'Pizza',
    videodata:vd});
});
module.exports = router;
