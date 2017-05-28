/**
 * Created by Boris on 5/27/2017.
 */
var express = require('express');
var router = express.Router();

var billboard = require('billboard-top-100').getChart;


/* GET home page. */
router.get('/', function(req, res, next) {

    billboard('hot-100', function(songs, err) {

        if (err) console.log(err.message);

        console.log(songs);

        res.send(songs);
    });

    //res.send("check yo console");
});

module.exports = router;