const express = require('express');
const login = require('../public/javascripts/Info_DAO/account_dao');
const message = require('../public/javascripts/common/message_common');
const page = require('../public/javascripts/common/page_common');
const db_tabale_account = require('../public/javascripts/DAO/db_table_account');
const valid = require('../public/javascripts/common/helper');
const router = express.Router();

/**
 * Method authen to system using username and password
 */
router.post('/', function (req, res, next) {
    // Get username and password from form
    let user_name = req.body.user_name;
    let pass_word = req.body.pass_word;
    // Check null username and password
    if (user_name == null || user_name == '' || user_name == "") {
        res.render(page.page_login, { mess: message.MSG_ACC_1 });
    }
    if (pass_word == null || pass_word == '' || pass_word == "") {
        res.render(page.page_login, { mess: message.MSG_ACC_2 });
    }
    // Check authen by username and password
    db_tabale_account.findOne({
        where: {
            user_name: user_name,
            pass_word: pass_word
        }
    }).then(info => {
        req.session.user_login_okie = user_name;
        res.render(page.page_admin);
    }).catch(function (err) {
        res.render('error');
    });
});

/**
 * Refresh login page
 */
router.get('/', function (req, res, next) {
    let user = req.session.user_login_okie;
    if (user == null || user == '' || user == "") {
        res.render(page.page_login, { mess: 'Please login' });
    } else {
        res.render(page.page_admin);
    }
});

/**
 * Refresh login page
 */
router.get('/login', function (req, res, next) {
    res.render('login_user');
});

/**
 * Refresh register page
 */
router.get('/register', function (req, res, next) {
    res.render('register');
});

router.post('/login', function (req, res, next) {
    let uname = req.body.uname;
    let passwd = req.body.passwd;

    let check_uname = valid.valid_input(uname);
    let check_passwd = valid.valid_input(passwd);

    if (check_uname == false || check_passwd == false) {
        res.render(page.page_error);
    }

    db_tabale_account.findOne({
        where: {
            user_name: uname,
            pass_word: passwd,
            role: 0
        }
    }).then(info => {
        req.session.user_login_users = uname;
        res.redirect('/');
    }).catch(function (err) {
        res.render('error');
    });
});

router.post('/register-user', function (req, res, next) {
    let uname = req.body.username;
    let passwd = req.body.pass;
    let email = req.body.email;
    let phone = req.body.phone;

    let check_uname = valid.valid_input(uname);
    let check_passwd = valid.valid_input(passwd);
    let check_email = valid.valid_input(email);
    let check_phone = valid.valid_input(phone);
    if (check_uname == false || check_passwd == false || check_phone == false || check_email == false) {
        res.render(page.page_error);
    }
    db_tabale_account.create({
        email: email,
        user_name: uname,
        pass_word: passwd,
        phone_number: phone,
        role: 0
    })
    
  res.redirect('/authen/login');
});
module.exports = router;
