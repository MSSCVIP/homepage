var mysql = require('mysql');
var express = require('express');
var bodyParse = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("cookie-session");

function select(sql) {
    var promise = new Promise(function (resolve, reject) {
        var result = null;
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            port: '3306',
            password: '123456',
            database: 'mssc'
        });

        connection.connect();
        connection.query(sql, function (err, results, fields) {
                if (err) {
                    console.log("err");
                    reject(err);
                } else {
                    console.log("yes");
                    if (results.length > 0) {
                        resolve({status: 1});
                    } else {
                        resolve({status: 0});
                    }
                }
            }
        );
        connection.end();
    })

    return promise;
}

var router = express.Router();
router.use(bodyParse.urlencoded({extended: false}));
router.use(cookieParser())
router.use(session({
    secret: 'blog'
}))
router.use(function timeLog(req, res, next) {
    var _user = req.session.user;
    if (_user) {
        //router.locals.user = user;
    }
    next();
})

router.post("/register", function (req, res) {
    var _user = req.body;
    console.log(_user);
    //var userName = _user.name;

    // var eosadr = _user.eosadr;
    // var type = _user.type;
    // var phone = _user.phoneNum;
    var eosadr = 0;
    var type = 1;
    var phone = 0;
    var email = _user.email;
    var amount = 0;
    select('INSERT INTO user(phone,email,eosadr,eosamt,type) VALUES("' + phone + '","' + email + '","' + eosadr + '","' + amount + '","' + type + '")').then(function (data) {
        console.log(data)
        res.json({state: 1});
        res.end();
    }).catch(function (err) {
        console.log(err)
        //res.json({state: 0});
        res.end();
    });
})
router.get("/checkEosadr", function (req, res) {
    var _eosadr = req.query.eosadr;
    select('SELECT * FROM user WHERE eosadr="' + _eosadr + '"').then(function (data) {
        if (data.status == 1) {
            console.log('eos地址已存在')
            res.json({
                existed: true
            });
            res.end();
        }else {
            res.json({
                existed: false
            });
            res.end();
        }
    }).catch(function (err) {
        console.log(err)
    })
})
router.get("/checkPhone", function (req, res) {
    var _phone = req.query.phoneNum;
    select('SELECT * FROM user WHERE phone="' + _phone + '"').then(function (data) {
        if (data.status == 1) {
            console.log('手机已存在')
            res.json({
                existed: true
            });
            res.end();
        }else {
            res.json({
                existed: false
            });
            res.end();
        }
    }).catch(function (err) {
        console.log(err)
    })
})
router.get("/checkEmail", function (req, res) {
    var _email = req.query.email;
    select('SELECT * FROM user WHERE email="' + _email + '"').then(function (data) {
        if (data.status == 1) {
            console.log('邮箱地址已存在')
            res.json({
                existed: true
            });
            res.end();
        }else {
            res.json({
                existed: false
            });
            res.end();
        }
    }).catch(function (err) {
        console.log(err)
    })
})
router.get("/test", function (req, res) {

    console.log("test");
    res.json({
        test: "test"
    })
    //res.send('test')
})


module.exports = router;
