const express = require('express');
const login = require('../public/javascripts/authentication_login');
const message = require('../public/javascripts/common/message_common');
const page = require('../public/javascripts/common/page_common');
const router = express.Router();

/**
 * Method authen to system using username and password
 */
router.post('/authen', function (req, res, next) {
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
    login.authen_login(user_name, pass_word).then((result) => {
        if (result != null) {
            res.render(page.page_index);
        } else {
            res.render(page.page_login, { mess: message.MSG_ACC_3 });
        }
    });
});

module.exports = router;
