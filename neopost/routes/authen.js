const express = require('express');
const login = require('../public/javascripts/Info_DAO/account_dao');
const message = require('../public/javascripts/common/message_common');
const page = require('../public/javascripts/common/page_common');
const db_tabale_account = require('../public/javascripts/DAO/db_table_account');
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
        console.log(info);
        res.render(page.page_admin);
    }).catch(function (err) {
        console.log(err);
        res.render('error');
    });
});

module.exports = router;
