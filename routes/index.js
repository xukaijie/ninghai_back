var express = require('express');
var router = express.Router();

const news_connection = require('./db.js').news_connection;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/news_list', function(req, res, next) {


    var body = JSON.parse(req.body);

    console.log(body)

    var page = body.page?parseInt(body.page):1;

    var num = body.num?parseInt(body.num):5;


    news_connection.find({},{title:1,_id:-1,img:1,new_time:1,orign_cn:1}).skip((page-1)*num).limit(num).exec(function(err,result){

      console.log(err);
      res.json({result:result})
    })

})
module.exports = router;
