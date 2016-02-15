var express = require('express');
var router = express.Router();

var dbService = require('../service/dbService');

/* GET users listing. */
router.post('/user/login', function (req, res, next) {
    console.log(req.body);
    console.log(req.body.username);
    dbService.findUser(req.body.username, function (user) {
        if (user && user.password == req.body.password) {
            res.send({
                username: user.username,
                authToken: '',
                validUntil: new Date().setDate(new Date().getDate() + 1)
            });
        } else {
            res.send(null);
        }
    });
});

router.get('/gameTypes', function (req, res, next) {
    dbService.getGameTypes(function (result) {
        res.send(result);
    });
});

router.get('/records', function (req, res, next) {
    //connect to db
    //load what i need
    res.send('records');
});

module.exports = router;
