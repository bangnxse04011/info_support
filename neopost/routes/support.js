var express = require('express');
var router = express.Router();
const page = require('../public/javascripts/common/page_common');
const message_common = require('../public/javascripts/common/message_common');
var nodemailer = require('nodemailer');

/* get users listing. */
router.get('/', function (req, res, next) {

    let name = req.body.name;
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;

    console.log("--------------------------------------------------");


    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'alonghe24h@gmail.com',
            pass: 'alonghe123@'
        }
    });

    var mainOptions = {
        from: message_common.MSG_EMAIL_FROM,
        to: email,
        subject: subject,
        text: message,
        html: '<p>Thông tin feed back Vilucky</b><ul><li> Họ Và Tên:' + name + '</li><li>Email:' + email + '</li><li>Nội dung:' + message + '</li></ul>'
    }
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message sent: ' + info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;
