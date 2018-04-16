var express = require('express');
const info_support = require('../public/javascripts/Info_DAO/info_support');
var router = express.Router();
const page = require('../public/javascripts/common/page_common');

/* GET users listing. */
router.get('/', function(req, res, next) {
    info_support.find_all_info_support().then(result => {
        console.log(result.dataValues);
        res.render(page.page_index,{list:result});
    });
});

module.exports = router;
