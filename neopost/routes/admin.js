var express = require('express');
const message = require('../public/javascripts/common/message_common');
const page = require('../public/javascripts/common/page_common');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render(page.page_login);
});

module.exports = router;
