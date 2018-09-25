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
            password: '123456'
        });

        connection.connect();
        connection.query("USE mssc_tbl");
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
    console.log(req.body);
    //var userName = _user.name;

    var eosadr = _user.eosadr;
    var type = _user.type;
    var phone = _user.phoneNum;
    var email = _user.email;
    var amount = 0;
    var timeStamp = (new Date()).valueOf();

    select('SELECT * FROM user WHERE phone ="' + phone + '" AND email = "' + email + '" AND eosadr ="' + eosadr + '"').then(function (data) {
        if (data.status == 1) {
            console.log("手机、邮箱、eos地址不可重复！");
            res.json({
                status: 0,
                text: "手机、邮箱、eos地址不可重复！"
            });
            res.end();
        } else {
            // INSERT INTO user(phone,email,eosadr,eosamt,type,time,password) VALUES("13700137000","e@qq.com","eosadr","0","0","2018","abc")
            select('INSERT INTO user(phone,email,eosadr,eosamt,type,time) VALUES ("' + phone + '", "' + email + '", "' + eosadr + '","'+amount+'", "' + type + '", "' +timeStamp+'")').then(function (data) {
                console.log(data.result)
                res.json({state: 1});
                res.end();
            }).catch(function (err) {

            });
        }
    }).catch(function (err) {

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
