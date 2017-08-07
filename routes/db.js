'use strict'
const mongoose = require('mongoose')
// 连接mongodb
var conn = mongoose.connect('mongodb://59.110.157.232/news');

/*conn.on('error', function(error) {
    console.log(error);
});*/

var prod = new mongoose.Schema({

    title:String,
    img:String,
    new_time:String,
    orign_cn:String
})

/*var subprod = new mongoose.Schema({

    name:String,
    child:Boolean,
    parent:String

})*/


var news_connection = conn.model('news',prod);

/*
var subprodModel = conn.model('subprods',subprod);
*/

module.exports = {news_connection:news_connection};




